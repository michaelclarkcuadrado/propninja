<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-tile @click="false">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="false">
          <v-list-tile-action>
            <v-icon>business</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Properties</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="false">
          <v-list-tile-action>
            <v-icon>view_week</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pipeline Board</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="false">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left dark color="primary">
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="width: 200px">SPG Properties</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--Desktop Search bar-->
      <v-text-field 
        v-on:input="searchProperties()"
        flat
        hide-details
        solo-inverted
        v-model="searchTerms"
        prepend-inner-icon="search"
        label="Search by Address"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn @click="syncIntegrations()" icon slot="activator">
          <v-icon>cloud_download</v-icon>
        </v-btn>
        <span>Sync Integrations</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn @click="refreshAllState()" icon slot="activator">
          <v-icon>refresh</v-icon>
        </v-btn>
        <span>Refresh</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-toolbar flat class="hidden-sm-and-down">
        {{Number(propertySummaries.length).toLocaleString()}} Properties
        <v-spacer></v-spacer>
        <v-menu>
          <v-chip slot="activator">{{supportedModes[currentMode].name}}</v-chip>
          <v-list>
          <v-list-tile
            v-for="(item, i) in supportedModes"
            :key="i"
            @click="changeOrdering(i)">
            <v-list-tile-title>{{item.name}}</v-list-tile-title>
          </v-list-tile>
          </v-list>
        </v-menu>
      <v-chip @click="changeOrderingDirection()">
        <v-icon :style="{transform: (isOrderInverted ? 'rotateX(180deg)' : '')}">sort</v-icon>
        {{(isOrderInverted ? 'Ascending' : 'Descending')}}</v-chip>
      </v-toolbar>
      <v-container grid-list-lg fluid>
        <!-- Mobile Search bar-->
        <v-text-field 
        v-on:input="searchProperties()"
        flat
        hide-details
        box
        v-model="searchTerms"
        prepend-inner-icon="search"
        label="Search by Address"
        class="hidden-md-and-up"
      ></v-text-field>
        <v-layout row wrap>
          <PropertySummaryCard
            v-for="(summaryObj, summaryIndex) in propertySummaries"
            v-bind:key="summaryIndex"
            :summaryObj="summaryObj"
            :propertyStages="enumTypes['property_stages']"
            v-on:open-dialog="openDetailDialog"
          >
          </PropertySummaryCard>
           <v-btn
              fixed
              dark
              fab
              bottom
              right
              color="secondary"
            >
              <v-icon>add</v-icon>
            </v-btn>
        </v-layout>
      </v-container>
    </v-content>
    <property-detail-dialog 
      :dialog-is-open="isPropertyDetailDialogShowing" 
      :propertyDetailObj="propDetailObj"
      :enumTypes="enumTypes"
      v-on:close-dialog="isPropertyDetailDialogShowing = false">
    </property-detail-dialog>

    <v-snackbar v-model="snackbarShowing" bottom right multi-line :timeout="snackbarTimeout">
      {{snackbarMsg}}
      <v-btn
        v-show="snackbarButtonVisible"
        color="pink"
        flat
        @click="snackbarShowing = false"
      >Dismiss</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import PropertySummaryCard from "./PropertySummaryCard.vue";
import PropertyDetailDialog from "./PropertyDetailDialog.vue";
const axios = require("axios");
export default {
  data: function() {
    return {
      currentMode: 0,
      supportedModes: [
        {name: "Order by Units"},
        {name: "Order by Value"},
        {name: "Order by Debt"},
        {name: "Order by Rent Roll"},
      ],
      isOrderInverted: false, // false - order descending, true - order ascending
      drawer: null,
      totalSeen: 0,
      propertySummaries: [],
      enumTypes:[],
      searchTerms: "",
      searchDebouncer: false,
      searchWaiting: false,
      propDetailObj: null,
      isPropertyDetailDialogShowing: false,
      snackbarShowing: false,
      snackbarMsg: "",
      snackbarTimeout: 1,
      snackbarButtonVisible: true,
      apiHostname: "http://localhost:8888"
    };
  },
  methods: {
    refreshPropSummaries: function() {
      let self = this;
      self.totalSeen = 0;
      axios
        .get(
          self.apiHostname + "/getPropertySummaries?lastSeen=" +
            self.totalSeen +
            "&ordering=" +
            self.currentMode +
            "&inverted=" +
            (self.isOrderInverted ? '1' : '0') +
            "&search=" +
            self.searchTerms
        )
        .then(function(response) {
          self.clearSnack();
          self.propertySummaries = response.data;
        })
        .catch(function(error) {
          self.propertySummaries = [];
          self.showSnack(
            "Could not connect to API. Check your connection and try again.",
            15000,
            true
          );
        });
    },
    changeOrdering: function(orderingMode){
      if(orderingMode !== this.currentMode){
          this.totalSeen = 0;
          this.currentMode = orderingMode;
          this.refreshPropSummaries();
      }
    },
    changeOrderingDirection: function(){
      this.totalSeen = 0;
      this.isOrderInverted = !this.isOrderInverted;
      this.refreshPropSummaries();
    },
    searchProperties: function() {
      //start debounce logic
      let self = this;
      if (self.searchDebouncer) {
        self.searchWaiting = true;
        return;
      }
      self.searchDebouncer = true;
      self.searchWaiting = false;
      setTimeout(function() {
        self.searchDebouncer = false;
        if (self.searchWaiting) {
          self.searchProperties();
        }
      }, 450);
      // end debounce logic
      self.totalSeen = 0;
      self.refreshPropSummaries();
    },
    getEnumTypes: function(callback){
      let self = this;
      axios
        .get(self.apiHostname + '/getEnumTypes')
        .then(function(response){
          self.enumTypes = response.data;
          callback();
        })
        .catch(function(){
          self.enumTypes = [];
          self.showSnack(
            "Could not connect to API. Check your connection and try again.",
            15000,
            true
          );
        });
    },
    openDetailDialog(propID){
      let self = this;
      self.isPropertyDetailDialogShowing = false;
      axios.get(self.apiHostname +
                '/getPropertyDetail' +
                '?propID=' + propID
      )
      .then(function(response){
          self.propDetailObj = response.data;
          self.isPropertyDetailDialogShowing = true;
      })
      .catch(function(){
        self.showSnack("Unable to contact API. Check your Connection.", 10000, true)
      });
      
    },
    refreshAllState: function(){
      this.getEnumTypes(this.refreshPropSummaries);
    },
    syncIntegrations() {
      this.showSnack(
        "Syncing with Integrations. Just a moment...",
        15000,
        false
      );
      //TODO
    },
    showSnack(message, timeout, button) {
      this.snackbarMsg = message;
      this.snackbarTimeout = timeout;
      this.snackbarButtonVisible = button;
      this.snackbarShowing = true;
    },
    clearSnack() {
      this.snackbarShowing = false;
    }
  },
  mounted: function() {
    this.refreshAllState();
  },
  components: {
    PropertySummaryCard,
    PropertyDetailDialog,
  }
};
</script>
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>business</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Properties</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>view_week</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Kanban Board</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Property Ninja</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container grid-list-xl fluid fill-height>
        <v-layout row wrap>
          <PropertySummaryCard v-for="(summaryObj, summaryIndex) in locationSummaries" v-bind:key="summaryIndex" :title="summaryObj.title" :description="summaryObj.description">
          </PropertySummaryCard>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PropertySummaryCard from './PropertySummaryCard.vue';

export default {
  data: function() {
    return {
      drawer: true,
      lastSeenID: -1,
      locationSummaries: [
        {
          title: "test",
          description: "testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd"
        },
        {
          title: "test",
          description: "testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd"
        },
        {
          title: "test",
          description: "testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd"
        },
        {
          title: "test",
          description: "testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd"
        },
        {
          title: "test",
          description: "testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd"
        },
        {
          title: "test",
          description: "testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd"
        },
        {
          title: "test",
          description: "testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd testdafasd"
        },
      ],
    };
  },
  methods: {

  },
  mounted: function(){
    axios.get('/api/getPropertySummaries?lastSeen='+this.lastSeenID+"&ordering=")
  },
  components: {
    PropertySummaryCard
  }
};
</script>
<template>
  <v-flex xs12 s6 md4 lg3 xl3>
    <v-card v-on:click="$emit('open-dialog', summaryObj.prop_ID)" hover>
      <v-card-title primary-title>
        <div>
          <h3 class="headline">{{summaryObj.prop_address}}</h3>
        </div>
      </v-card-title>
      <v-layout
        v-for="(unitObj, unitObjIndex) in summaryObj.units"
        :key="unitObjIndex"
        row
        wrap
        justify-space-around
      >
        <v-flex class="xs6" style="text-align: center">
          <div
            style="line-height:42px"
            class="subheading text-xs-center"
          >{{Number(unitObj.num).toLocaleString() + " " + (unitObj.num == "1" ? 'Unit' : 'Units')}}</div>
        </v-flex>
        <v-flex class="xs6" style="text-align: center">
          <v-chip disabled
            :color="'#' + propertyStages[unitObj.stageID].hex_Color"
            :text-color="invertColor('#'+ propertyStages[unitObj.stageID].hex_Color)"
          >{{propertyStages[unitObj.stageID].stage_Name}}</v-chip>
        </v-flex>
      </v-layout>
      <v-layout v-if="summaryObj.units.length === 0">
        <v-flex xs12 style="text-align: center">
                    <v-icon class="red--text">warning</v-icon><div style="line-height: 42px" class="subheading text-xs-center">No Units</div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list two-line>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>360</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>${{Number(summaryObj.currentRentRoll).toLocaleString()}}</v-list-tile-title>
            <v-list-tile-sub-title>Total Rent Roll</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>monetization_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>${{Number(summaryObj.current_Value).toLocaleString()}}</v-list-tile-title>
            <v-list-tile-sub-title>Current Value</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_balance</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              class="red--text"
            >-${{Number(summaryObj.current_Debt).toLocaleString()}}</v-list-tile-title>
            <v-list-tile-sub-title>Current Debt</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: ["summaryObj", "propertyStages"],
  methods: {
    invertColor: function(hex) {
      function padZero(str, len) {
        len = len || 2;
        var zeros = new Array(len).join("0");
        return (zeros + str).slice(-len);
      }

      // stolen from https://github.com/onury/invert-color MIT Licensed. -MC
      if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
      }
      // convert 3-digit hex to 6-digits.
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        throw new Error("Invalid HEX color.");
      }
      var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
  }
};
</script>
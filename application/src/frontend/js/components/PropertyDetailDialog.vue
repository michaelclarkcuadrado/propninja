<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialogIsOpen"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay="false"
    >
      <v-card v-if="dialogIsOpen">
        <v-toolbar dark color="primary">
          <v-btn icon @click.native="$emit('close-dialog')" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Detail: {{propertyDetailObj.prop_address}}</v-toolbar-title>
        </v-toolbar>
        <v-container grid-list-lg fluid>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card flat>
                <span class="title">Summary</span>
              </v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat>
                <span class="title">Units</span>
              </v-card>
            </v-flex>
            <v-flex
              xs12
              sm3
              md2
              lg2
              xl2
              v-for="(unitObj, unitIndex) in propertyDetailObj.units"
              v-bind:key="unitIndex"
            >
              <v-card>
                <v-card-title primary-title style="padding-bottom: 0px">
                  <div>
                    <h3 class="headline mb-0">
                      {{unitObj.unit_Name}}
                      <span class="grey--text subheading">#U{{unitObj.unit_ID}}</span>
                    </h3>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn v-on:click="unitObj.is_Being_Edited = !unitObj.is_Being_Edited" flat icon color="primary">
                    <v-icon>edit</v-icon>
                  </v-btn>
                </v-card-title>
                <div style="display: table; margin: 0 auto">
                  <v-chip
                    style="margin: 8px"
                    disabled
                    :color="'#' + enumTypes.property_stages[unitObj.curr_Stage_ID].hex_Color"
                    :text-color="invertColor('#'+ enumTypes.property_stages[unitObj.curr_Stage_ID].hex_Color)"
                  >{{enumTypes.property_stages[unitObj.curr_Stage_ID].stage_Name}}</v-chip>
                </div>
                <v-divider></v-divider>

                <v-list two-line>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>360</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>${{Number(unitObj.rent_Roll).toLocaleString()}}</v-list-tile-title>
                      <v-list-tile-sub-title>Rent Roll</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>monetization_on</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>${{Number(unitObj.unit_sqft).toLocaleString()}}</v-list-tile-title>
                      <v-list-tile-sub-title>Unit Sqft</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>location_city</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{enumTypes.unit_types[unitObj.unit_Type_ID].unit_Type_Name}}</v-list-tile-title>
                      <v-list-tile-sub-title>Unit Type</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
              <v-card></v-card>
            </v-flex>
            <v-flex               
            xs12
              sm3
              md2
              lg2
              xl2>
              <v-card>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">
                      Add New Unit
                    </h3>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn v-on:click="isAddUnitActivated = !isAddUnitActivated" icon color="primary">
                    <v-icon>add</v-icon>
                  </v-btn>
                </v-card-title>
                <v-divider></v-divider>

                <v-list three-line subheader v-show="isAddUnitActivated">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>360</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>
                          <v-text-field
                          height="24"
                          name="rentRoll"
                          label="Rent Roll"
                      ></v-text-field>
                      </v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>monetization_on</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title></v-list-tile-title>
                      <v-list-tile-sub-title>Unit Sqft</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon>location_city</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title></v-list-tile-title>
                      <v-list-tile-sub-title>Unit Type</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
              <v-card></v-card>
            </v-flex>
            <v-flex xs12>
              <v-card flat>
                <span class="title">Financials</span>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
        isAddUnitActivated: false,
    };
  },
  props: ["propertyDetailObj", "dialogIsOpen", "enumTypes"],
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
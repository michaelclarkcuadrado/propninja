<template>
  <v-flex xs12 s6 md6 lg3 xl3>
    <v-card hover>
        <v-card-title primary-title>
          <div>
            <h3 class="headline">{{summaryObj.title}}</h3>
            <div>{{Number(summaryObj.numUnits).toLocaleString() + " " + (summaryObj.numUnits === 1 ? 'Unit' : 'Units')}} </div>
          </div>
        </v-card-title>
      <v-card-text>{{summaryObj.description}}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: function() {
    return {
    };
  },
  props: [
      'summaryObj'
  ]
};
</script>
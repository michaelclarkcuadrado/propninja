<template>
  <v-flex xs12 s6 md6 lg4 xl3>
    <v-card hover>
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>{{description}}</v-card-text>
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
      'title',
      'description'
  ]
};
</script>
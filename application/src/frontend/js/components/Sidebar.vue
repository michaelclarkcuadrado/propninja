<template>
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
</template>

<script>
    export default{
        data: function(){
            return {};
        },
        props: ['drawer']
    }
</script>
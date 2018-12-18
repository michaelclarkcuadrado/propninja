import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
const axios = require('axios');
Vue.use(Vuetify);
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

import PropertySummaryView from './components/PropertySummaryView.vue';


const vue = new Vue({
    el: '#app',
    components: {PropertySummaryView}
});
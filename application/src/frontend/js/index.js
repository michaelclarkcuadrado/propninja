import Vue from 'vue'; //TODO use minified version
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
Vue.use(Vuetify, {
    theme: {
        primary: "#455A64",
        secondary: "#607D8B",
        accent: "#0288D1",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    },
});
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import PropertySummaryView from './components/PropertySummaryView.vue';


const vue = new Vue({
    el: '#app',
    components: { PropertySummaryView }
});
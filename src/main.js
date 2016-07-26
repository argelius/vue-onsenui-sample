import Vue from 'vue'
import App from './App.vue'

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Page from './Page.vue';

Vue.component('page', Page);

new Vue({
  el: '#app',
  render: h => h(App)
})

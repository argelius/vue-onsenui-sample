<template>
  <div>
    <ons-switch v-on:change="handleChange" v-bind:checked="checkbox"></ons-switch>

    <input type="checkbox" v-model="checkbox">

    {{checkbox}}
  </div>
</template>

<script>
import {Switch} from './vue-onsenui';

export default {
  data () {
    return {
      checkbox: true
    }
  },

  ready() {
    console.log('ready');
  },

  components: {
    'ons-switch': Switch
  },

  methods: {
    handleChange: function(e) {
      this.checkbox = e.target.checked;
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>

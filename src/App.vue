<template>
  <tabbar v-bind:tabs="tabs"></tabbar>
</template>

<script>
import Tabbar from './Tabbar.vue';

export default {
  data() {
    return {
      tabs: [
        {
          label: 'Home',
          icon: 'md-face',
          component: 'page'
        },
        {
          label: 'Settings',
          component: 'page'
        }
      ]
    };
  },
  components: {Tabbar}
}
</script>

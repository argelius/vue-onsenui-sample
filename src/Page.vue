<template>
  <ons-page>
    <ons-toolbar>
      <div class="center">Title</div>
    </ons-toolbar>

    <ons-button v-on:click="pushPage">Push</ons-button>
    <ons-button v-on:click="popPage">Pop</ons-button>
  </ons-page>
</template>

<script>
  export default {
    methods: {
      pushPage() {
        this.$emit('push', {component: 'page'});
      },

      popPage() {
        this.$emit('pop');
      }
    }
  }
</script>

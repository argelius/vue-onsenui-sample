<template>
  <ons-navigator ref="nav">
    <div
      v-for="page in pages"
      v-bind:is="page"
      v-on:push="push"
      v-on:pop="pop">
    </div>
  </ons-navigator>
</template>

<script>
  export default {
    data() {
      return {
        pages: []
      };
    },

    props: ['initialComponent'],

    beforeMount() {
      if (this.initialComponent) {
        this.pages = [this.initialComponent];
      }
    },

    methods: {
      push({component, ...options}) {
        this.pages = [...this.pages, component];
        this.$refs.nav._pushPage(options);
      },

      pop(options = {}) {
        const removePage = () => {
          this.pages = this.pages.slice(0, this.pages.length - 1);
          return Promise.resolve();
        };

        this.$refs.nav._popPage(options, removePage);
      }
    }
  };
</script>

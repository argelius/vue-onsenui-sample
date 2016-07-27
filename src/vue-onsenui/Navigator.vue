<template>
  <ons-navigator ref="el">
    <div
      v-for="page in pages"
      v-bind:is="page"
      v-on:push="push"
      v-on:pop="pop">
    </div>
  </ons-navigator>
</template>

<script>
  const noop = () => {};

  export default {
    data() {
      return {
        pages: [],
        isRunning: false
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
        if (this.isRunning) {
          return;
        }

        this.pages = [...this.pages, component];
        this.isRunning = true;

        this.$refs.el
          ._pushPage(options)
          .catch(noop)
          .then(() => this.isRunning = false);
      },

      pop(options = {}) {
        if (this.isRunning) {
          return;
        }

        const removePage = () => {
          this.pages = this.pages.slice(0, this.pages.length - 1);
          return Promise.resolve();
        };

        this.isRunning = true;
        this.$refs.el
          ._popPage(options, removePage)
          .catch(noop)
          .then(() => this.isRunning = false);
      }
    }
  };
</script>

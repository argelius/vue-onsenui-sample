<template>
  <ons-navigator initialComponent="page"></ons-navigator>
</template>

<script>
import {Navigator} from './vue-onsenui';

import Page from './Page.vue';

export default {
  components: {
    'ons-navigator': Navigator
  },
}
</script>

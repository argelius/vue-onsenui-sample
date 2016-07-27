<template>
	<ons-tabbar ref="el" _compiled>
		<div no-status-bar-fill class="ons-tab-bar__content tab-bar__content">
			<div
			  v-for="tab in tabs"
				v-bind:is="tab.component">
			</div>
		</div>
		<div class="tab-bar ons-tab-bar__footer ons-tabbar-inner">
			<ons-tab
				v-for="tab in tabs"
				v-bind:label="tab.label"
				v-bind:icon="tab.icon"
			></ons-tab>
		</div>
	</ons-tabbar>
</template>

<script>
  export default {
		props: {
			tabs: {
				model: Array,
				default: []
			},

			index: {
				model: Array,
				default: 0
			}
		},

		mounted() {
			setImmediate(() => {
				this.$refs.el.setActiveTab(this.index);
			});
		}
  };
</script>

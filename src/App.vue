<template>
  <div id="app">
    <MainMenu v-if="!isNotFound" />

    <router-view></router-view>

    <Explore_portfolio_link v-if="!isNotFound" />
    <SectionFooter v-if="!isNotFound" />
  </div>
</template>

<script>
import Explore_portfolio_link from './components/explore_button.vue';
import SectionFooter from './components/footer.vue';
import MainMenu from './components/header.vue';

export default {
  name: 'App',
  components: {
    SectionFooter,
    MainMenu,
    Explore_portfolio_link,
  },

  computed: {
    isNotFound() {
      return this.$route.name === 'NotFound'
    }
  }
};
</script>

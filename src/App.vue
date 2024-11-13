<template>
  <div id="app">
    <!-- Update to use the new multi-word name -->
    <MainMenu />

    <router-view></router-view>

    <!-- Include the updated SectionFooter component -->
    <Explore_portfolio_link />
    <SectionFooter />
  </div>
</template>

<script>
// Import the renamed component
import Explore_portfolio_link from './components/explore_button.vue';
import SectionFooter from './components/footer.vue';
import MainMenu from './components/header.vue';

export default {
  name: 'App',
  components: {
    SectionFooter,
    MainMenu,
    Explore_portfolio_link,
  }
};
</script>

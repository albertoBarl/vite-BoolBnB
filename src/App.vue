<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template lang="">
  
    <AppHeader />

    <div class="container w-100 my_cardsapp">

        <router-view></router-view>

    </div>

    <AppFooter />
        
</template>

<style lang="scss" scoped>
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables.scss" as *;

.my_cardsapp {
  margin: 120px auto 50px auto;
}

@media screen and (min-width: 768px) {
  .my_cardsapp {
    margin: 120px auto 200px auto;
  }
}
</style>
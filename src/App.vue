<script>

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
    components: {
        AppHeader,
        AppMain
    }
}
</script>

<template lang="">
  
    <AppHeader />

    <AppFooter />
        
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables.scss' as *;

    
</style>
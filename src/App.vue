<script>

import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<template lang="">
  
    <AppHeader />

    <h1>CIAO</h1>

    <AppFooter />
        
</template>

<style lang="scss" scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variables.scss' as *;

    
</style>
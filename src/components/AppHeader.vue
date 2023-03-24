<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {

}
</script>

<template lang="">

    <header class="w-100 fixed-top bg-light shadow-sm">

        <button class="btn my_searchbtn shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
            <div class="row align-items-center">
                <div class="col-2"> <fa icon="magnifying-glass"/> </div>
                <div class="col-8"> 
                    <strong>Qualunque</strong><br>
                    Qualunque settimana &#x2022; Aggiungi ospiti
                </div>
                <div class="col-2">
                    <button class="btn my_filterbutton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                        <fa icon="sliders"/>
                    </button>
                </div>
            </div>
        </button>

        <div class="offcanvas my_offcanvas offcanvas-top h-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                ...
            </div>
        </div>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
                ...
            </div>
        </div>

    </header>

    <nav class="w-100 fixed-bottom bg-light justify-content-center d-flex">
        <div class="my_navico m-2 text-center">
            <fa icon="magnifying-glass"/><br>
            Esplora
        </div>

        <div class="my_navico m-2 text-center">
            <fa icon="heart"/><br>
            Esplora
        </div>

        <div class="my_navico m-2 text-center">
            <fa icon="user"/><br>
            Esplora
        </div>
    </nav>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

.my_searchbtn{
    border: 1px solid lightgrey;
    border-radius: 50px;
    margin: 20px 20px;
    width: calc(100% - 40px);

    .col-8{
        font-size: 8pt;
        text-align: left;
    }

    .my_filterbutton{
        padding: 4px 8px 5px 8px;
        border: 1px solid lightgrey;
        border-radius: 100%;
    }
}


</style>
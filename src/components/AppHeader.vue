<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {

}
</script>

<template lang="">

    <div class="offcanvas my_offcanvassearch offcanvas-top h-100" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            ...
        </div>
    </div>

    <div class="offcanvas my_offcanvasfilters offcanvas-bottom rounded-top" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
            ...
        </div>
    </div>

    <header class="w-100 fixed-top bg-light shadow-sm">

        <button class="btn my_searchbtn shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" data-bs-backdrop="false">
            <div class="row align-items-center">
                <div class="col-2"> <fa icon="magnifying-glass"/> </div>
                <div class="col-8"> 
                    <strong class="my_searchtitle">Ovunque</strong><br>
                    <p class="mb-1">Qualunque settimana &#x2022; Aggiungi ospiti</p>
                </div>
                <div class="col-2">
                    <button class="btn my_filterbutton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" data-bs-backdrop="false">
                        <fa icon="sliders"/>
                    </button>
                </div>
            </div>
        </button>

    </header>

    <nav class="w-100 fixed-bottom bg-light border-top">

        <div class="container w-100 my_mapbtn text-center">
            <a href="#">
                <button class="btn btn-dark rounded-pill"> Mappa <fa :icon="['fas', 'map']" /></button>
            </a>
        </div>

        <div class="container justify-content-center d-flex pt-3">

            <button class="btn my_navico mb-0 text-center">
                <fa icon="magnifying-glass" class="my_active" /><br>
                <p>Esplora</p>
            </button>

            <button class="btn my_navico mb-0 text-center">
                <fa :icon="['fas', 'heart']" /><br>
                <p>Preferiti</p>
            </button>

            <button class="btn my_navico mb-0 text-center">
                <fa :icon="['fas', 'user']" /><br>
                <p>Accedi</p>
            </button>

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
        text-align: left;

        .my_searchtitle{
            font-size: 10pt;
        }

        p{
            font-size: 8pt;
            color: grey;
        }
    }

    .my_filterbutton{
        padding: 4px 8px 5px 8px;
        border: 1px solid lightgrey;
        border-radius: 100%;
    }
}

.my_mapbtn{
    margin: -50px auto 10px auto;
}

.my_navico{

    svg{
        font-size: 19pt;
    };

    .my_active{
        color: $bnb-red;
    };

    p{
        font-size: 10pt;
    };
    
};

.my_offcanvasfilters{
    height: 98vh !important;
}

</style>
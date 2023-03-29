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
        <div class="offcanvas-header pb-0">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <h5 class="offcanvas-title me-2" id="offcanvasBottomLabel">Filtri</h5>
        </div>
        <hr>
        <div class="offcanvas-body small px-3">
            <!-- <section>
                <h3>Fascia di prezzo</h3>
                <p class="text-secondary">Il prezzo medio giornaliero è 210 €.</p>
            </section>

            <hr>

            <section>
                <h3 class="mb-3">Tipo di alloggio</h3>

                <div class="row align-items-center mb-3">
                    <div class="col-10">
                        <label class="form-check-label" for="checkbox1">
                            <h6>Tutta la casa</h6> <span class="text-secondary">Un alloggio tutto per te</span>
                        </label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="checkbox1">
                    </div>
                </div>

                <div class="row align-items-center mb-3">
                    <div class="col-10">
                        <label class="form-check-label" for="checkbox2">
                            <h6>Stanza privata</h6> <span class="text-secondary">La tua stanza in un alloggio o hotel, più alcuni spazi comuni condivisi</span>
                        </label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="checkbox2">
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-10">
                        <label class="form-check-label" for="checkbox3">
                            <h6>Stanza condivisa</h6> <span class="text-secondary">Uno spazio per dormire e aree comuni che possono essere condivise con altre persone</span>
                        </label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="checkbox3">
                    </div>
                </div>

            </section>

            <hr> -->

            <section>
                <h3 class="mb-3">Stanze e letti</h3>

                <div class="row justify-content-between mb-3">
                    <div class="col-12"> <h5>Camere da letto</h5> </div>
                </div>

                <div class="row justify-content-between mb-3">
                    <div class="col-12 d-flex my_horizontalscroll">
                        <button type="button" class="btn btn-outline-dark rounded-pill active" data-bs-toggle="button" aria-pressed="true">Qualsiasi</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">1</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">2</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">3</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">4</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">5</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">6</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">7</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">8+</button>
                    </div>
                </div>

                <br>

                <div class="row justify-content-between mb-3">
                    <div class="col-12"> <h5>Letti</h5> </div>
                </div>

                <div class="row justify-content-between mb-3">
                    <div class="col-12 d-flex my_horizontalscroll">
                        <button type="button" class="btn btn-outline-dark rounded-pill active" data-bs-toggle="button" aria-pressed="true">Qualsiasi</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">1</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">2</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">3</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">4</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">5</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">6</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">7</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">8+</button>
                    </div>
                </div>

                <br>

                <div class="row justify-content-between mb-3">
                    <div class="col-12"> <h5>Bagni</h5> </div>
                </div>

                <div class="row justify-content-between mb-3">
                    <div class="col-12 d-flex my_horizontalscroll">
                        <button type="button" class="btn btn-outline-dark rounded-pill active" data-bs-toggle="button" aria-pressed="true">Qualsiasi</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">1</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">2</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">3</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">4</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">5</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">6</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">7</button>
                        <button type="button" class="btn btn-outline-dark rounded-pill" data-bs-toggle="button">8+</button>
                    </div>
                </div>
            </section>

            <hr>

            <section>
                <h3>Servizi</h3>
                
                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio1">Wi-Fi</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio1">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio2">Piscina</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio2">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio3">Posto macchina</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio3">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio4">Portineria</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio4">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio5">Sauna</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio5">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio6">Vista mare</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio6">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio7">Vista lago</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio7">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio8">Aria condizionata</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio8">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio9">Riscaldamento</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio9">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio10">TV</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio10">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio11">Lavatrice</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio11">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio12">Palestra</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio12">
                    </div>
                </div>

                <div class="row align-items-center mb-3 fs-6">
                    <div class="col-10">
                        <label class="form-check-label" for="servizio13">Barbecue</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="servizio13">
                    </div>
                </div>

            </section>
            
        </div>
    </div>

    <header class="w-100 fixed-top bg-light shadow-sm my_headersm">

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

    <nav class="w-100 fixed-bottom bg-light border-top my_navsm">

        <div class="container w-100 my_mapbtn text-center">
            <a href="#">
                <button class="btn btn-dark rounded-pill my_mapsm"> Mappa <fa :icon="['fas', 'map']" /></button>
            </a>
        </div>

        <div class="container justify-content-center d-flex pt-3">

            <button class="btn my_navico mb-0 text-center">
                <fa icon="magnifying-glass" class="my_active" /><br>
                <p>Esplora</p>
            </button>

            <!-- <button class="btn my_navico mb-0 text-center">
                <fa :icon="['fas', 'heart']" /><br>
                <p>Preferiti</p>
            </button> -->

            <button class="btn my_navico mb-0 text-center">
                <fa :icon="['fas', 'user']" /><br>
                <p>Accedi</p>
            </button>

        </div>  

    </nav>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

.my_headermd{
    display: none;
}

.my_navmd{
    display: none;
}

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
        color: grey;
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

    .my_checkbox{
        width: 30px;
        height: 30px;
    }

    .my_horizontalscroll{
        overflow: auto;
        white-space: nowrap;

        button{
            border: 1px solid grey;
            padding: 10px 20px;
            margin-right: 10px;
        }
    }

}

@media screen and (min-width: 768px) {

    .my_mapsm{
        display: none;
    }

    .my_mapmd{
        display: inline-block;
    }

    .my_headersm{
        display: none;
    }

    .my_navsm{
        display: none;
    }

}

</style>
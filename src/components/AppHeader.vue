<script>
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import AppSearch from "./AppSearch.vue";

export default {
    components: {
        AppSearch,
    },
};

</script>

<template lang="">

    <!-- INIZIO HEADER FINE MODALI OFFCANVAS-->

    <header class="w-100 fixed-top bg-light shadow-sm my_headersm p-3">

        <!-- <button class="btn my_searchbtn shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" data-bs-backdrop="false">
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
        </button> -->

        <div class="row">

            <div class="col-1">
                <button class="btn btn-outline-dark my_filterbutton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" data-bs-backdrop="false">
                    <fa icon="sliders"/>
                </button>
            </div>


            <div class="col-11">
                <form class="d-flex align-items-center" role="search">
                    <AppSearch />

                    <button class="btn my_searchbtnsm rounded-circle ms-2" type="submit"><fa icon="magnifying-glass" /></button>
                </form>
            </div>

        </div>

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
                <fa :icon="['far', 'circle-user']" /><br>
                <p>Accedi</p>
            </button>

        </div>  

    </nav>


    <header class="w-100 fixed-top bg-light shadow-sm my_headermd px-5 py-3">

        <div class="row align-items-center">

            <div class="col-1">
                <a href="#"><img src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png" alt="airbnb-logo-sm" class="img-fluid"></a>
            </div>

            <div class="col-5">

                <!-- <button class="btn my_searchbtn shadow-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-backdrop="false">
                    <div class="row align-items-center">
                        <div class="col-9 text-start ps-3"> Ovunque... </div>
                        <div class="col-3 text-end mt-1"> <fa icon="magnifying-glass" class="my_searchbtnmd rounded-circle" /> </div>
                    </div>
                </button> -->

                <div class="row align-items-center">


                    <!-- <form class="d-flex" role="search">
                        <input class="form-control me-2 shadow-sm rounded-pill" type="search" placeholder="Ovunque..." aria-label="Search">

                        <button class="btn my_searchbtnmd rounded-circle" type="submit"><fa icon="magnifying-glass" class="mx-1" /></button>
                    </form> -->

                    <div class="col-10">
                        <form class="d-flex align-items-center" role="search">
                            <AppSearch />

                            <button class="btn my_searchbtnsm rounded-circle ms-2" type="submit"><fa icon="magnifying-glass" /></button>
                        </form>
                    </div>

                </div>

            </div>

            <div class="col-2">
                <button class="btn my_filterbutton rounded btn-outline-dark" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-backdrop="false">
                    <fa icon="sliders" class="me-2" /> Filtri
                </button>
            </div>

            <div class="col-3">
                <a href="#"><button class="btn" type="button"> Affitta con Airbnb </button></a>
            </div>

            <div class="col-1">
                    <div class="btn-group">
                        <button type="button" class="btn fs-5 my_userbutton shadow-sm rounded-circle" data-bs-toggle="dropdown" aria-expanded="false">
                            <fa :icon="['far', 'circle-user']" />
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Registrati</a></li>
                            <li><a class="dropdown-item" href="#">Accedi</a></li>
                            <li><a class="dropdown-item" href="#">Affitta con Airbnb</a></li>
                        </ul>
                    </div>
            </div>                        

        </div>

    </header>


    <header class="w-100 fixed-top bg-light shadow-sm my_headerlg px-5 py-3">

        <div class="row align-items-center px-5">

            <div class="col-2">
                <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="airbnb-logo-lg" class="img-fluid"></a>
            </div>

            <div class="col-2"></div>

            <div class="col-4 justify-content-center">

                <!--<button class="btn my_searchbtn shadow-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-backdrop="false">
                     <div class="row align-items-center">
                        <div class="col-9 text-start ps-3"> Ovunque... </div>
                        <div class="col-3 text-end mt-1"> <fa icon="magnifying-glass" class="my_searchbtnmd rounded-circle" /> </div>
                    </div>
                </button>-->

                <div class="row align-items-center">

                    <!-- <form class="d-flex" role="search">
                        <input class="form-control me-2 shadow-sm rounded-pill" type="search" placeholder="Ovunque..." aria-label="Search">
                        <button class="btn my_searchbtnmd rounded-circle" type="submit"><fa icon="magnifying-glass" /></button>
                    </form> -->

                    <div class="col-10">
                        <form class="d-flex align-items-center" role="search">
                            <AppSearch />

                            <button class="btn my_searchbtnsm rounded-circle ms-2" type="submit"><fa icon="magnifying-glass" /></button>
                        </form>
                    </div>

                </div>

            </div>

            <div class="col-2">
                <button class="btn btn-outline-dark my_filterbutton rounded" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-backdrop="false">
                    <fa icon="sliders" class="me-2" /> Filtri
                </button>
            </div>

            <div class="col-2 d-flex justify-content-end align-items-center">
                <a href="#"><button class="btn" type="button"> Affitta </button></a>

                    <div class="btn-group ms-3">
                        <button type="button" class="btn fs-5 my_userbutton shadow-sm rounded-circle" data-bs-toggle="dropdown" aria-expanded="false">
                            <fa :icon="['far', 'circle-user']" />
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Registrati</a></li>
                            <li><a class="dropdown-item" href="#">Accedi</a></li>
                            <li><a class="dropdown-item" href="#">Affitta con Airbnb</a></li>
                        </ul>
                    </div>
            </div>                        

        </div>

    </header>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.my_headermd {
    display: none;
}

.my_headerlg {
    display: none;
}

.my_navmd {
    display: none;
}

.my_searchbtn {
    border: 1px solid $bnb-grey;
    border-radius: 50px;
    margin: 20px 20px;
    width: calc(100% - 40px);

    .col-8 {
        text-align: left;

        .my_searchtitle {
            font-size: 10pt;
        }

        p {
            font-size: 8pt;
            color: $bnb-grey;
        }
    }

    .my_filterbutton {
        padding: 4px 8px 5px 8px;
        border: 1px solid $bnb-grey;
        border-radius: 100%;
    }
}

.my_searchbtnsm {
    color: $bnb-white;
    background-color: $bnb-red;
    border: 1px solid $bnb-red;
    padding: 7px 11px;
}

.my_searchbtnsm:hover {
    color: $bnb-red;
    background-color: $bnb-white;
    border: 1px solid $bnb-red;
}

.my_mapbtn {
    margin: -50px auto 10px auto;
}

.my_navico {
    svg {
        font-size: 19pt;
        color: $bnb-grey;
    }

    .my_active {
        color: $bnb-red;
    }

    p {
        font-size: 10pt;
    }
}

.my_offcanvasfilters {
    height: 98vh !important;

    .my_checkbox {
        width: 30px;
        height: 30px;
    }

    .my_horizontalscroll {
        overflow: auto;
        white-space: nowrap;

        button {
            border: 1px solid $bnb-grey;
            padding: 10px 20px;
            margin-right: 10px;
        }
    }
}

@media screen and (min-width: 768px) {
    .my_mapsm {
        display: none;
    }

    .my_mapmd {
        display: inline-block;
    }

    .my_headersm {
        display: none;
    }

    .my_headermd {
        display: flex;
        width: 100vw;
        padding: 0px 130px;

        .my_filterbutton {
            padding: 4px 8px 5px 8px;
            border: 1px solid $bnb-grey;
        }

        .my_userbutton {
            padding: 5px 10px 5px 10px;
            border: 1px solid $bnb-grey;
        }

        .my_searchbtnmd {
            color: $bnb-white;
            background-color: $bnb-red;
            padding: 7px;
        }
    }

    .my_navsm {
        display: none;
    }

    .my_modalfilters {
        .my_checkbox {
            width: 30px;
            height: 30px;
        }

        .my_horizontalscroll {
            overflow: auto;
            white-space: nowrap;

            button {
                border: 1px solid $bnb-grey;
                padding: 10px 20px;
                margin-right: 10px;
            }
        }
    }
}

@media screen and (min-width: 992px) {
    .my_headerlg {
        display: flex;
        padding: 0px 150px;
    }

    .my_headermd {
        display: none;
    }

    .my_filterbutton {
        padding: 4px 8px 5px 8px;
        border: 1px solid $bnb-grey;
        border-radius: 100%;
    }

    .my_searchbtnmd {
        color: $bnb-white;
        background-color: $bnb-red;
        border: 1px solid $bnb-red;
        padding: 7px 11px;
    }

    .my_searchbtnmd:hover {
        color: $bnb-red;
        background-color: $bnb-white;
        border: 1px solid $bnb-red;
    }
}
</style>
<script>
import axios from "axios";
import { store } from "../store";

export default {
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            apiKey: "98ObIc3GfaoIHmTeR31cHCEP87hLeSmB",
            store,


            options: [
                { label: 'Qualsiasi', value: '' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
                { label: '8+', value: '8' }
            ],
            meters: [
                { label: 'Qualsiasi', value: '' },
                { label: '50', value: '50' },
                { label: '100', value: '100' },
                { label: '200', value: '200' },
            ]
        }
    },
    props: {
        services: Array
    },
    methods: {

        myFunction() {
            var camere = document.querySelector('input[name="camere"]:checked').value;
            console.log('Camere:', camere);

            var bagni = document.querySelector('input[name="bagni"]:checked').value;
            console.log('Bagni:', bagni);

            var metri = document.querySelector('input[name="metri"]:checked').value;
            console.log('metri:', metri);
        },
    }
}
</script>
<template lang="">
    <div class="offcanvas my_offcanvasfilters offcanvas-bottom rounded-top" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header pb-0">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <h5 class="offcanvas-title me-2" id="offcanvasBottomLabel">Filtri</h5>
        </div>
        <hr>
        <div class="offcanvas-body small px-3">
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
                
                <div class="row align-items-center mb-3 fs-6" v-for="item in services" :key="item.id">
                    <div class="col-10">
                        <label class="form-check-label">{{ item.name }}</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="{{ item.id }}">
                    </div>
                </div>
            </section>
            
        </div>
    </div>

    <!--MODALI-->

    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModal1Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 ms-5" id="exampleModal1Label">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>

    <div class="modal fade my_modalfilters" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModal2Label">Filtri</h1>
                <button type="button" class="btn-close justify-self-start" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <section>
                    <h3 class="mb-3">Stanze e letti</h3>

                    <div class="row justify-content-between mb-3">
                        <div class="col-12"> <h5>Camere da letto</h5> </div>
                    </div>

                    <div class="row justify-content-between mb-3">
                        <div class="col-12 d-flex my_horizontalscroll">
                            <label v-for="(option, index) in options" :key="index" class="btn btn-outline-dark rounded-pill" :class="{ active: store.selectedCamere === option.value }">
                            <input type="radio" v-model="store.selectedCamere" :value="option.value" name="camere">
                            {{ option.label }}
                            </label>
                            <div>
                                {{store.selectedCamere}}
                            </div>
                        </div>
                    </div>

                    <br>

                    <div class="row justify-content-between mb-3">
                        <div class="col-12"> <h5>metri</h5> </div>
                    </div>

                    <div class="row justify-content-between mb-3">
                        <div class="col-12 d-flex my_horizontalscroll">
                            <label v-for="(option, index) in meters" :key="index" class="btn btn-outline-dark rounded-pill"
                                :class="{ active: store.selectedMetri === option.value }">
                            <input type="radio" v-model="store.selectedMetri" :value="option.value" name="metri">
                            {{ option.label }}
                            </label>
                            <div>
                                {{store.selectedMetri}}
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-between mb-3">
                        <div class="col-12"> <h5>Bagni</h5> </div>
                    </div>

                    <div class="row justify-content-between mb-3">
                        <div class="col-12 d-flex my_horizontalscroll">
                            <label v-for="(option, index) in options" :key="index" class="btn btn-outline-dark rounded-pill"
                                :class="{ active: store.selectedBagni === option.value }">
                            <input type="radio" v-model="store.selectedBagni" :value="option.value" name="bagni">
                            {{ option.label }}
                            </label>
                            <div>
                                {{store.selectedBagni}}
                            </div>
                        </div>
                    </div>
                </section>

                <hr>

                <section>
                <h3>Servizi</h3>
                
                <div class="row align-items-center mb-3 fs-6" v-for="item in services" :key="item.id">
                    <div class="col-10">
                        <label class="form-check-label">{{ item.name }}</label>
                    </div>
                    <div class="col-2">
                        <input class="form-check-input my_checkbox float-end" type="checkbox" value="" id="{{ item.id }}">
                    </div>
                </div>
            </section>
            <div class="text-center">
                <button class="btn btn-primary" @click="myFunction()">Submit</button>
            </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.my_offcanvasfilters {
    height: 98vh !important;
}
</style>
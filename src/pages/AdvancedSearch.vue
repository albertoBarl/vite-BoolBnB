<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "../components/AppCard.vue";
// import AppFilter from "../components/AppFilter.vue";

export default {
  data() {
    return {
      store,
      rooms: "",
      beds: "",
      radius: "",
      services: [],
      apServices: [],
      options: ["Qualsiasi", 1, 2, 3, 4, 5, 6, 7, "8+"],
    };
  },
  components: {
    AppCard,
    // AppFilter,
  },
  methods: {
    getServices() {
      axios.get(`${this.store.baseUrl}/api/services`).then((response) => {
        this.services = response.data.results;
      });
    },
    // getSearch() {
    //   axios
    //     .get(`${this.store.baseUrl}/api/apartments/search`, {
    //       rooms: this.rooms,
    //       beds: this.beds,
    //       services: this.apServices,
    //       street: store.street,
    //       radius: this.radius,
    //     })
    //     .then((response) => {
    //       console.log(response.data.searchByResults);
    //       store.apList = response.data.searchByResults;
    //     });
    // },
    search() {
      axios
        .get(`${this.store.baseUrl}/api/apartments/search`, {
          params: {
            street: store.street,
            rooms: this.rooms,
            beds: this.beds,
            services: this.apServices,
            radius: this.radius,
          },
        })
        .then((response) => {
          store.apList = response.data.searchByResults;
        });
    },
  },
  mounted() {
    this.getServices();
  },
};
</script>

<template lang="">
  <!-- <div v-if="loading">
        a
    </div> -->
  <!-- modal button for filters -->
  <div class="col-2 mb-3">
    <button
      class="btn btn-outline-dark my_filterbutton rounded"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
      data-bs-backdrop="false"
    >
      <fa icon="sliders" class="me-2" /> Filtri
    </button>
  </div>

  <!-- filters modal -->
  <div
    class="modal fade my_modalfilters"
    id="exampleModal2"
    tabindex="-1"
    aria-labelledby="exampleModal2Label"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModal2Label">Filtri</h1>
          <button
            type="button"
            class="btn-close justify-self-start"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <section>
            <!-- rooms -->
            <h3 class="mb-3 text-capitalize">stanze</h3>
            <div class="row justify-content-between mb-3">
              <div class="col-12 text-capitalize"><h5>camere da letto</h5></div>
            </div>
            <div class="row justify-content-between mb-3">
              <div class="col-12 d-flex my_horizontalscroll">
                <label
                  v-for="(option, index) in options"
                  class="btn btn-outline-dark rounded-pill"
                >
                  <input
                    type="radio"
                    v-model="rooms"
                    :id="index"
                    :value="index"
                    name="rooms"
                  />

                  {{ option }}
                </label>
              </div>
            </div>

            <br />

            <div class="row justify-content-between mb-3">
              <div class="col-12 text-capitalize"><h5>posti letto</h5></div>
            </div>
            <div class="row justify-content-between mb-3">
              <div class="col-12 d-flex my_horizontalscroll">
                <label
                  v-for="(option, index) in options"
                  class="btn btn-outline-dark rounded-pill"
                >
                  <input
                    type="radio"
                    v-model="beds"
                    :value="index"
                    :id="index"
                    name="beds"
                  />
                  {{ option }}
                </label>
              </div>
            </div>

            <div class="row justify-content-between mb-3">
              <div class="col-12 text-capitalize"><h5>distanza</h5></div>
            </div>

            <div class="row justify-content-between mb-3">
              <div class="col-12 d-flex my_horizontalscroll">
                <label
                  class="btn btn-outline-dark rounded-pill text-capitalize"
                >
                  <input
                    type="range"
                    class="radius"
                    min="0"
                    max="20"
                    step="10"
                    name="radius"
                    v-model="radius"
                  />
                  max. 20km
                </label>
              </div>
            </div>
          </section>

          <hr />

          <section>
            <h3>Servizi</h3>

            <div
              class="row align-items-center mb-3 fs-6"
              v-for="service in services"
            >
              <div class="col-10">
                <label class="form-check-label">{{ service.name }}</label>
              </div>
              <div class="col-2">
                <input
                  class="form-check-input my_checkbox float-end"
                  type="checkbox"
                  v-model="apServices"
                  :value="service.id"
                />
              </div>
            </div>
          </section>
          <div class="text-center">
            <button
              class="btn btn-primary btn-modal"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="search()"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-for="(apartment, index) in store.apList">
    <AppCard :apartment="apartment" :key="apartment.id" />
  </div>
</template>

<style lang="scss" scoped>
.my_searchrow {
  margin-top: -20px;
}

.my_btnmd {
  display: none;
}

@media screen and (min-width: 768px) {
  .my_btnsm {
    display: none;
  }

  .my_btnmd {
    display: inline;
  }
}
</style>

<script>
import axios from "axios";
import { store } from "../store";

import AppCard from "../components/AppCard.vue";
import AppFilter from "../components/AppFilter.vue";

export default {
  data() {
    return {
      store,
      apartments: null,
      //   loading: true,
      services: null,
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
    AppFilter,
  },
  methods: {
    filtedApartment(bagniStore, Appartamento) {
      if (bagniStore == null) {
        console.log(Appartamento);
      }
    },
    getApartments() {
      axios.get(`${this.store.baseUrl}/api/apartments`).then((response) => {
        this.apartments = response.data.results.data;
        console.log(this.apartments);
      });
    },

    saveData() {
      localStorage.setItem("storeData", JSON.stringify(this.store));
    },
    loadData() {
      const storeData = localStorage.getItem("storeData");
      if (storeData) {
        this.store = JSON.parse(storeData);
      }
    },
    clearData() {
      localStorage.removeItem("storeData");
    },
    calculateDistance(lat1, lng1, lat2, lng2) {
      const radius = 6371; // Earth's radius in km
      const dLat = this.toRadians(lat2 - lat1);
      const dLng = this.toRadians(lng2 - lng1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRadians(lat1)) *
          Math.cos(this.toRadians(lat2)) *
          Math.sin(dLng / 2) *
          Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = radius * c;

      return distance.toFixed(2);
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
    toRadians(degree) {
      return degree * (Math.PI / 180);
    },
  },
  beforeRouteLeave(to, from, next) {
    this.clearData();
    next();
  },
  beforeDestroy() {
    this.clearData();
    window.removeEventListener("popstate", this.clearData);
  },
  mounted() {
    this.loadData();
    window.addEventListener("popstate", this.clearData);
    this.getApartments();

    axios.get(`${this.store.baseUrl}/api/services`).then((response) => {
      this.services = response.data.results;
      console.log(response.data.results);
    });
  },
};
</script>

<template lang="">
  <!-- <div v-if="loading">
        a
    </div> -->

  <AppFilter :services="services" />

  <div class="row my_searchrow">
    <div class="col-12 pb-sm-4 pb-lg-2 border-bottom text-end my_btnsm">
      <button
        class="btn btn-outline-dark my_filterbutton"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
        data-bs-backdrop="false"
      >
        <fa icon="sliders" class="" /> Filtri
      </button>
    </div>

    <div class="col-12 pb-sm-4 pb-lg-2 border-bottom text-end my_btnmd">
      <button
        class="btn btn-outline-dark my_filterbutton"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
        data-bs-backdrop="false"
      >
        <fa icon="sliders" class="" /> Filtri
      </button>
    </div>
  </div>

  <div v-for="(apartment, index) in store.apList">
    <AppCard :apartment="apartment" :key="apartment.id" />
  </div>
  <div v-for="apartment in apartments" :key="apartments.id">
    <!-- <p>Latitude1: {{store.poi.position.lat}}, Longitude1: {{store.poi.position.lon}}</p>
      <p>Latitude2: {{apartment.latitude}}, Longitude2: {{apartment.longitude}}</p>
      <p>Distance: {{ calculateDistance(store.poi.position.lat, store.poi.position.lon, apartment.latitude, apartment.longitude) }} Km</p> -->
    <div
      v-if="
        calculateDistance(
          store.poi.position.lat,
          store.poi.position.lon,
          apartment.latitude,
          apartment.longitude
        ) < 20 && store.selectedBagni == 0
      "
    >
      <AppCard :apartment="apartment" />

      <!-- modal button for filters -->
      <!-- <div class="col-2 mb-3">
    <button
      class="btn btn-outline-dark my_filterbutton rounded"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
      data-bs-backdrop="false"
    >
      <fa icon="sliders" class="me-2" /> Filtri
    </button>
  </div> -->

      <!-- filters modal -->
      <!-- <div
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
             rooms -->
      <!-- <h3 class="mb-3 text-capitalize">stanze</h3>
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
  </div> -->
    </div>
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

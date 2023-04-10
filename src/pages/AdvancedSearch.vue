<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "../components/AppCard.vue";
// import AppFilter from "../components/AppFilter.vue";

export default {
  data() {
    return {
      store,
      value: "",
      rooms: "",
      beds: "",
      services: [],
      radius: "",
      apServices: [],
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
    getSearch() {
      axios
        .get(`${this.store.baseUrl}/api/apartments/search`, {
          rooms: this.rooms,
          beds: this.beds,
          services: this.apServices,
          street: store.street,
          radius: this.radius,
        })
        .then((response) => {
          console.log(response.data.searchByResults);
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

  <!-- <div class="row my_searchrow">
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
  </div> -->

  <!-- <p>Latitude1: {{store.poi.position.lat}}, Longitude1: {{store.poi.position.lon}}</p>
    <p>Latitude2: {{apartment.latitude}}, Longitude2: {{apartment.longitude}}</p>
    <p>Distance: {{ calculateDistance(store.poi.position.lat, store.poi.position.lon, apartment.latitude, apartment.longitude) }} Km</p> -->
  <!-- <div
      v-if="
      calculateDistance(
        store.poi.position.lat,
        store.poi.position.lon,
        apartment.latitude,
        apartment.longitude
        ) < 20
        "
        class="text-danger"
        > -->

  <!-- <AppFilter :services="services" /> -->

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
  <div v-for="(apartment, index) in store.apList" :key="apartment.id">
    <AppCard :apartment="apartment" />
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

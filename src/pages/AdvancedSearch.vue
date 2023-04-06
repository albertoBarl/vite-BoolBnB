<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "../components/AppCard.vue";

export default {
  data() {
    return {
      store,
      apartments: null,
      //   loading: true,
    };
  },
  components: {
    AppCard,
  },
  methods: {
    getApartments() {
      axios.get(`${this.store.baseUrl}/api/apartments`).then((response) => {
        this.apartments = response.data.results.data;
        console.log(this.apartments);
      });
    },
    // saveData() {
    //   localStorage.setItem("storeData", JSON.stringify(this.store));
    // },
    // loadData() {
    //   const storeData = localStorage.getItem("storeData");
    //   if (storeData) {
    //     this.store = JSON.parse(storeData);
    //   }
    // },
    // clearData() {
    //   localStorage.removeItem("storeData");
    // },
    // calculateDistance(lat1, lng1, lat2, lng2) {
    //   const radius = 6371; // Earth's radius in km
    //   const dLat = this.toRadians(lat2 - lat1);
    //   const dLng = this.toRadians(lng2 - lng1);
    //   const a =
    //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //     Math.cos(this.toRadians(lat1)) *
    //       Math.cos(this.toRadians(lat2)) *
    //       Math.sin(dLng / 2) *
    //       Math.sin(dLng / 2);
    //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //   const distance = radius * c;

    //   return distance.toFixed(2);
    // },
    // toRadians(degree) {
    //   return degree * (Math.PI / 180);
    // },
  },
  // beforeRouteLeave(to, from, next) {
  //   this.clearData();
  //   next();
  // },
  // beforeDestroy() {
  //   this.clearData();
  //   window.removeEventListener("popstate", this.clearData);
  // },
  // mounted() {
  //   this.loadData();
  //   window.addEventListener("popstate", this.clearData);
  //   this.getApartments();
  // },
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

  <div v-for="apartment in apartments" :key="apartments.id">
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
    <AppCard :apartment="apartment" />
    <!-- </div> -->
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

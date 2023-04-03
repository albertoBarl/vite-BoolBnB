<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      integer: null,
      position: null,
      //   loading: true,
      baseUrl: "http://127.0.0.1:8000",
      apiKey: "98ObIc3GfaoIHmTeR31cHCEP87hLeSmB",
    }
  },
  methods: {
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
  }
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
}
};
</script>

<template lang="">
    <!-- <div v-if="loading">
        a
    </div> -->
    <div  > 
        {{ store.poi }}
    </div>
</template>

<style lang="">
</style>
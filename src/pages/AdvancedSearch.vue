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
    };
  },
  //   mounted() {
  //     axios
  //       .get(
  //         `https://api.tomtom.com/search/2/geocode/${this.$route.params.place}.json?key=${this.apiKey}`
  //       )
  //       .then((response) => {
  //   this.integer = response.data.results;
  //         console.log(store.poi);
  //         for (let item of this.integer) {
  //           console.log(item.address.freeformAddress);
  //           if (item.address.freeformAddress === this.$route.params.place) {
  //             this.position = this.integer;
  //           }
  //         }
  //         // console.log(this.integer);
  //         // console.log(this.position);
  //       });
  //   },
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
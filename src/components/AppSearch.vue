  <script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      searchText: "",
      results: [],
      apiKey: "98ObIc3GfaoIHmTeR31cHCEP87hLeSmB",
    };
  },
  methods: {
    getResults() {
      axios
        .get(
          `https://api.tomtom.com/search/2/geocode/${this.searchText}.json?key=${this.apiKey}`
        )
        .then((response) => {
          this.results = response.data.results;
        });
    },
    autoComplete(index) {
      store.poi = this.results[index];
      // console.log(store.poi);
    },
  },
};
</script>
<template>
  <div>
    <input
      type="text"
      placeholder="cerca luogo"
      v-model="searchText"
      @input="getResults"
    />
    <ul v-if="results.length">
      <li
        @click="autoComplete(index)"
        v-for="(result, index) in results"
        :key="index"
      >
        <router-link
          :to="{
            name: 'search',
            params: { place: result.address.freeformAddress },
          }"
        >
          {{ result.address.freeformAddress }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
</style>
  
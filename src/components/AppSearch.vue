  <script>
import axios from "axios";

export default {
  data() {
    return {
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
      <li v-for="(result, index) in results" :key="index">
        {{ result.address.freeformAddress }}
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
</style>
  
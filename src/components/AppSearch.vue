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
    saveData() {
      localStorage.setItem("storeData", JSON.stringify(this.store));
    },
    handleClick(index) {
      this.autoComplete(index);
      this.saveData();
    }
  },
};
</script>
<template>
  <div class="input-address">
    <input type="text" placeholder="cerca luogo" v-model="searchText" @input="getResults" />
    <ul v-show="results.length > 0" class="ul-address">
      <li v-for="(result, index) in results" :key="index" @click="handleClick(index)" class="li-address">
        <router-link :to="{ name: 'search', params: { place: result.address.freeformAddress } }"
          class="text-decoration-none text-black">
          {{ result.address.freeformAddress }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.ul-address {
  position: absolute;
  top: 100%;
  left: 0;
  padding-right: -2rem;
}

.li-address {
  list-style-type: none;
}

li:before {
  content: "\f015";
  /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  padding-right: 20px;
  width: var(--icon-space);
}

.input-address {
  position: relative
}

ul {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;

}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
  
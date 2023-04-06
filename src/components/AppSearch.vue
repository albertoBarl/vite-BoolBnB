<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      searchText: "",
      results: [],
    };
  },
  methods: {
    getResults() {
      axios
        .get(
          `${this.store.baseUrl}${this.searchText}.json?key=${this.store.apiKey}`
        )
        .then((response) => {
          this.results = response.data.results;
        });
    },
    // autoComplete(index) {
    //   store.poi = this.results[index];
    //   // console.log(store.poi);
    // },
    // saveData() {
    //   localStorage.setItem("storeData", JSON.stringify(this.store));
    // },
    // handleClick(index) {
    //   this.autoComplete(index);
    //   this.saveData();
    // },
  },
};
</script>
<template>
  <div class="input-address w-100">
    <input
      type="text"
      placeholder="Cerca luogo..."
      class="rounded-pill w-100 py-2 px-3 border shadow-sm"
      v-model="searchText"
      @input="getResults"
    />
    <ul v-show="results.length > 0" class="ul-address">
      <li
        v-for="(result, index) in results"
        :key="index"
        @click="handleClick(index)"
        class="li-address"
      >
        <router-link
          :to="{
            name: 'search',
            params: { place: result.address.freeformAddress },
          }"
          class="text-decoration-none text-black"
        >
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

.input-address {
  position: relative;
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

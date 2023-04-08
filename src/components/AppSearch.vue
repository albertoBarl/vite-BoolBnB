<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      value: "",
      results: [],
    };
  },
  methods: {
    getSearch(param) {
      axios
        .get(`${this.store.baseUrl}/api/apartments`, {
          street: param,
        })
        .then((response) => {
          if (response.data.success) {
            store.apList = response.data.results;
          }
        });
    },
    replaceSpaces(string) {
      let str = string;
      // replace white spaces with %20
      let replacedStr = str.replace(/ +/g, "$20");
      // modified string
      getSearch(replacedStr);
    },
  },
};
</script>
<template>
  <div class="input-address w-100">
    <input
      type="text"
      placeholder="Cerca luogo..."
      class="rounded-pill w-100 py-2 px-3 border shadow-sm"
      v-model="value"
      @keyup.enter="replaceSpaces(value)"
    />
    <!-- <ul v-show="results.length > 0" class="ul-address">
      <li
        v-for="(results, index) in store.apList"
        :key="index"
        class="li-address"
      >
        <router-link
          :to="{
            name: 'search',
            params: { place: results.address.freeformAddress },
          }"
          class="text-decoration-none text-black"
        >
          {{ results.address.freeformAddress }}
        </router-link>
      </li>
    </ul> -->
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

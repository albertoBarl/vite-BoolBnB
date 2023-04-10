<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "../components/AppCard.vue";

export default {
  components: {
    AppCard,
  },
  name: "Homepage",
  data() {
    return {
      store,
      sponsorized: [],
      loading: true,
      allaps: [],
    };
  },
  methods: {
    getSpApartments() {
      axios.get(`${this.store.baseUrl}/api/sponsorship`).then((response) => {
        console.log(response.data);
        this.sponsorized = response.data.sponsorshipResults;
        this.loading = false;
      });
    },
    getAllAps() {
      axios.get(`${this.store.baseUrl}/api/allaps`).then((response) => {
        this.allaps = response.data.allApsResults;
        this.loading = false;
      });
    },
  },
  mounted() {
    this.getSpApartments();
  },
};
</script>

<template lang="">
  <div class="col-12">
    <div
      class="position-absolute top-50 start-50 translate-middle"
      v-if="loading"
    >
      <div class="loader"></div>
    </div>
    <div v-else class="row row-cols-1 row-cols-md-2 g-4 rounded">
      <div class="col" v-for="apartment in sponsorized" :key="apartment.slug">
        <h4 class="text-color border-bottom border-2">Sponsored</h4>
        <AppCard :apartment="apartment" />
      </div>
    </div>
    
  </div>

  <!-- <nav class="my_pagination w-100 mt-5">
    <ul class="pagination">
      <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
        <button class="page-link" @click="getApartments(currentPage - 1)">
          Prev
        </button>
      </li>
      <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
        <button class="page-link" @click="getApartments(currentPage + 1)">
          next
        </button>
      </li>
    </ul>
  </nav> -->
</template>

<style lang="scss" scoped>
.text-color {
  color: #FF385C;
}

.my_card {
  width: 350px;
  margin: 0 auto;

  img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    position: relative;
  }
}

.loader {
  border: 16px solid #f3f3f3;
  /* Light grey */
  border-top: 16px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

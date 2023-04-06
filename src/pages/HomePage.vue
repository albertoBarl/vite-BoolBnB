<script>
import axios from "axios";

import AppSearch from "../components/AppSearch.vue";
import AppCard from "../components/AppCard.vue";

export default {
  components: {
    AppSearch,
    AppCard,
  },
  name: "Homepage",
  data() {
    return {
      apartments: [],
      loading: true,
      baseUrl: "http://127.0.0.1:8000",
      currentPage: 1,
      lastPage: null,
    };
  },
  methods: {
    getApartments(apartment_page) {
      this.loading = true;
      axios
        .get(`${this.baseUrl}/api/apartments`, {
          params: { page: apartment_page },
        })
        .then((response) => {
          if (response.data.success) {
            console.log(response.data);
            this.apartments = response.data.results.data;
            this.currentPage = response.data.results.current_page;
            this.lastPage = response.data.results.last_page;
            this.loading = false;
          } else {
            //pagina errore
          }
        });
    },
  },
  mounted() {
    this.getApartments(this.currentPage);
  },
};
</script>

<template lang="">

    <div class="col-12">
        <div class="position-absolute top-50 start-50 translate-middle" v-if="loading">
            <div class="loader"></div>
        </div>
        <div v-else class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" v-for="apartment in apartments" :key="apartment.slug">
                <AppCard :apartment="apartment" />
            </div>
        </div>
    </div>

    <nav class="my_pagination w-100 mt-5">
      <ul class="pagination">
        <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
          <button class="page-link" @click="getApartments(currentPage - 1)">Prev</button>
        </li>
        <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
          <button class="page-link" @click="getApartments(currentPage + 1)">next</button>
        </li>
      </ul>
    </nav>


</template>

<style lang="scss" scoped>
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
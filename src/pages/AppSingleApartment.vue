<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "AppSingleApartment",
  data() {
    return {
      store,
      apartment: [],
      loading: true,

      form: {
        email: "",
        content: "",
        apartment_id: "",
      },
    };
  },
  methods: {
    saveMessage() {
      axios
        .post(`${this.store.baseUrl}/api/messages`, this.form)
        .then((response) => {
          this.messages = response.data.results;
          console.log(this.messages);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(this.form);
    },
  },
  mounted() {
    // this.store.loadingLocal = true;
    axios
      .get(`${this.store.baseUrl}/api/apartments/${this.$route.params.slug}`)
      .then((response) => {
        this.form.apartment_id = this.apartment.id;
        this.apartment = response.data.showResults;
        this.loading = false;
      });
  },
};
</script>

<template lang="">
  <div class="container p-sm-0 p-lg-5">
    <div class="col-12 d-flex justify-content-center" v-if="loading">
      <div class="loader"></div>
    </div>

    <div v-else class="row">
      <div class="row">
        <div class="col-12">
          <a href="http://localhost:5173/"
            ><button class="btn mb-4 my_sellerbtnrev">
              Torna alla lista <fa icon="reply" class="ms-1" /></button
          ></a>
        </div>
      </div>

      <div
        v-if="apartment.image.includes('post_images')"
        class="col-lg-6 col-sm-12 justify-content-end"
      >
        <img
          class="my_aptimg"
          :src="`${this.store.baseUrl}/storage/${apartment.image}`"
          alt=""
        />
      </div>
      <div v-else class="col-lg-6 col-sm-12 justify-content-end">
        <img class="my_aptimg" :src="`${apartment.image}`" alt="" />
      </div>

      <div class="col-lg-6 col-sm-12 justify-content-start">
        <div class="row mt-4">
          <div class="col-sm-9 col-lg-12 text-wrap">
            <h2>
              {{ apartment.title }}
              <span
                class="btn btn-dark"
                v-if="apartment.sponsors[0] != undefined"
                >{{ apartment.sponsors[0].title }}</span
              >
            </h2>
            <p>{{ apartment.address }}</p>
          </div>
          <!-- <div class="col-sm-3 col-lg-3 text-end">
                        <div class="my_aptprice"><h5 class="me-3">500€</h5></div>
                    </div>
                    <div class="col-lg-9"></div> -->
        </div>

        <div class="row mt-2 text-center">
          <div class="col-3 border-end align-items-center p-2">
            <fa :icon="['fab', 'codepen']" class="me-2 my_apticon" />
            {{ apartment.square_feet }}m&#178;
          </div>

          <div class="col-3 border-end align-items-center p-2">
            <fa icon="person-shelter" class="me-2 my_apticon" />
            {{ apartment.room }}
            <!-- {{ apartment.sponsorship }} -->
          </div>

          <div class="col-3 border-end align-items-center p-2">
            <fa icon="bed" class="me-2 my_apticon" />
            {{ apartment.bed }}
          </div>

          <div class="col-3 align-items-center p-2">
            <fa icon="person-half-dress" class="me-2 my_apticon" />
            {{ apartment.bathroom }}
          </div>
        </div>

        <div class="row my_desclg">
          <div class="row mt-4 text-wrap my_justify">
            <p>{{ apartment.description }}</p>
            <button
              class="btn mt-4 w-100 my_sellerbtn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              Contatta il venditore
            </button>

            <div
              class="modal fade"
              id="exampleModal3"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Contatta il venditore
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div>
                      <form @submit.prevent="saveMessage">
                        <div class="mb-3">
                          <label for="email" class="form-label text-capitalize"
                            >email:</label
                          >
                          <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            v-model="form.email"
                          />
                        </div>

                        <div class="mb-3">
                          <label for="content" class="form-label text-capitalize">contenuto:</label>
                          <textarea id="content" name="content" class="form-control" v-model="form.content"></textarea>
                        </div>

                        <button type="submit" class="btn w-100 my_sellerbtn mt-4">Invia messaggio</button>
                          <label for="name" class="form-label text-capitalize"
                            >nome:</label
                          >
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-control"
                            v-model="form.name"
                          />
                        </div>

                        <div class="mb-3">
                          <label
                            for="surname"
                            class="form-label text-capitalize"
                            >cognome:</label
                          >
                          <input
                            type="text"
                            id="surname"
                            name="surname"
                            class="form-control"
                            v-model="form.surname"
                          />
                        </div>

                        <div class="mb-3">
                          <label
                            for="content"
                            class="form-label text-capitalize"
                            >contenuto:</label
                          >
                          <textarea
                            id="content"
                            name="content"
                            class="form-control"
                            v-model="form.content"
                          ></textarea>
                        </div>

                        <div class="mb-3">
                          <label
                            for="apartment_id"
                            class="form-label text-capitalize"
                            >id appartamento:</label
                          >
                          <input
                            type="number"
                            id="apartment_id"
                            name="apartment_id"
                            class="form-control"
                            v-model="form.apartment_id"
                          />
                        </div>

                        <button
                          type="submit"
                          class="btn w-100 my_sellerbtn mt-4"
                        >
                          Invia messaggio
                        </button>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="pt-2">{{ apartment.description }}</p>
    </div>
    
    <div class="row mt-4 text-wrap my_justify my_descsm">

      <button class="btn mt-4 w-100 my_sellerbtn" data-bs-toggle="modal" data-bs-target="#exampleModal4"> Contatta il venditore </button>
      
      <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog">
          <div class="modal-content">
            

      <p>{{ apartment.description }}</p>
      <button
        class="btn mt-4 w-100 my_sellerbtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal4"
      >
        Contatta il venditore
      </button>

      <div
        class="modal fade"
        id="exampleModal4"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Contatta il venditore
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form @submit.prevent="saveMessage">
                <div class="mb-3">
                  <label for="email" class="form-label text-capitalize"
                    >email:</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control"
                    v-model="form.email"
                  />
                </div>

                <div class="mb-3">

                  <label for="content" class="form-label text-capitalize">contenuto:</label>
                  <textarea id="content" name="content" class="form-control" v-model="form.content"></textarea>
                </div>

                <button type="submit" class="btn w-100 my_sellerbtn mt-4">Invia messaggio</button>

                  <label for="name" class="form-label text-capitalize"
                    >nome:</label
                  >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                    v-model="form.name"
                  />
                </div>

                <div class="mb-3">
                  <label for="surname" class="form-label text-capitalize"
                    >cognome:</label
                  >
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    class="form-control"
                    v-model="form.surname"
                  />
                </div>

                <div class="mb-3">
                  <label for="content" class="form-label text-capitalize"
                    >contenuto:</label
                  >
                  <textarea
                    id="content"
                    name="content"
                    class="form-control"
                    v-model="form.content"
                  ></textarea>
                </div>

                <div class="mb-3">
                  <label for="apartment_id" class="form-label text-capitalize"
                    >id appartamento:</label
                  >
                  <input
                    type="number"
                    id="apartment_id"
                    name="apartment_id"
                    class="form-control"
                    v-model="form.apartment_id"
                  />
                </div>

                <button type="submit" class="btn w-100 my_sellerbtn mt-4">
                  Invia messaggio
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.my_apticon {
  color: $bnb-red;
}

.my_sellerbtn {
  color: $bnb-white;
  background-color: $bnb-red;
  border: 1px solid $bnb-red;
  padding: 7px 11px;
}

.my_sellerbtn:hover {
  color: $bnb-red;
  background-color: $bnb-white;
  border: 1px solid $bnb-red;
}

.my_sellerbtnrev {
  color: $bnb-red;
  background-color: $bnb-white;
  border: 1px solid $bnb-red;
  padding: 7px 11px;
}

.my_sellerbtnrev:hover {
  color: $bnb-white;
  background-color: $bnb-red;
  border: 1px solid $bnb-red;
}

.my_desclg {
  display: none;
}

.my_aptimg {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}

.my_aptprice {
  background-image: url("https://cdn-icons-png.flaticon.com/512/26/26640.png");
  background-size: cover;
  background-position: center;
  rotate: (180deg);
  padding: 10px;
  color: $bnb-white;

  h5 {
    rotate: (-180deg) !important;
  }
}

.my_justify {
  text-align: justify;
}

@media screen and (min-width: 768px) {
  .my_aptimg {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
}

@media screen and (min-width: 992px) {
  .my_aptimg {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .my_aptprice {
    rotate: (0deg);

    h5 {
      rotate: (0deg) !important;
      text-align: left;
      margin-left: 5px;
    }
  }

  .my_descsm {
    display: none;
  }

  .my_desclg {
    display: flex;
  }
}

@media screen and (min-width: 1200px) {
  .my_aptimg {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }
}
</style>

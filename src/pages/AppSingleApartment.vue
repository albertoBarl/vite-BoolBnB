<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "AppSingleApartment",
  data() {
    return {
      apartment: null,
      loading: true,
      baseUrl: "http://127.0.0.1:8000",
    };
  },
  mounted() {
    // this.store.loadingLocal = true;
    axios
      .get(`${this.baseUrl}/api/apartments/${this.$route.params.slug}`)
      .then((response) => {
        this.apartment = response.data.results;
        console.log(this.apartment.sponsors);
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
            ><button class="btn mb-4 my_sellerbtn">
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
          :src="`${this.baseUrl}/storage/${apartment.image}`"
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
            </h2>
            <!-- <span class="btn btn-dark">{{
                apartment.sponsors[0].title
              }}</span> -->
            <p>{{ apartment.address }}</p>
          </div>
          <!-- <div class="col-sm-3 col-lg-3 text-end">
                        <div class="my_aptprice"><h5 class="me-3">500€</h5></div>
                    </div>
                    <div class="col-lg-9"></div> -->
        </div>

        <div class="row mt-2 text-center">
          <div class="col-4 border-end align-items-center p-2">
            <fa :icon="['fab', 'codepen']" class="me-2 my_apticon" />
            {{ apartment.square_feet }}&#178;
          </div>
          <div class="col-4 border-end align-items-center p-2">
            <fa icon="bed" class="me-2 my_apticon" /> {{ apartment.room }}
            {{ apartment.sponsorship }}
          </div>
          <div class="col-4 align-items-center p-2">
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
              data-bs-target="#exampleModal"
            >
              Contatta il venditore
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Contatta il venditore!
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
                      <div class="input-group mb-3">
                        <span
                          class="input-group-text my_sellerbtn"
                          id="basic-addon1"
                          >@</span
                        >
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div>
                        <div class="input-group">
                          <span class="input-group-text my_sellerbtn"
                            >Contenuto</span
                          >
                          <textarea
                            class="form-control"
                            aria-label="With textarea"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Annulla
                    </button>
                    <button type="button" class="btn btn-primary my_sellerbtn">
                      Invia Email al venditore!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 text-wrap my_justify my_descsm">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
        aspernatur cumque nostrum laudantium tenetur velit voluptatem dolorem
        deleniti hic deserunt labore, iure, dolorum laborum officia ab et fugit
        quas suscipit.
      </p>
      <a href="#"
        ><button class="btn mt-4 w-100 my_sellerbtn">
          Contatta il venditore
        </button></a
      >
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
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

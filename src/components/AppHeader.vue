<script>
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { store } from "../store";

export default {
  data() {
    return {
      store,
      valueStr: "",
      services: [],
    };
  },
  methods: {
    getServices() {
      axios.get(`${this.store.baseUrl}/api/services`).then((response) => {
        this.services = response.data.results;
      });
    },
    getLocation() {
      axios
        .get(`${this.store.baseUrl}/api/apartments`, {
          params: {
            street: this.valueStr,
          },
        })
        .then((response) => {
          store.apList = response.data.indexResults;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getServices();
  },
};
</script>

<template lang="">
  <div
    class="offcanvas my_offcanvasfilters offcanvas-bottom rounded-top"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header pb-0">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
      <!-- <h5 class="offcanvas-title me-2" id="offcanvasBottomLabel">Filtri</h5> -->
    </div>
    <hr />
    <!-- <div class="offcanvas-body small px-3">
      <section>
        <h3 class="mb-3">Stanze e letti</h3>

        <div class="row justify-content-between mb-3">
          <div class="col-12"><h5>Camere da letto</h5></div>
        </div>

        <div class="row justify-content-between mb-3">
          <div class="col-12 d-flex my_horizontalscroll">
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill active"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Qualsiasi
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              1
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              2
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              3
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              4
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              5
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              6
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              7
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              8+
            </button>
          </div>
        </div>

        <br />

        <div class="row justify-content-between mb-3">
          <div class="col-12"><h5>Letti</h5></div>
        </div>

        <div class="row justify-content-between mb-3">
          <div class="col-12 d-flex my_horizontalscroll">
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill active"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Qualsiasi
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              1
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              2
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              3
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              4
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              5
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              6
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              7
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              8+
            </button>
          </div>
        </div>

        <br />

        <div class="row justify-content-between mb-3">
          <div class="col-12"><h5>Bagni</h5></div>
        </div>

        <div class="row justify-content-between mb-3">
          <div class="col-12 d-flex my_horizontalscroll">
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill active"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Qualsiasi
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              1
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              2
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              3
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              4
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              5
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              6
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              7
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              8+
            </button>
          </div>
        </div>

        <br />

        <div class="row justify-content-between mb-3">
          <div class="col-12"><h5>Bagni</h5></div>
        </div>

        <div class="row justify-content-between mb-3">
          <div class="col-12 d-flex my_horizontalscroll">
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill active"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              Qualsiasi
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              1
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              2
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              3
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              4
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              5
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              6
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              7
            </button>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              data-bs-toggle="button"
            >
              8+
            </button>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <h3>Servizi</h3>

        <div
          class="row align-items-center mb-3 fs-6"
          v-for="item in services"
          :key="item.id"
        >
          <div class="col-10">
            <label class="form-check-label">{{ item.name }}</label>
          </div>
          <div class="col-2">
            <input
              class="form-check-input my_checkbox float-end"
              type="checkbox"
              value=""
              id="{{ item.id }}"
            />
          </div>
        </div>
      </section>
    </div> -->
  </div>

  <!--MODALI-->

  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModal1Label"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 ms-5" id="exampleModal1Label">
            Modal title
          </h1>
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
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <!-- INIZIO HEADER FINE MODALI OFFCANVAS-->

  <header class="w-100 fixed-top bg-light shadow-sm my_headersm p-3">

    <div class="row">
      <div class="col-1">
          <!-- <button class="btn btn-outline-dark my_filterbutton" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" data-bs-backdrop="false">
              <fa icon="sliders"/>
          </button> -->
      </div>

      <div class="col-11">
        <form class="d-flex align-items-center" role="search">
              <div class="input-address w-100 d-flex">
                <input
                  type="text"
                  placeholder="Cerca luogo..."
                  class="rounded-pill w-100 py-2 px-3 border shadow-sm"
                  v-model="valueStr"
                />
                <router-link
                  class="btn my_searchbtnsm rounded-circle ms-2"
                  :to="{ name: 'search' }"
                  @click="getLocation(valueStr)"
                >
                  <fa icon="magnifying-glass"
                /></router-link>
              </div>
            </form>
      </div>
    </div>
  </header>

  <nav class="w-100 fixed-bottom bg-light border-top my_navsm">

    <div class="container justify-content-center d-flex pt-3">
      <button class="btn my_navico mb-0 text-center">
        <fa icon="magnifying-glass" class="my_active" /><br />
        <p>Esplora</p>
      </button>


      <div class="col-2 d-flex justify-content-end align-items-center">
        <a class="btn fs-5 my_userbutton shadow-sm rounded-circle ms-3" href="http://127.0.0.1:8000/login">
          <fa :icon="['far', 'circle-user']" />
        </a>
      </div>
    </div>
  </nav>

  <header class="w-100 fixed-top bg-light shadow-sm my_headermd px-5 py-3">

    <div class="row align-items-center px-5">
      <div class="col-2">
        <a href="http://localhost:5173/"
          ><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="airbnb-logo-lg"
            class="img-fluid"
        /></a>
      </div>

      <div class="col-1">
        <div class="col-2">
          <!-- <button class="btn btn-outline-dark my_filterbutton" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-backdrop="false">
              <fa icon="sliders" />
          </button> -->
        </div>
      </div>

      <div class="col-7 justify-content-center">

        <div class="row align-items-center">

          <div class="col-12">
            <form class="d-flex align-items-center" role="search">
              <div class="input-address w-100 d-flex">
                <input
                  type="text"
                  placeholder="Cerca luogo..."
                  class="rounded-pill w-100 py-2 px-3 border shadow-sm"
                  v-model="valueStr"
                />
                <router-link
                  class="btn my_searchbtnsm rounded-circle ms-2"
                  :to="{ name: 'search' }"
                  @click="getLocation(valueStr)"
                >
                  <fa icon="magnifying-glass"
                /></router-link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col-2 d-flex justify-content-end align-items-center">

        <div class="btn-group ms-3">
          <a class="btn fs-5 my_userbutton shadow-sm rounded-circle ms-3" href="http://127.0.0.1:8000/login">
          <fa :icon="['far', 'circle-user']" />
        </a>
        </div>
      </div>
    </div>
  </header>

  <header class="w-100 fixed-top bg-light shadow-sm my_headerlg px-5 py-3">
    <div class="row align-items-center px-5">
      <div class="col-2">
        <a href="http://localhost:5173/"
          ><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="airbnb-logo-lg"
            class="img-fluid"
        /></a>
      </div>

      <div class="col-2"></div>

      <div class="col-4 justify-content-center">

        <div class="row align-items-center">

          <div class="col-12">
            <form class="d-flex align-items-center" role="search">
              <div class="input-address w-100 d-flex">
                <input
                  type="text"
                  placeholder="Cerca luogo..."
                  class="rounded-pill w-100 py-2 px-3 border shadow-sm"
                  v-model="valueStr"
                />
                <router-link
                  class="btn my_searchbtnsm rounded-circle ms-2"
                  :to="{ name: 'search' }"
                  @click="getLocation(valueStr)"
                >
                  <fa icon="magnifying-glass"
                /></router-link>
              </div>
            </form>
          </div>
        </div>
      </div>


      <!-- <div class="col-2">
          <button class="btn btn-outline-dark my_filterbutton rounded" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-backdrop="false">
              <fa icon="sliders" class="me-2" /> Filtri
          </button>
      </div> -->

      <div class="col-4 d-flex justify-content-end align-items-center">

        <a class="btn fs-5 my_userbutton shadow-sm rounded-circle ms-3" href="http://127.0.0.1:8000/login">
          <fa :icon="['far', 'circle-user']" />
        </a>

      </div>
    </div>
  </header>

  <!-- modal button for filters -->
  <div class="col-2 mb-3">
    <button
      class="btn btn-outline-dark my_filterbutton rounded"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
      data-bs-backdrop="false"
    >
      <!-- <fa icon="sliders" class="me-2" /> Filtri -->
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.my_headermd {
  display: none;
}

.my_headerlg {
  display: none;
}

.my_navmd {
  display: none;
}

.my_searchbtn {
  border: 1px solid $bnb-grey;
  border-radius: 50px;
  margin: 20px 20px;
  width: calc(100% - 40px);

  .col-8 {
    text-align: left;

    .my_searchtitle {
      font-size: 10pt;
    }

    p {
      font-size: 8pt;
      color: $bnb-grey;
    }
  }

  .my_filterbutton {
    padding: 4px 8px 5px 8px;
    border: 1px solid $bnb-grey;
    border-radius: 100%;
  }
}

.my_searchbtnsm {
  color: $bnb-white;
  background-color: $bnb-red;
  border: 1px solid $bnb-red;
  padding: 7px 11px;
}

.my_searchbtnsm:hover {
  color: $bnb-red;
  background-color: $bnb-white;
  border: 1px solid $bnb-red;
}

.my_mapbtn {
  margin: -50px auto 10px auto;
}

.my_navico {
  svg {
    font-size: 19pt;
    color: $bnb-grey;
  }

  .my_active {
    color: $bnb-red;
  }

  p {
    font-size: 10pt;
  }
}

.my_offcanvasfilters {
  height: 98vh !important;

  .my_checkbox {
    width: 30px;
    height: 30px;
  }

  .my_horizontalscroll {
    overflow: auto;
    white-space: nowrap;

    button {
      border: 1px solid $bnb-grey;
      padding: 10px 20px;
      margin-right: 10px;
    }
  }
}

@media screen and (min-width: 768px) {
  .my_mapsm {
    display: none;
  }

  .my_filterbutton {
    padding: 4px 8px 5px 8px;
    border: 1px solid $bnb-grey;
  }

  .my_mapmd {
    display: inline-block;
  }

  .my_headersm {
    display: none;
  }

  .my_headermd {
    display: flex;
    width: 100vw;
    padding: 0px 130px;

    .my_filterbutton {
      padding: 4px 8px 5px 8px;
      border: 1px solid $bnb-grey;
    }

    .my_userbutton {
      padding: 5px 10px 5px 10px;
      border: 1px solid $bnb-grey;
    }

    .my_searchbtnmd {
      color: $bnb-white;
      background-color: $bnb-red;
      padding: 7px;
    }
  }

  .my_navsm {
    display: none;
  }

  .my_modalfilters {
    .my_checkbox {
      width: 30px;
      height: 30px;
    }

    .my_horizontalscroll {
      overflow: auto;
      white-space: nowrap;

      button {
        border: 1px solid $bnb-grey;
        padding: 10px 20px;
        margin-right: 10px;
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .my_headerlg {
    display: flex;
    padding: 0px 150px;
  }

  .my_headermd {
    display: none;
  }

  .my_filterbutton {
    padding: 4px 8px 5px 8px;
    border: 1px solid $bnb-grey;
    border-radius: 100%;
  }

  .my_searchbtnmd {
    color: $bnb-white;
    background-color: $bnb-red;
    border: 1px solid $bnb-red;
    padding: 7px 11px;
  }

  .my_searchbtnmd:hover {
    color: $bnb-red;
    background-color: $bnb-white;
    border: 1px solid $bnb-red;
  }
}

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

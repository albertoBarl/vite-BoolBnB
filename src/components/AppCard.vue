<script>
export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
    };
  },
  props: {
    apartment: Object,
  },
};
</script>
<template lang="">
    <div>
        <div class="card my_card border-0">
            <div v-if="apartment.image.includes('post_images')">
                <img class="card-img-top my_cardimg rounded" :src="`${this.baseUrl}/storage/${apartment.image}`" alt="">
            </div>
            <div v-else>
                <img class="card-img-top my_cardimg rounded" :src="`${apartment.image}`" alt="">
            </div>
            <div class="card-body px-0">
                <p class="card-title mb-0">
                    <div class="row">
                        <div class="col-8"><strong>{{ apartment.title }}</strong></div>
                    </div>
                </p>
                <p class="card-text mb-0 text-secondary">{{ apartment.description }}</p>
                <div class="row col-12 p-2 my-2 text-center">
                    <div class="col-4 align-items-center border-end">
                        <fa :icon="['fab', 'codepen']" class="me-2 ms-1 my_apticon" /> {{ apartment.square_feet }}&#178;
                    </div>
                    <div class="col-4 align-items-center border-end">
                        <fa icon="bed" class="me-2 my_apticon" /> {{ apartment.room}}
                    </div>
                    <div class="col-4 align-items-center">
                        <fa icon="person-half-dress" class="me-2 my_apticon" /> {{ apartment.bathroom }}
                    </div>

                    
                </div>
                <!-- <p class="card-text"><strong>118 €</strong> a notte  -->
                <router-link class="btn my_detailsbtn w-100" :to="{ name: 'single_apartment', params: { slug: apartment.slug } }">Vedi dettagli</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables.scss" as *;

.my_cardimg{
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
}

.my_detailsbtn {
    color: $bnb-white;
    background-color: $bnb-red;
    border: 1px solid $bnb-red;
    padding: 7px 11px;
}

.my_detailsbtn:hover {
    color: $bnb-red;
    background-color: $bnb-white;
    border: 1px solid $bnb-red;
}

</style>
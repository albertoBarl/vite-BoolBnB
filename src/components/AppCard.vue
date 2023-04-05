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
                <img class="card-img-top rounded" :src="`${this.baseUrl}/storage/${apartment.image}`" alt="">
            </div>
            <div v-else>
                <img class="card-img-top rounded" :src="`${apartment.image}`" alt="">
            </div>
            <div class="card-body px-0">
                <p class="card-title mb-0">
                    <div class="row">
                        <div class="col-8"><strong>{{ apartment.title }}</strong></div>
                        <div class="col-4 text-end"><fa icon="star" class="me-2" /> 4,91</div>
                    </div>
                </p>
                <p class="card-text mb-0 text-secondary">Host professionista <br> 16 - 21 apr</p>
                <p class="card-text"><strong>118 €</strong> a notte </p>
                <router-link class="btn btn-success" :to="{ name: 'single_apartment', params: { slug: apartment.slug } }">Leggi l'articolo</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="">
</style>
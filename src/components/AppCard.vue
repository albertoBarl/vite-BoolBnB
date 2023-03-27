<script>
export default {
    
}
</script>

<template lang="">

    <div class="card my_card border-0">
        <img src="https://a0.muscache.com/im/pictures/ba068000-9f61-459c-9ecb-6edc11169604.jpg?im_w=720" class="card-img-top rounded" alt="...">
        <a href="#" class="my_heart"> <fa icon="heart" /> </a>
        <div class="card-body px-0">
            <p class="card-title mb-0">
                <div class="row">
                    <div class="col-8"><strong>Bois-en-Ardres, Ardres, Francia</strong></div>
                    <div class="col-4 text-end"><fa icon="star" class="me-2" /> 4,91</div>
                </div>
            </p>
            <p class="card-text mb-0 text-secondary">Host professionista <br> 16 - 21 apr</p>
            <p class="card-text"><strong>118 €</strong> a notte </p>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    
.my_card{
    width: 350px;
    margin: 0 auto;

    img {
        object-fit: cover;
        width: 350px;
        height: 350px;
        position: relative;
    }

    .my_heart{
        font-size: 20pt;
        position: absolute;
        right: 20px;
        top: 10px;
        color: rgba(0, 0, 0, 0.5);
        stroke: white;
        stroke-width: 40px;
    }

}

</style>
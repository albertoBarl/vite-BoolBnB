<script>
export default {
    
}
</script>

<template lang="">

    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasFooter" aria-labelledby="offcanvasFooterLabel">
        <div class="offcanvas-header">
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
            
            <div class="container px-5">

                <div class="row"><strong>Assistenza</strong></div>

                <div class="row">

                    <div class="col-4">
                        <p><a href="#">Centro assistenza</a></p>
                        <p><a href="#">Opzioni di cancellazione</a></p>
                    </div>
                    <div class="col-4">
                        <p><a href="#">AirCover</a></p>
                        <p><a href="#">La nostra risposta all'emergenza COVID-19</a></p>
                    </div>
                    <div class="col-4">
                        <p><a href="#">Accessibilità per tutti</a></p>
                        <p><a href="#">Segnala problemi nel quartiere</a></p>
                    </div>
                    
                </div>

                <div class="row"><hr></div>

                <div class="row"><strong>Community</strong></div>

                <div class="row">

                    <div class="col-4">
                        <p><a href="#">Airbnb: un rifugio sicuro</a></p>
                    </div>
                    <div class="col-4">
                        <p><a href="#">Contro la discriminazione</a></p>
                    </div>
                    <div class="col-4"></div>
                    
                </div>

                <div class="row"><hr></div>

                <div class="row"><strong>Ospitare</strong></div>

                <div class="row">

                    <div class="col-4">
                        <p><a href="#">Apri un Airbnb</a></p>
                        <p><a href="#">Vai al forum della community</a></p>
                    </div>
                    <div class="col-4">
                        <p><a href="#">AirCover per gli host</a></p>
                        <p><a href="#">Come ospitare responsabilmente</a></p>
                    </div>
                    <div class="col-4">
                        <p><a href="#">Esplora le risorse per host</a></p>
                    </div>
                    
                </div>

                <div class="row"><hr></div>

                <div class="row"><strong>Airbnb</strong></div>

                <div class="row">

                    <div class="col-4">
                        <p><a href="#">Newsroom</a></p>
                        <p><a href="#">Opportunità di lavoro</a></p>
                    </div>
                    <div class="col-4">
                        <p><a href="#">Scopri le nuove funzionalità</a></p>
                        <p><a href="#">Investitori</a></p>
                    </div>
                    <div class="col-4">
                        <p><a href="#">Lettera dai nostri fondatori</a></p>
                        <p><a href="#">Gift card</a></p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <footer class="bg-light border-top pb-5 my_footersm">

        <div class="container px-5">

            <div class="row">
                <ul>
                    <li><strong>Assistenza</strong></li>
                    <li><a href="#">Centro Assistenza</a></li>
                    <li><a href="#">AirCover</a></li>
                    <li><a href="#">Accessibilità per tutti</a></li>
                    <li><a href="#">Opzioni di cancellazione</a></li>
                    <li><a href="#">La nostra risposta all'emergenza COVID-19</a></li>
                    <li><a href="#">Segnala problemi nel quartiere</a></li>
                </ul>
            </div>

            <div class="row"><hr></div>

            <div class="row">
                <ul>
                    <li><strong>Community</strong></li>
                    <li><a href="#">Airbnb.org: un rifugio sicuro</a></li>
                    <li><a href="#">Contro la discriminazione</a></li>
                </ul>
            </div>

            <div class="row"><hr></div>

            <div class="row">
                <ul>
                    <li><strong>Ospitare</strong></li>
                    <li><a href="#">Apri un Airbnb</a></li>
                    <li><a href="#">AirCover per gli host</a></li>
                    <li><a href="#">Esplora le risorse per host</a></li>
                    <li><a href="#">Vai al forum della community</a></li>
                    <li><a href="#">Come ospitare responsabilmente</a></li>
                </ul>
            </div>

            <div class="row"><hr></div>

            <div class="row">
                <ul>
                    <li><strong>Airbnb</strong></li>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Scopri le nuove funzionalità</a></li>
                    <li><a href="#">Lettera dai nostri fondatori</a></li>
                    <li><a href="#">Opportunità di lavoro</a></li>
                    <li><a href="#">Investitori</a></li>
                    <li><a href="#">Gift card</a></li>
                </ul>
            </div>

            <div class="row"><hr></div>

            <div class="row">
                <ul>
                    <!-- <li> <a href="#"><fa icon="globe" class="me-1" />Italiano (IT)</a> <a href="#" class="ms-3">€ EUR</a></li> -->
                    <li>© 2023 Airbnb, Inc.</li>
                    <li><a href="#">Privacy</a> &#x2022; <a href="#">Termini</a> &#x2022; <a href="#">Mappa del sito</a> &#x2022; <a href="#">Dettagli dell'azienda</a> &#x2022; <a href="#">Destinazioni</a></li>
                </ul>
            </div>

        </div>
        
    </footer>

    <footer class="bg-light border-top my_footermd fixed-bottom">

        <div class="container w-100 my_mapbtn text-center">
            <a href="#">
                <button class="btn btn-dark rounded-pill my_mapmd"> Mostra la mappa <fa :icon="['fas', 'map']" /></button>
            </a>
        </div>

        <div class="container ms-0">

            <div class="row align-items-center">

                <div class="col-9">
                    <ul>
                        <li>© 2023 Airbnb, Inc.</li>
                        <li><a href="#">Privacy</a> &#x2022; <a href="#">Termini</a> &#x2022; <a href="#">Mappa del sito</a> &#x2022; <a href="#">Dettagli dell'azienda</a> &#x2022; <a href="#">Destinazioni</a></li>
                    </ul>
                </div>

                <div class="col-3"> <a class="btn my_footerbtn" role="button" data-bs-toggle="offcanvas" href="#offcanvasFooter" aria-controls="offcanvasFooter">Supporto e risorse <fa icon="angle-up" /></a> </div>

            </div>
        
        </div>

    </footer>


</template>

<style lang="scss" scoped>
    

.my_footersm{

    margin-bottom: 90px;

    ul{
    list-style-type: none;
    margin: 20px -10px 30px -10px;
    line-height: 30px;

        a{
            text-decoration: none;
            color: #000;
        }
    }

}

.my_footermd{
    display: none;
}

@media screen and (min-width: 768px) {
    
    .my_footersm{
        display: none;
    }

    .my_footermd{
        display: inline-block;
        font-size: 10pt;
    
        ul{
            list-style-type: none;
            margin: 20px -10px 30px -10px;
            line-height: 30px;

            a{
                text-decoration: none;
                color: #000;
            }
        }

        .my_mapbtn{
        margin: -50px auto 10px auto;
        }

        .my_footerbtn{
            font-size: 10pt;
        }

    }

    #offcanvasFooter{
        height: fit-content;

        a{
            text-decoration: none;
            color: #000;
        }
    }

}

</style>
var app = new Vue({
    
    el: "#app",
    data: {
        toggle: false,
        indexCarousel: 0,
        carousel: [
            {
                project: "boolzapp",
                data: [
                    {
                    
                        img: "img/boolzap.jpg",
                        desc: "Replica di un sito di chat, si ha la possibilità di mandare mandare messaggi e ricevere delle frasi di risposta",
                        tec: "Vue.JS | HTML | CSS"
                        
                    }
                ],
            },
            {
                project: "boolflix",
                data: [

                    {
                        
                        img: "img/boolflix.jpg",
                        desc: "Creazione di un sito simile a Netflix. Sfruttando una chiamata axios ad un server esterno possiamo filtrare la ricerca dell'utente",
                        tec: "Vue.JS | HTML | CSS"
                        
                    }
                ],
            },
            {
                project: "barber",
                data: [

                    {
                       
                        img: "img/barber.jpg",
                        desc: "Layout ispirato per essere utilizzato da un Barber Shop",
                        tec: "Vue.JS | HTML | CSS"
                        
                    }
                ],
            },
            {
                project: "deliveboo",
                data: [
                    {
                        
                        img: "img/deliveboo.jpg",
                        desc: "Creazione da zero un sito ispirato al food delivery. L'utente visitatore potrà ordinare piatti dal menu del ristorante selezionato, e procedere al pagamento, confermato via Mail. L'utente registrato potrà inserire il suo ristorante, creare, modificare o eliminare i suoi piatti dal menu, e infine controllare gli ordini ricevuti.",
                        tec: "Laravel | PHP | Braintree | Vue.JS | HTML | SASS | Bootstrap "
                        
                    }
                ]
            },
            {
                project: "spotify",
                data: [
                    {
                        
                        img: "img/spotify.jpg",
                        desc:"Replica Web App di Spotify",
                        tec: "HTML | CSS"
                        
                    }
                ]
            }
        ],
    },
    methods: {
        active: function (index) {
            if (index == this.indexCarousel) {
                return 'active';
            } else {
                return 'none';
            }
        },
        nextImg: function () {
            this.indexCarousel++;
            if (this.indexCarousel > (this.carousel.length - 1)) {
                this.indexCarousel = 0
            }
        },
        prevImg: function () {
            this.indexCarousel--;
            if (this.indexCarousel < 0) {
                this.indexCarousel = this.carousel.length - 1;
            }
        },
    },

})
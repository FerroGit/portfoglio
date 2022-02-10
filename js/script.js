var app = new Vue({
    
    el: "#app",
    data: {
        toggle: false,
        indexCarousel: 0,
        indexCarousel1: 1,
        indexCarousel2: 2,
        interval: null,
        carousel: [
            {
                project: "boolzapp",
                data: [
                    {
                    
                        github: "https://ferrogit.github.io/Boolzapp/",
                        img: "img/boolzap.jpg",
                        desc: "Replica di una piattaforma di messaggistica. E' possibile inviare e ricevere messaggi in maniera istantanea.",
                        tec: "Vue.JS | HTML | CSS",
                        class: "card"
                    }
                ],
            },
            {
                project: "boolflix",
                data: [

                    {
                        
                        github: "https://ferrogit.github.io/Boolflix/",
                        img: "img/boolflix.jpg",
                        desc: "Creazione di un sito simile a Netflix. L'utente potrà ricercare Film o Serie TV a piacimento",
                        tec: "Vue.JS | HTML | CSS",
                        class: "card"
                    }
                ],
            },
            {
                project: "barber",
                data: [

                    {
                       
                        github: "https://ferrogit.github.io/Barber-Shop/",
                        img: "img/barber.jpg",
                        desc: "Layout orientato per essere utilizzato da un Barber Shop",
                        tec: "Vue.JS | HTML | CSS",
                        class: "card"
                    }
                ],
            },
            {
                project: "deliveboo",
                data: [
                    {
                        
                        github: "https://github.com/FerroGit/deliveboo-proj",
                        img: "img/deliveboo.jpg",
                        desc: "Sito dedicato al food delivery. L'utente visitatore potrà ordinare piatti dal menu del ristorante selezionato, e procedere al pagamento, confermato via Mail. L'utente registrato potrà inserire il suo ristorante, creare, modificare o eliminare i suoi piatti dal menu, e infine controllare gli ordini ricevuti.",
                        tec: "Laravel | PHP | Braintree | Vue.JS | HTML | SASS | Bootstrap ",
                        class: "card"
                    }
                ]
            },
            {
                project: "spotify",
                data: [
                    {
                        
                        github: "https://ferrogit.github.io/Spotify-Web/",
                        img: "img/spotify.jpg",
                        desc:"Replica Web App di Spotify",
                        tec: "HTML | CSS",
                        class: "card"

                    }
                ]
            },
            {
                project: "WheaterApp",
                data: [
                    {

                        github: "",
                        img: "img/python_firstApp.jpg",
                        desc: "Creazione di un'app per sapere la temperatura esatta in una qualsiasi città nel mondo",
                        tec: "Python",
                        class: "card_special"
                    }
                ],
            }
        ],
    },
    mounted: function() {
        this.$nextTick(function () {
            this.indexCarousel2 = (this.carousel.length - 1);
        })
    },
    mounted: function(){
        this.prevImg();
        this.interval = setInterval(this.prevImg, 10000);

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
            /*this.indexCarousel++;
            if (this.indexCarousel > (this.carousel.length - 1)) {
                this.indexCarousel = 0 
            }*/
            
            this.indexCarousel2 = this.indexCarousel;
             if (this.indexCarousel < (this.carousel.length - 2)) {
                this.indexCarousel++;
                this.indexCarousel1++
            } else if (this.indexCarousel === (this.carousel.length - 2)) {
                this.indexCarousel++;
                this.indexCarousel1 = 0;
            } else if (this.indexCarousel === (this.carousel.length - 1)) {
                this.indexCarousel = 0;
                this.indexCarousel1 = (this.indexCarousel + 1);
            }
        },
        prevImg: function () {
            /*this.indexCarousel--;
             if (this.indexCarousel < 0) {
                this.indexCarousel = this.carousel.length - 1; */
             if (this.indexCarousel > 1) {
                this.indexCarousel--;
                this.indexCarousel1 = (this.indexCarousel + 1);
                this.indexCarousel2 = (this.indexCarousel - 1);
            } else if (this.indexCarousel === 1) {
                this.indexCarousel = 0;
                this.indexCarousel1 = 1;
                this.indexCarousel2 = (this.carousel.length - 1);
            } else if (this.indexCarousel === 0) {
                this.indexCarousel = (this.carousel.length - 1);
                this.indexCarousel1 = 0;
                this.indexCarousel2 = (this.indexCarousel - 1);
            }
        },
        clear(){
            clearInterval(this.interval)
        }
    },
})
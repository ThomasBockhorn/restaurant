<template>
    <nav
        class="navbar navbar-expand-lg fixed-top pt-5"
        :class="{
            'navbar-dark': navbarDark,
            'navbar-light': navbarLight,
            'background-color': backgroundColor,
            'box-shadow': boxShadow
        }"
    >
        <span id="title" class="navbar-brand mb-0 h1 ml-3">Hercule</span>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon ml-1"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-1">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{ name: 'home' }"
                        >Home
                        <span class="sr-only">(current)</span></router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'menu' }"
                        >Menu</router-link
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Reservation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Journal</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => {
        return {
            logo_source: "img/logo.jpg",
            width: "100px",
            height: "100px",

            //Y position
            yPosition: "null",

            //class toggle
            navbarLight: false,
            backgroundColor: false,
            navbarDark: true,

            //box-shadow toggle
            boxShadow: false
        };
    },
    methods: {
        changeBackground() {
            if (this.yPosition > 80) {
                this.navbarLight = true;
                this.navbarDark = false;
                this.backgroundColor = true;
                this.boxShadow = true;
            } else {
                this.navbarLight = false;
                this.navbarDark = true;
                this.backgroundColor = false;
                this.boxShadow = false;
            }
        }
    },
    created() {
        document.addEventListener("scroll", () => {
            this.yPosition = window.scrollY;
            this.changeBackground();
        });
    }
};
</script>

<style scoped>
.box-shadow {
    -webkit-box-shadow: -1px 2px 50px -25px #000000;
    box-shadow: -1px 2px 50px -25px #000000;
}

a {
    font-family: "Peddana", serif;
    font-size: 1.5rem;
    margin-right: 1em;
    text-transform: uppercase;
}

#title {
    font-family: "Poiret One", cursive;
    font-size: 2em;
}

.navbar-collapse .navbar-nav {
    padding-left: 1em;
}

.background-color {
    background-color: white !important;
    transition: background-color 250ms linear;
}

.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
}

@media screen and (max-width: 768px) {
    .navbar-collapse {
        background-color: white;
    }
    .navbar-collapse > ul > li > a {
        color: black !important;
    }
}
</style>

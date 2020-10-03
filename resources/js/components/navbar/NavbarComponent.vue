<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top mt-5 pt-5">
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
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-1">
                <li class="nav-item active">
                    <a class="nav-link" href="#"
                        >Home {{ scrollLocation }}
                        <span class="sr-only">(current)</span></a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Menu</a>
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

            //scroll position
            scrollLocation: null
        };
    },
    method: {
        //This will find the scroll position on the Y axis
        scrollPosition() {
            console.log("this works");
        }
    },
    created() {
        window.addEventListener("scroll", this.scrollPosition);
    },
    destroy() {
        window.removeEventListener("scroll", this.scrollPosition);
    }
};
</script>

<style scoped>
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

.navbar-background {
    background-color: white !important;
}

@media screen and (max-width: 768px) {
    .navbar-collapse {
        background-color: white;
    }
}
</style>

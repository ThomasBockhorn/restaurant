<template>
    <div>
        <header class="mt-3">
            <socialmedia-component></socialmedia-component>
            <navbar-component></navbar-component>
            <div class="headerImage pt-5 pb-5"></div>
            <div class="d-flex flex-column title text-center w-100 headerImage">
                <h1 class="pt-5">Hot Dishes</h1>
                <h2 class="pb-5">Try one of these savory, flavorful dishes</h2>
            </div>
            <div class="headerImage pt-5 pb-5"></div>
        </header>
        <section id="entree">
            <entree-component></entree-component>
        </section>

        <footer>
            <footer-component></footer-component>
        </footer>
    </div>
</template>

<script>
import navbar from "../navbar/NavbarComponent";
import footer from "../footer/FooterComponent";
import socialmedia from "../socialmedia/SocialMediaComponent";
import entreecomponent from "../menuComponents/entreeComponent/EntreeComponent";

export default {
    components: {
        "navbar-component": navbar,
        "footer-component": footer,
        "socialmedia-component": socialmedia,
        "entree-component": entreecomponent
    }
};
</script>

<style scoped>
header {
    height: 100%;
}

.headerImage {
    height: 100%;
    background-image: url("/img/bar-b-que.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.title {
    z-index: 9;
    color: white;
    text-align: center;
    padding-top: 8em;
    padding-bottom: 8em;
}

h1,
h2 {
    color: white;
    font-family: "Poiret One", cursive;
    font-size: 3em;
}
</style>

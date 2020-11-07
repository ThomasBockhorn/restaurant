<template>
    <div>
        <header class="m-3">
            <socialmedia-component></socialmedia-component>
            <navbar-component></navbar-component>
            <div class="headerImage d-flex flex-column">
                <img :src="imageHeader" :alt="imageHeader" />
                <div class="d-flex flex-column title text-center w-100">
                    <h1>Hot Dishes</h1>
                </div>
            </div>
        </header>

        <footer>
            <footer-component></footer-component>
        </footer>
    </div>
</template>

<script>
import navbar from "../navbar/NavbarComponent";
import footer from "../footer/FooterComponent";
import socialmedia from "../socialmedia/SocialMediaComponent";

export default {
    components: {
        "navbar-component": navbar,
        "footer-component": footer,
        "socialmedia-component": socialmedia
    },
    data: () => {
        return {
            imageHeader: "/img/alcohol.jpg"
        };
    }
};
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}

.headerImage {
    height: 40em;
}

.title {
    z-index: 9;
    color: white;
    text-align: center;
    position: absolute;
    margin-top: 15em;
}
</style>

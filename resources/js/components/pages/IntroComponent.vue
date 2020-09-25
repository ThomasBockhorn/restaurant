<template>
    <div class="d-flex m-3 justify-content-center" id="intro">
        <socialmedia-component></socialmedia-component>
        <navbar-component></navbar-component>
        <carousel-component></carousel-component>
        <header-component></header-component>
    </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import socialmediacomponent from "../socialmedia/SocialMediaComponent";
import carouselcomponent from "../carousel/CarouselComponent";
import headercomponent from "../header/HeaderComponent";

export default {
    components: {
        "navbar-component": navbarcomponent,
        "socialmedia-component": socialmediacomponent,
        "carousel-component": carouselcomponent,
        "header-component": headercomponent
    }
};
</script>

<style scoped>
#intro {
    position: relative;
}

#header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
</style>

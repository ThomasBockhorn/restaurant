<template>
    <div class="d-flex m-3">
        <socialmedia-component></socialmedia-component>
        <navbar-component></navbar-component>
        <carousel-component></carousel-component>
    </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import socialmediacomponent from "../socialmedia/SocialMediaComponent";
import carouselcomponent from "../carousel/CarouselComponent";

export default {
    components: {
        "navbar-component": navbarcomponent,
        "socialmedia-component": socialmediacomponent,
        "carousel-component": carouselcomponent
    }
};
</script>

<style></style>

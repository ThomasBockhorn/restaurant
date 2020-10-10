<template>
    <div class="m-3">
        <header>
            <socialmedia-component></socialmedia-component>
            <navbar-component></navbar-component>
            <div id="header">
                <header-component></header-component>
            </div>
            <carousel-component></carousel-component>
        </header>
        <section>
            <about-component></about-component>
        </section>
    </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import socialmediacomponent from "../socialmedia/SocialMediaComponent";
import carouselcomponent from "../carousel/CarouselComponent";
import headercomponent from "../header/HeaderComponent";
import aboutcomponent from "../about/AboutComponent";

export default {
    components: {
        "navbar-component": navbarcomponent,
        "socialmedia-component": socialmediacomponent,
        "carousel-component": carouselcomponent,
        "header-component": headercomponent,
        "about-component": aboutcomponent
    }
};
</script>

<style scoped>
#header {
    margin-left: 40%;
}
</style>

<template>
    <div>
        <header class="m-3">
            <socialmedia-component></socialmedia-component>
            <navbar-component></navbar-component>
            <div id="header">
                <header-component></header-component>
            </div>
            <carousel-component></carousel-component>
        </header>
        <section id="about" class="m-3">
            <about-component></about-component>
        </section>
        <section id="hours">
            <hours-component></hours-component>
        </section>
        <section id="aboutmenu" class="m-3">
            <aboutmenu-component></aboutmenu-component>
        </section>
    </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import socialmediacomponent from "../socialmedia/SocialMediaComponent";
import carouselcomponent from "../carousel/CarouselComponent";
import headercomponent from "../header/HeaderComponent";
import aboutcomponent from "../about/AboutComponent";
import hourscomponent from "../hours/HoursComponent";
import aboutmenucomponent from "../aboutMenu/AboutMenuComponent";

export default {
    components: {
        "navbar-component": navbarcomponent,
        "socialmedia-component": socialmediacomponent,
        "carousel-component": carouselcomponent,
        "header-component": headercomponent,
        "about-component": aboutcomponent,
        "hours-component": hourscomponent,
        "aboutmenu-component": aboutmenucomponent
    }
};
</script>

<style scoped>
#header {
    margin-left: 40%;
}
</style>

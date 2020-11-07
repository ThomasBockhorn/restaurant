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
        <section id="specials">
            <specialmenu-component></specialmenu-component>
        </section>
        <section id="team">
            <team-component></team-component>
        </section>
        <section id="reviews">
            <review-component></review-component>
        </section>
        <footer-component></footer-component>
    </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import socialmediacomponent from "../socialmedia/SocialMediaComponent";
import carouselcomponent from "../introComponents/carousel/CarouselComponent";
import headercomponent from "../introComponents/header/HeaderComponent";
import aboutcomponent from "../introComponents/about/AboutComponent";
import hourscomponent from "../introComponents/hours/HoursComponent";
import aboutmenucomponent from "../introComponents/aboutMenu/AboutMenuComponent";
import specialmenucomponent from "../introComponents/specialmenu/SpecialMenuComponent";
import teamcomponent from "../introComponents/team/TeamComponent";
import reviewcomponent from "../introComponents/reviews/ReviewComponent";
import footercomponent from "../footer/FooterComponent";

export default {
    components: {
        "navbar-component": navbarcomponent,
        "socialmedia-component": socialmediacomponent,
        "carousel-component": carouselcomponent,
        "header-component": headercomponent,
        "about-component": aboutcomponent,
        "hours-component": hourscomponent,
        "aboutmenu-component": aboutmenucomponent,
        "specialmenu-component": specialmenucomponent,
        "team-component": teamcomponent,
        "review-component": reviewcomponent,
        "footer-component": footercomponent
    }
};
</script>

<style scoped>
#header {
    margin-left: 40%;
}
</style>

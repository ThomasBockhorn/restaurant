<template>
  <div>
    <navbar-component></navbar-component>
    <movieheader-component></movieheader-component>
    <form-component></form-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import footercomponent from "../footer/FooterComponent";
import formcomponent from "../reservationComponents/formComponent/FormComponent";
import movieheadercomponent from "../reservationComponents/movieHeader/MovieHeaderComponent";

export default {
  components: {
    "navbar-component": navbarcomponent,
    "footer-component": footercomponent,
    "form-component": formcomponent,
    "movieheader-component": movieheadercomponent
  }
};
</script>

<style>
</style>
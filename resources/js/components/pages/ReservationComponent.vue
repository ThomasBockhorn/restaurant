<template>
  <div>
    <navbar-component></navbar-component>

    <footer-component></footer-component>
  </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import footercomponent from "../footer/FooterComponent";

export default {
  components: {
    "navbar-component": navbarcomponent,
    "footer-component": footercomponent
  }
};
</script>

<style>
</style>
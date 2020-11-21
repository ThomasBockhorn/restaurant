<template>
  <div>
    <navbar-component></navbar-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import navbar from "../navbar/NavbarComponent";
import footer from "../footer/FooterComponent";

export default {
  components: {
    "navbar-component": navbar,
    "footer-component": footer
  }
};
</script>

<style>
</style>
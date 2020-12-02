<template>
  <div>
    <header class="mt-3 w-100">
      <navbar-component></navbar-component>
      <header-component></header-component>
    </header>
    <section id="mainGallery" class="m-3">
      <maingallery-component></maingallery-component>
    </section>
    <section class="w-100">
      <footer-component></footer-component>
    </section>
  </div>
</template>

<script>
import navbar from "../navbar/NavbarComponent";
import footer from "../footer/FooterComponent";
import maingallery from "../galleryComponents/mainGallery/MainGalleryComponent";
import header from "../galleryComponents/header/HeaderComponent";

export default {
  components: {
    "navbar-component": navbar,
    "footer-component": footer,
    "maingallery-component": maingallery,
    "header-component": header
  }
};
</script>

<style scoped>
</style>
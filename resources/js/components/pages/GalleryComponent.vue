<template>
  <div>
    <header class="w-100 p-3">
      <navbar-component></navbar-component>
      <img class="w-100" :src="mainPhoto" :alt="mainPhoto" />
    </header>
    <section id="mainGallery">
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
import maingallery from "../galleryComponents/MainGalleryComponent";

export default {
  components: {
    "navbar-component": navbar,
    "footer-component": footer,
    "maingallery-component": maingallery
  },
  data() {
    return {
      mainPhoto: "/img/restaurantTable.jpg"
    };
  }
};
</script>

<style scoped>
img {
  filter: brightness(50%);
  height: 35em;
}
</style>
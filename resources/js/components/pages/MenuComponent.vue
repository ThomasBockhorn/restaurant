<template>
  <div>
    <header class="mt-3">
      <navbar-component></navbar-component>
      <div class="headerImage pt-5 pb-5 stopParallax"></div>
      <div class="d-flex flex-column title text-center w-100 headerImage">
        <h1 class="pt-5">Hot Dishes</h1>
        <h2 class="pb-5">Try one of these savory, flavorful dishes</h2>
      </div>
      <div class="headerImage pt-5 pb-5"></div>
    </header>
    <section id="entree">
      <entree-component></entree-component>
    </section>
    <div class="dessertImage pt-5 stopParallax"></div>
    <div class="dessertImage d-flex flex-column title text-center w-100">
      <h1 class="pt-2">Desserts</h1>
    </div>
    <section id="dessert">
      <dessert-component></dessert-component>
    </section>
    <div class="drinksImage pt-5 stopParallax"></div>
    <div class="drinksImage d-flex flex-column title text-center w-100">
      <h1 class="pt-2">Drinks</h1>
    </div>
    <section id="drinks">
      <drinks-component></drinks-component>
    </section>
    <footer>
      <footer-component></footer-component>
    </footer>
  </div>
</template>

<script>
import navbar from "../navbar/NavbarComponent";
import footer from "../footer/FooterComponent";
import entreecomponent from "../menuComponents/entreeComponent/EntreeComponent";
import dessertcomponent from "../menuComponents/dessertComponent/DessertComponent";
import drinkscomponent from "../menuComponents/drinksComponent/DrinksComponent";

export default {
  components: {
    "navbar-component": navbar,
    "footer-component": footer,
    "entree-component": entreecomponent,
    "dessert-component": dessertcomponent,
    "drinks-component": drinkscomponent
  }
};
</script>

<style scoped>
header {
  height: 100%;
}

.headerImage {
  height: 100%;
  background-image: url("/img/bar-b-que.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.dessertImage {
  background-image: url("/img/brownie.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.drinksImage {
  background-image: url("/img/wine.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.title {
  z-index: 9;
  color: white;
  text-align: center;
  padding-top: 8em;
  padding-bottom: 8em;
}

h1,
h2 {
  color: white;
  font-family: "Poiret One", cursive;
  font-size: 3em;
}

@media only screen and (max-width: 425px) {
  .headerImage,
  .dessertImage,
  .drinksImage {
    background-attachment: scroll;
  }
  .stopParallax {
    display: none;
  }
}
</style>

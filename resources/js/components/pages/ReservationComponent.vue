<template>
  <div>
    <navbar-component></navbar-component>
    <form-component></form-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import footercomponent from "../footer/FooterComponent";
import formcomponent from "../reservationComponents/formComponent/FormComponent";

export default {
  components: {
    "navbar-component": navbarcomponent,
    "footer-component": footercomponent,
    "form-component": formcomponent
  }
};
</script>

<style>
</style>
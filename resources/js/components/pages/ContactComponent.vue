<template>
  <div>
    <section id="header" class="mt-3">
      <navbar-component></navbar-component>
      <header-component></header-component>
    </section>
    <section id="contactInfo">
      <maincontact-component></maincontact-component>
    </section>
    <section id="footer">
      <footer-component></footer-component>
    </section>
  </div>
</template>

<script>
import navbarcomponent from "../navbar/NavbarComponent";
import footercomponent from "../footer/FooterComponent";
import maincontactcomponents from "../contactComponents/main/MainContactComponent";
import headercomponent from "../contactComponents/header/headerComponent";

export default {
  components: {
    "navbar-component": navbarcomponent,
    "footer-component": footercomponent,
    "maincontact-component": maincontactcomponents,
    "header-component": headercomponent
  }
};
</script>

<style>
</style>
<template>
  <div class="d-flex">
    <img class="w-100" :src="mainPhoto" :alt="mainPhoto" />
    <div class="header flex-column justify-content-center w-100">
      <h1 class="text-center">Contact</h1>
      <h2 class="text-center">Where to reach us</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainPhoto: "/img/cafe.jpg"
    };
  }
};
</script>

<style scoped>
img {
  filter: brightness(50%);
  height: 35em;
}
.header {
  z-index: 9;
  color: white;
  text-align: center;
  position: absolute;
  font-family: "Poiret One", cursive;
  margin-top: 15%;
}

@media screen and (max-width: 768px) {
  img {
    height: 20em;
  }
  .header {
    margin-top: 30%;
  }
}
</style>
<template>
  <div class="d-flex w-100">
    <img class="w-100" :src="mainPhoto" :alt="mainPhoto" />
    <div class="header flex-column justify-content-center w-100">
      <h1 class="text-center">Gallery</h1>
    </div>
  </div>
</template>

<script>
export default {
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
.header {
  z-index: 9;
  color: white;
  text-align: center;
  position: absolute;
  font-family: "Poiret One", cursive;
  margin-top: 15%;
}
</style>
<template>
  <div class="header d-flex flex-column justify-content-center">
    <h1>Welcome to Hercule</h1>
    <h3>A fine dining experience</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  z-index: 9;
  color: white;
  text-align: center;
  position: absolute;
  font-family: "Poiret One", cursive;
  margin-top: 20em;
}

@media screen and (max-width: 768px) {
  h1 {
    margin-top: -1em;
  }
  h3 {
    display: none;
  }
}

@media screen and (max-width: 425px) {
  h1,
  h3 {
    display: none;
  }
}
</style>

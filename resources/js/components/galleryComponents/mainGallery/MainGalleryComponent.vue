<template>
  <div class="container">
    <div class="row w-100 justify-content-around">
      <div class="col-md-6">
        <img :src="dishOne" :alt="dishOne" class="w-100" height="100%" />
      </div>
      <div class="col-md-3 d-flex flex-column">
        <img :src="dishTwo" :alt="dishTwo" class="w-100" height="50%" />
        <img :src="dishFour" :alt="dishFour" class="w-100" height="50%" />
      </div>
      <div class="col-md-3 d-flex flex-column">
        <img :src="dishThree" :alt="dishThree" class="w-100" height="50%" />
        <img :src="dishFive" :alt="dishFive" class="w-100" height="50%" />
      </div>
      <div class="col-md-3">
        <img :src="dishSix" :alt="dishSix" height="100%" width="100%" />
      </div>
      <div class="col-md-3">
        <img :src="dishSeven" :alt="dishSeven" height="100%" width="100%" />
      </div>
      <div class="col-md-3">
        <img :src="dishEight" :alt="dishEight" height="100%" width="100%" />
      </div>
      <div class="col-md-3">
        <img :src="dishNine" :alt="dishNine" height="100%" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishOne: "/img/chicken.jpg",
      dishTwo: "/img/bean-stew.jpg",
      dishThree: "/img/steak.jpg",
      dishFour: "/img/pie.jpg",
      dishFive: "/img/coffee.jpg",
      dishSix: "/img/Salmon.jpg",
      dishSeven: "/img/teriyaki-salmon.jpg",
      dishEight: "/img/alcohol.jpg",
      dishNine: "/img/brownie.jpg"
    };
  }
};
</script>

<style scoped>
img {
  padding: 1em;
}
</style>
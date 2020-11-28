<template>
  <div class="container">
    <div class="row w-100">
      <div class="col-md-6">
        <img :src="dishOne" :alt="dishOne" class="w-100 h-auto" />
      </div>
      <div class="col-md-3">
        <img :src="dishTwo" :alt="dishTwo" class="w-100 h-auto" />
      </div>
      <div class="col-md-3">
        <img :src="dishThree" :alt="dishThree" class="w-100 h-auto" />
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
      dishThree: "/img/steak.jpg"
    };
  }
};
</script>

<style>
</style>
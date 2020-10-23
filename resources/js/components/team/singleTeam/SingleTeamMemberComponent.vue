<template>
  <div class="m-2">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top rounded-circle" :src="chefOne" alt="chefOne" />
      <div class="card-body">
        <p
          class="card-text"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam ullam odio? Id quibusdam quisquam voluptate, fugiat, eveniet ea voluptas nobis, minima modi reprehenderit maiores ratione. Recusandae nesciunt quis magni!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      chefOne: "/img/cook1.jpg"
    };
  }
};
</script>

<style scoped>
.card {
  border: none;
}

.card-text {
  font-family: "Peddana", serif;
  font-size: 1.5rem;
}
</style>
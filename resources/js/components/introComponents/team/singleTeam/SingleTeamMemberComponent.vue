<template>
  <div class="container">
    <div class="card align-items-center">
      <img
        class="card-img-top rounded-circle mx-auto d-block"
        style="width: 10rem; height: 10rem;"
        :src="chefOne"
        alt="chefOne"
      />
      <div id="hiddenLink" class="card-img-overlay d-flex justify-content-center">
        <a href="#">More Info</a>
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">Patterson Bockhorn</h5>
        <p class="card-text">Master Chef</p>
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

#hiddenLink {
  width: 100%;
  height: 100%;
}

h5 {
  font-family: "Poiret One", cursive;
}

a {
  color: black;
  margin-top: 2em;
  font-size: 1.5em;
  font-family: "Poiret One", cursive;
  font-weight: 1.5em;
  text-decoration: none;
}

img {
  transition: all 0.3s ease-in-out;
  opacity: 1;
}

.card:hover img,
.card:focus img {
  transform: scale(1.02);
  opacity: 0.5;
}

.card:hover .card-img-overlay {
  color: #730d0d;
}

.card-img-overlay > a {
  visibility: hidden;
}

.card-img-overlay:hover a {
  visibility: visible;
}
</style>
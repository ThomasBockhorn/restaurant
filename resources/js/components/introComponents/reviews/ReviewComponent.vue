<template>
  <div id="wrapper" class="w-100">
    <div class="review stopParallax pt-5 pb-5"></div>
    <div
      id="entries"
      class="d-flex align-items-center flex-column reviewScroll review stopParallax pt-5 pb-5"
    >
      <h1>Reviews</h1>
      <h2>What people are saying</h2>
      <hr class="style-seven" />
      <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <singlereview-component></singlereview-component>
          </div>
          <div class="carousel-item">
            <singlereview-component></singlereview-component>
          </div>
          <div class="carousel-item">
            <singlereview-component></singlereview-component>
          </div>
        </div>
      </div>
    </div>
    <div class="review stopParallax pb-5"></div>
  </div>
</template>

<script>
import singlereview from "../reviews/singleReview/SingleReviewComponent";

export default {
  components: {
    "singlereview-component": singlereview
  }
};
</script>

<style scoped>
#wrapper {
  height: 100%;
}

.review {
  background-image: url("/img/coffee.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

h1,
h2 {
  color: white;
  font-family: "Poiret One", cursive;
  font-size: 2em;
}

@media only screen and (max-width: 425px) {
  .reviewScroll {
    background-attachment: scroll;
  }
  .stopParallax {
    display: none;
  }
  h1,
  h2 {
    font-size: 2em;
  }
}

/* Flaired edges, by Tomas Theunissen */

.style-seven {
  overflow: visible; /* For IE */
  height: 2em;
  width: 20em;
  border-style: solid;
  border-color: white;
  border-width: 1px 0 0 0;
  border-radius: 20px;
}
.style-seven:before {
  /* Not really supposed to work, but does */
  display: block;
  content: "";
  height: 30px;
  margin-top: -31px;
  border-style: solid;
  border-color: white;
  border-width: 0 0 1px 0;
  border-radius: 20px;
}
</style>

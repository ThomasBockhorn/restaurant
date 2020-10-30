<template>
  <div id="wrapper" class="w-100">
    <div class="specialMenu stopParallax"></div>
    <div class="d-flex align-items-center flex-column w-100 specialMenu">
      <div class="menuItem">
        <div id="header" class="d-flex align-items-center flex-column w-100 mt-3 mb-3">
          <h1>Specials for Today</h1>
          <h2>Try one of these delectable dishes</h2>
          <hr class="style-seven" />
        </div>
        <h3>Monday</h3>
        <h4>
          Roasted Salmon with Hollandaise sauce
          <span></span>$34
        </h4>
        <br />
        <h3>Tuesday</h3>
        <h4>
          Swordfish au poivre
          <span></span>$56
        </h4>
        <br />
        <h3>Wednesday</h3>
        <h4>
          Tuna tartare
          <span></span>$45
        </h4>
        <br />
        <h3>Thursday</h3>
        <h4>
          Königsberger klopse
          <span></span>$36
        </h4>
        <br />
        <h3>Friday</h3>
        <h4>
          Maultaschen
          <span></span>$26
        </h4>
        <br />
        <h3>Saturday</h3>
        <h4>
          Onion tart
          <span></span>$13
        </h4>
        <br />
        <h3>Sunday</h3>
        <h4>
          Steak au poivre with crisp potatoes
          <span></span>$50
        </h4>
      </div>
    </div>
    <div class="specialMenu stopParallax"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#wrapper {
  height: 100%;
}

.specialMenu {
  background-image: url("/img/drink.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

h1,
h2,
.menuItem {
  color: white;
  font-family: "Poiret One", cursive;
}

span::after {
  content: "..........";
}

@media only screen and (max-width: 425px) {
  .specialMenu {
    background-attachment: scroll;
  }
  .stopParallax {
    display: none;
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: 1em;
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

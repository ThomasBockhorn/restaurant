<template>
  <div class="d-flex flex-column pt-5">
    <div class="d-flex justify-content-center w-100">
      <hr class="style-seven" />
    </div>
    <div class="d-flex align-content-center container">
      <div class="row justify-content-center">
        <!--individual drinks--->
        <div class="col-md-6 w-40">
          <div id="drinks" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Martini</h3>
              <p>A James Bond favorite that is shaken, not stirred.</p>
            </div>
            <h3 class="ml-auto">$13</h3>
          </div>
        </div>
        <!--individual drinks--->
        <div class="col-md-6 w-40">
          <div id="drinks" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Old Fashioned</h3>
              <p>Made with a sugar lump, water, an ice cube, bitters, whiskey</p>
            </div>
            <h3 class="ml-auto">$18</h3>
          </div>
        </div>
        <!--individual drinks--->
        <div class="col-md-6">
          <div id="drinks" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Moscow Mule</h3>
              <p>Vodka, ginger beer, lime juice</p>
            </div>
            <h3 class="ml-auto">$13</h3>
          </div>
        </div>
        <!--individual drinks--->
        <div class="col-md-6">
          <div id="drinks" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Dark & Stormy</h3>
              <p>Take Moscow Mule and swap the vodka for rum</p>
            </div>
            <h3 class="ml-auto">$13</h3>
          </div>
        </div>
        <!--individual drinks--->
        <div class="col-md-6">
          <div id="drinks" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Bellini</h3>
              <p>Peach puree and Prosecco</p>
            </div>
            <h3 class="ml-auto">$12</h3>
          </div>
        </div>
        <!--individual drinks--->
        <div class="col-md-6">
          <div id="drinks" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Gin and Tonic</h3>
              <p>Gin, tonic water, ice</p>
            </div>
            <h3 class="ml-auto">$11</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3,
p {
  font-family: "Peddana", serif;
}

/* Flaired edges, by Tomas Theunissen */

.style-seven {
  overflow: visible; /* For IE */
  height: 2em;
  width: 20em;
  border-style: solid;
  border-color: black;
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
  border-color: black;
  border-width: 0 0 1px 0;
  border-radius: 20px;
}
</style>
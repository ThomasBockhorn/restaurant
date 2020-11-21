<template>
  <div class="d-flex flex-column pt-5">
    <div class="d-flex justify-content-center w-100">
      <hr class="style-seven" />
    </div>
    <div class="d-flex align-content-center container">
      <div class="row justify-content-center">
        <!--individual dessert--->
        <div class="col-md-6 w-40">
          <div id="dessert" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Beignets and Berries</h3>
              <p>Beignets with handpicked fresh berries</p>
            </div>
            <h3 class="ml-auto">$36</h3>
          </div>
        </div>
        <!--individual dessert--->
        <div class="col-md-6 w-40">
          <div id="dessert" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Double Nut Baklava</h3>
              <p>Baklava with coconuts, pecans, and macadamia nuts</p>
            </div>
            <h3 class="ml-auto">$10</h3>
          </div>
        </div>
        <!--individual dessert--->
        <div class="col-md-6">
          <div id="dessert" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Blueberry Lemon Trifle</h3>
              <p>Refreshing Lemon filling with blueberries</p>
            </div>
            <h3 class="ml-auto">$15</h3>
          </div>
        </div>
        <!--individual dessert--->
        <div class="col-md-6">
          <div id="entree" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Chocolate-Topped Strawberry Cheesecake</h3>
              <p>Mix of smooth strawberry cheesecake and crumbly chocolate crust</p>
            </div>
            <h3 class="ml-auto">$16</h3>
          </div>
        </div>
        <!--individual dessert--->
        <div class="col-md-6">
          <div id="dessert" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Blueberry Lattice Bars</h3>
              <p>Handpicked plump blueberries are the centerpiece of this dessert</p>
            </div>
            <h3 class="ml-auto">$10</h3>
          </div>
        </div>
        <!--individual dessert--->
        <div class="col-md-6">
          <div id="dessert" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Old-fashion Banana Cream Pie</h3>
              <p>Old-fashion and home maded Banana pudding makes the pie</p>
            </div>
            <h3 class="ml-auto">$16</h3>
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
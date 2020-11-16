<template>
  <div class="d-flex flex-column pt-5">
    <div class="d-flex justify-content-center w-100">
      <hr class="style-seven" />
    </div>
    <div class="d-flex align-content-center container">
      <div class="row justify-content-center">
        <!--individual entree--->
        <div class="col-md-6 w-40">
          <div id="entree" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Ribeye Steak</h3>
              <p>Char Grilled Juicy Steak with Garlic Butter</p>
            </div>
            <h3 class="ml-auto">$130</h3>
          </div>
        </div>
        <!--individual entree--->
        <div class="col-md-6 w-40">
          <div id="entree" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Salmon Steak with Hollandaise Sauce</h3>
              <p>Grilled Salmon with a Hollandaise Sauce</p>
            </div>
            <h3 class="ml-auto">$180</h3>
          </div>
        </div>
        <!--individual entree--->
        <div class="col-md-6">
          <div id="entree" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Vegatable Fritata</h3>
              <p>Fresh vegatables with mushrooms</p>
            </div>
            <h3 class="ml-auto">$90</h3>
          </div>
        </div>
        <!--individual entree--->
        <div class="col-md-6">
          <div id="entree" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Ribeye Steak</h3>
              <p>Char Grilled Juicy Steak with Garlic Butter</p>
            </div>
            <h3 class="ml-auto">$130</h3>
          </div>
        </div>
        <!--individual entree--->
        <div class="col-md-6">
          <div id="entree" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Ribeye Steak</h3>
              <p>Char Grilled Juicy Steak with Garlic Butter</p>
            </div>
            <h3 class="ml-auto">$130</h3>
          </div>
        </div>
        <!--individual entree--->
        <div class="col-md-6">
          <div id="entree" class="d-flex flex-row justify-content-around">
            <div class="d-flex flex-column">
              <h3>Ribeye Steak</h3>
              <p>Char Grilled Juicy Steak with Garlic Butter</p>
            </div>
            <h3 class="ml-auto">$130</h3>
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

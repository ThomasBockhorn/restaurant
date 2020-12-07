<template>
  <div class="d-flex flex-column align-content-center">
    <div class="text-center w-100 mt-5">
      <h1>Reservation Form</h1>
      <h2>Come join us for lunch or dinner!</h2>
      <hr class="style-seven mt-5" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Book a Table</h3>
          <form action="post" method="post">
            <div class="form-group d-flex flex-column">
              <input type="date" name="date" id="date" />
              <small class="form-text text-muted">Date of the reservation</small>
              <input type="time" name="time" id="time" />
              <small class="form-text text-muted">Time of the reservation</small>
              <input type="text" name="location" id="location" />
              <small class="form-text text-muted">Which restaurant location</small>
              <input type="number" name="number" id="number" />
              <small class="form-text text-muted">Number of people in the party</small>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <h3>Contact Details</h3>
          <form action method="post">
            <div class="form-group d-flex flex-column">
              <input type="text" name="name" id="name" />
              <small class="form-text text-muted">Name of the party</small>
              <input type="email" name="email" id="email" />
              <small class="form-text text-muted">Email</small>
              <input type="tel" name="tel" id="tel" />
              <small class="form-text text-muted">Phone Number</small>
              <input type="text" name="text" id="text" />
              <small class="form-text text-muted">Message</small>
            </div>
          </form>
        </div>
        <div class="d-flex col-12 justify-content-center mt-5 mb-5">
          <button class="btn btn-outline-dark">Make a Reservation</button>
        </div>
      </div>
    </div>
    <hours-component></hours-component>
  </div>
</template>

<script>
import hourscomponent from "../../introComponents/hours/HoursComponent";
export default {
  components: {
    "hours-component": hourscomponent
  }
};
</script>

<style scoped>
h1,
h2,
h3,
button {
  font-family: "Poiret One", cursive;
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
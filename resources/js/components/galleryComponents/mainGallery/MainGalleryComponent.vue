<template>
  <section>
    <div class="container">
      <div class="row w-100 justify-content-around">
        <div class="col-md-6">
          <img
            :src="dishOne"
            :alt="dishOne"
            class="w-100"
            height="100%"
            @click="modal(dishOne, $event)"
          />
        </div>
        <div class="col-md-3 d-flex flex-column">
          <img
            :src="dishTwo"
            :alt="dishTwo"
            class="w-100"
            height="50%"
            @click="modal(dishTwo, $event)"
          />
          <img
            :src="dishFour"
            :alt="dishFour"
            class="w-100"
            height="50%"
            @click="modal(dishFour, $event)"
          />
        </div>
        <div class="col-md-3 d-flex flex-column">
          <img
            :src="dishThree"
            :alt="dishThree"
            class="w-100"
            height="50%"
            @click="modal(dishThree, $event)"
          />
          <img
            :src="dishFive"
            :alt="dishFive"
            class="w-100"
            height="50%"
            @click="modal(dishFive, $event)"
          />
        </div>
        <div class="col-md-3">
          <img
            :src="dishSix"
            :alt="dishSix"
            height="100%"
            width="100%"
            @click="modal(dishSix, $event)"
          />
        </div>
        <div class="col-md-3">
          <img
            :src="dishSeven"
            :alt="dishSeven"
            height="100%"
            width="100%"
            @click="modal(dishSeven, $event)"
          />
        </div>
        <div class="col-md-3">
          <img
            :src="dishEight"
            :alt="dishEight"
            height="100%"
            width="100%"
            @click="modal(dishEight, $event)"
          />
        </div>
        <div class="col-md-3">
          <img
            :src="dishNine"
            :alt="dishNine"
            height="100%"
            width="100%"
            @click="modal(dishNine, $event)"
          />
        </div>
      </div>
    </div>

    <!--image Modal-->
    <div id="modal" class="modal">
      <span @click="abort($event)" class="close">&times;</span>
      <img class="modal-content" id="modalImage" />
    </div>
  </section>
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
  },
  methods: {
    modal(dishOne, imgID) {
      //Gets the modal and modal Image
      var modal = document.getElementById("modal");
      var modalImage = document.getElementById("modalImage");

      //display modal
      modal.style.display = "block";
      modalImage.src = imgID.srcElement.src;
    },
    abort(event) {
      console.log("this works!!");

      //event.srcElement.style.display = "none";
    }
  }
};
</script>

<style scoped>
img {
  padding: 1em;
  cursor: pointer;
  transition: 0.3s;
}

img:hover {
  opacity: 0.7;
}

/**styling for modal */
.modal {
  display: none;
  position: fixed;
  z-index: 999;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.modal-content {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>
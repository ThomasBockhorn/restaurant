<template>
    <div id="about" class="d-flex justify-content-center mt-5">
        <div class="d-inline text ml-5 mt-5 d-flex flex-column">
            <div class="mt-5 d-flex flex-column align-items-center">
                <h1>Discover</h1>
                <h2>Our Story</h2>
                <hr class="style-seven" />
            </div>
            <p class="mt-5 ml-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quasi ratione dolorem voluptatibus, ea perspiciatis tempora
                aliquid voluptate fugit suscipit doloribus incidunt quos
                doloremque at vel? Cupiditate aperiam excepturi quidem.
            </p>
        </div>
        <div class="d-inline image mr-5 mt-5">
            <img class="mt-5" :src="imageOne" :alt="imageOne" width="100%" />
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            imageOne: "img/teriyaki-salmon.jpg"
        };
    }
};
</script>

<style scoped>
.image,
.text {
    width: 50%;
    height: 100%;
}

h1,
h2 {
    font-family: "Poiret One", cursive;
}

h1 {
    font-size: 7em;
}

p {
    font-family: "Peddana", serif;
    font-size: 1.5em;
}

/* Flaired edges, by Tomas Theunissen */

.style-seven {
    overflow: visible; /* For IE */
    height: 30px;
    width: 25em;
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

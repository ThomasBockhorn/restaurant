<template>
    <div id="about" class="d-flex flex-md-row flex-column-reverse mt-5">
        <div class="text d-flex flex-column w-100">
            <div class=" d-flex flex-column align-items-center w-100">
                <h1>Discover</h1>
                <h2>Our Story</h2>
                <hr class="style-seven" />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                quasi ratione dolorem voluptatibus, ea perspiciatis tempora
                aliquid voluptate fugit suscipit doloribus incidunt quos
                doloremque at vel? Cupiditate aperiam excepturi quidem.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Delectus, omnis debitis odio, magni cum aut voluptate
                perferendis dicta sed corporis libero, quasi nemo dolores
                suscipit. Sunt perspiciatis ad dolorem voluptatibus!
            </p>
        </div>
        <div class="image m-2">
            <img :src="imageOne" :alt="imageOne" width="100%" />
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
h1,
h2 {
    font-family: "Poiret One", cursive;
}

p {
    font-family: "Peddana", serif;
    font-size: 1.5em;
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

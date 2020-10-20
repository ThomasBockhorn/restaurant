<template>
    <div class="d-flex flex-md-row flex-column mt-5">
        <div class="m-2">
            <img
                :src="aboutmenuimage"
                :alt="aboutmenuimage"
                width="100%"
                height="60%"
            />
        </div>
        <div class="d-flex flex-column w-100 m-2">
            <div class="d-flex align-items-center flex-column w-100 mb-5">
                <h1>About Our Menu</h1>
                <h2>Our Cuisine Philosophy</h2>
                <hr class="style-seven" />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                corporis explicabo qui iure ab, dolorem tenetur ullam cumque.
                Officiis modi non exercitationem minima nihil. Voluptatum,
                aspernatur. Provident nisi fuga excepturi?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                maxime, officia vel dolorum perspiciatis porro illo repudiandae
                necessitatibus corrupti aut facere provident quod odio fugiat,
                ipsum sit fugit accusantium culpa!
            </p>
            <p>To see our great menu, <a href="#">click here</a></p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            aboutmenuimage: "/img/steak.jpg"
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

<template>
    <div id="team">
        <div
            class="d-flex flex-column justify-content-center align-items-center pt-5"
        >
            <h1>Our Team</h1>
            <h2>Our High-Class Professional Service</h2>
            <hr class="style-seven" />
        </div>
        <div class="d-flex flex-column align-items-center mt-2 pt-2">
            <p class="intro ml-2">
                Our top-quality chefs are here to delight and serve you. Our
                food is second to none.
            </p>
        </div>
        <div
            class="d-flex flex-column flex-lg-row justify-content-around align-items-center justify-content-between w-100 h-100 mt-5"
        >
            <singleteam-component></singleteam-component>
            <singleteam-component></singleteam-component>
            <singleteam-component></singleteam-component>
            <singleteam-component></singleteam-component>
        </div>
    </div>
</template>

<script>
import singleteamcomponent from "../team/singleTeam/SingleTeamMemberComponent";

export default {
    components: {
        "singleteam-component": singleteamcomponent
    }
};
</script>

<style scoped>
h1,
h2 {
    font-family: "Poiret One", cursive;
}

.intro {
    font-family: "Peddana", serif;
    font-size: 1.5em;
}

#team {
    background-color: white;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 3em;
    }
    h2,
    .intro {
        font-size: 1.5em;
    }
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

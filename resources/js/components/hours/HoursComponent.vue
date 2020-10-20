<template>
    <div id="player" class="mt-5 d-flex">
        <video loop playsinline autoplay muted>
            <source :src="movie" type="video/mp4" />
        </video>
        <div id="header" class="d-flex flex-column align-items-center">
            <h1>Hours</h1>
            <h2>Call for Reservations</h2>
            <hr class="style-seven" />
            <div class="d-flex">
                <div class="d-flex flex-column align-items-center">
                    <h3>Sunday to Tuesday</h3>
                    <h4>8 am to 9 pm</h4>
                </div>
                <div class="d-flex flex-column align-items-center">
                    <h3>Wednesday to Saturday</h3>
                    <h4>7 am to 9 pm</h4>
                </div>
            </div>
            <h3 id="phone">256.679.8939</h3>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            movie: "/mov/Restaurant.mp4"
        };
    }
};
</script>

<style scoped>
#header {
    width: 100%;
    height: 100%;
    margin-top: 5em;
}

#player {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

#header {
    position: absolute;
}

video {
    outline: none;
    filter: brightness(50%);
    width: 100%;
    height: 80vh;
    object-fit: cover;
}

h1,
h2,
h3,
h4 {
    color: white;
    font-family: "Poiret One", cursive;
    z-index: 9;
}

h3 {
    margin: 1em;
}

#phone {
    letter-spacing: 0.5em;
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
    z-index: 9;
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

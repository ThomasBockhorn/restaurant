<template>
    <div id="player" class="mt-5 d-flex">
        <video loop playsinline autoplay muted>
            <source src="/mov/Restaurant.mp4" type="video/mp4" />
        </video>
        <div id="header" class="d-flex flex-column align-items-center">
            <h1>Hours</h1>
            <h2>Call for Reservations</h2>
        </div>
    </div>
</template>

<script>
export default {};
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
h2 {
    color: white;
    font-family: "Poiret One", cursive;
    z-index: 9;
}
</style>

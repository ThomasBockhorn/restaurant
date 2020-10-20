<template>
    <div id="wrapper" class="w-100">
        <div class="specialMenu"></div>
        <div class="d-flex justify-content-center specialMenu">
            <h1 id="text">Specials for Today</h1>
        </div>
        <div class="specialMenu"></div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#wrapper {
    height: 100vh;
}

.specialMenu {
    background-image: url("/img/drink.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

h1 {
    color: white;
    font-family: "Poiret One", cursive;
    margin-top: 3em;
    z-index: 9;
}
</style>

<template>
    <h1>Welcome to Hercule!!</h1>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
    z-index: 9;
    color: white;
    text-align: center;
    position: absolute;
    margin-left: -50px;
    margin-top: 9em;
    font-family: "Poiret One", cursive;
}

@media screen and (max-width: 768px) {
    h1 {
        display: none;
    }
}
</style>

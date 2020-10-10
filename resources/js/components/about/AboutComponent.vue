<template>
    <div id="about" class="d-flex justify-content-center mt-5">
        <div class="d-inline text ml-5 mt-5">
            <h3 class="mt-5">Discover</h3>
            <p>
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
</style>

<template>
    <div id="carousel" class="carousel slide ml-1" data-ride="carousel">
        <div class="carousel-inner" height="100%">
            <div class="carousel-item active">
                <img
                    :src="imageOne"
                    class="d-block w-100 img-fluid"
                    :alt="imageOne"
                />
            </div>
            <div class="carousel-item">
                <img
                    :src="imageTwo"
                    class="d-block w-100 img-fluid"
                    :alt="imageTwo"
                />
            </div>
            <div class="carousel-item">
                <img
                    :src="imageThree"
                    class="d-block w-100 img-fluid"
                    :alt="imageThree"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            imageOne: "/img/salmon.jpg",
            imageTwo: "/img/restaurant.jpg",
            imageThree: "/img/red-wine.jpg"
        };
    }
};
</script>

<style scoped>
img {
    filter: brightness(50%);
    height: auto;
}
</style>

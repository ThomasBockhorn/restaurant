<template>
    <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img :src="salmon" class="d-block w-100" :alt="salmon" />
            </div>
            <div class="carousel-item">
                <img
                    :src="restaurant"
                    class="d-block w-100"
                    :alt="restaurant"
                />
            </div>
            <div class="carousel-item">
                <img :src="barbecue" class="d-block w-100" :alt="barbecue" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            salmon: "/img/salmon.jpg",
            restaurant: "/img/restaurant.jpg",
            barbecue: "/img/barbecue.jpg"
        };
    }
};
</script>

<style scoped>
img {
    filter: brightness(50%);
}
</style>

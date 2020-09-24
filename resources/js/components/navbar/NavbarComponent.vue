<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top mt-4 ">
        <img
            class="navbar-brand"
            width="120"
            height="40"
            :src="logo_source"
            alt=""
            loading="lazy"
        />
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#"
                        >Home <span class="sr-only">(current)</span></a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Reservation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Journal</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data: () => {
        return {
            logo_source: "/img/White logo - text background.png"
        };
    }
};
</script>

<style></style>

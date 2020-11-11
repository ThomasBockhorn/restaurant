<template>
    <div>
        <div
            id="footer"
            class="d-flex justify-content-center justify-content-around pt-5 w-100"
        >
            <div class="pt-5">
                <h1 class="text-center">Find Us</h1>
                <div
                    class="d-flex mt-5 justify-content-center justify-content-around"
                >
                    <a href="#">
                        <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="#">
                        <i class="fab fa-instagram-square fa-2x"></i>
                    </a>
                </div>
            </div>
            <div class="pt-5">
                <h1 class="text-center">Newsletter</h1>
                <div
                    class="d-flex mt-5 justify-content-center justify-content-around"
                >
                    <form action="" method="post">
                        <input type="text" value="Your email address" />
                        <button class="btn btn-outline-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div class="pt-5">
                <h1 class="text-center">Location</h1>
                <div
                    id="address"
                    class="d-flex mt-5 justify-content-center flex-column"
                >
                    <p class="text-center">1456 Shallow River Road</p>
                    <p class="text-center">Elba, Alabama 34565</p>
                </div>
            </div>
        </div>
        <div
            id="copywrite"
            class="d-flex justify-content-center flex-column pt-5 w-100"
        >
            <hr class="style-seven" />
            <p class="text-center">&copy; 2020 All Rights Reserved</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
    background-color: black;
}

h1,
i {
    font-family: "Poiret One", cursive;
    color: white;
}

#address {
    color: white;
}

#copywrite {
    background-color: #3b3b3a;
    color: white;
    height: 15em;
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

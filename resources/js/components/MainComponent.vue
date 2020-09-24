<template>
    <div>
        <socialmedia-component></socialmedia-component>
        <navbar-component></navbar-component>
    </div>
</template>

<script>
import navbarcomponent from "./navbar/NavbarComponent";
import socialmediacomponent from "./socialmedia/SocialMediaComponent";

export default {
    components: {
        "navbar-component": navbarcomponent,
        "socialmedia-component": socialmediacomponent
    }
};
</script>

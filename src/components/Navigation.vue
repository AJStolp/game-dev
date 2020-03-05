<template>
    <div>
        <b-navbar toggleable="md" type="light" variant="danger">
            <b-container>
            <router-link to="/">Game Dev</router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <router-link class="nav-item nav-link text-left" to="/about"><font-awesome-icon icon="cog"></font-awesome-icon> About</router-link>
                        <router-link class="nav-item nav-link text-left" to="/login"><font-awesome-icon icon="trash"></font-awesome-icon> Login</router-link>
                        <router-link class="nav-item nav-link text-left" to="/register"><font-awesome-icon icon="link"></font-awesome-icon> Register</router-link>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    name: "navigation",
    components: {
        FontAwesomeIcon
    }
};
</script>
<style lang="scss">

</style>
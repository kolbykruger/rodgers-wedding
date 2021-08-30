<template>
    <div class="mobile-navigation" :class="{ 'mobile-navigation-open': status }">
        <ul>
            <li><nuxt-link to="/venue">Venue</nuxt-link></li>
            <li><nuxt-link to="/accomodations">Accomodations</nuxt-link></li>
            <li><nuxt-link to="/itinerary">Itinerary</nuxt-link></li>
            <li><nuxt-link to="/registry">Registry</nuxt-link></li>
            <li><nuxt-link to="/qa">Q/A</nuxt-link></li>
            <li><nuxt-link to="/things-to-do">Things to do</nuxt-link></li>
            <li><nuxt-link to="/message-from-us">Message from us</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        status() {
            return this.$store.state.navigation.mobileNavigationStatus
        }
    },
    mounted() {
        console.log(this.$store.state.navigation.mobileNavigationStatus)
    },
    watch: {
        '$store.state.navigation.mobileNavigationStatus': function() {
            //console.log(this.$store.state.navigation.mobileNavigationStatus);
        },
        $route() {
            this.$store.commit('navigation/set', false)
            //console.log("route changed", this.$route);
        }
    }
}
</script>

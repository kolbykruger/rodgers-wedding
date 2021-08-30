<template>
    <div>
        <nav class="nav">
            <div class="container">
                <div class="group">
                    <ul class="top">
                        <li><nuxt-link to="/venue">Venue</nuxt-link></li>
                        <li><nuxt-link to="/accomodations">Accomodations</nuxt-link></li>
                        <li><nuxt-link to="/itinerary">Itinerary</nuxt-link></li>
                    </ul>
                    <div class="logo">
                        <nuxt-link to="/">
                            <span>Jess</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                class="svg-inline--fa fa-heart fa-w-16"
                                role="img"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                                />
                            </svg>
                            <span>Regina</span>
                        </nuxt-link>
                    </div>
                    <ul class="top">
                        <li><nuxt-link to="/registry">Registry</nuxt-link></li>
                        <li><nuxt-link to="/qa">Q/A</nuxt-link></li>
                        <li><nuxt-link to="/things-to-do">Things to do</nuxt-link></li>
                        <li><nuxt-link to="/message-from-us">Message from us</nuxt-link></li>
                    </ul>
                </div>
                <div class="mobile-navicon">
                    <div class="logo">
                        <nuxt-link to="/">
                            <span>Jess</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="heart"
                                class="svg-inline--fa fa-heart fa-w-16"
                                role="img"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                                />
                            </svg>
                            <span>Regina</span>
                        </nuxt-link>
                    </div>
                    <button class="navicon" @click="toggleNavigation">
                        <svg
                            v-if="!status"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.25011 7C3.25011 6.58579 3.5859 6.25 4.00011 6.25H20.0001C20.4143 6.25 20.7501 6.58579 20.7501 7C20.7501 7.41421 20.4143 7.75 20.0001 7.75H4.00011C3.5859 7.75 3.25011 7.41421 3.25011 7ZM3.25011 12C3.25011 11.5858 3.5859 11.25 4.00011 11.25L20.0001 11.25C20.4143 11.25 20.7501 11.5858 20.7501 12C20.7501 12.4142 20.4143 12.75 20.0001 12.75L4.00011 12.75C3.5859 12.75 3.25011 12.4142 3.25011 12ZM4.00011 16.25C3.5859 16.25 3.25011 16.5858 3.25011 17C3.25011 17.4142 3.5859 17.75 4.00011 17.75H20.0001C20.4143 17.75 20.7501 17.4142 20.7501 17C20.7501 16.5858 20.4143 16.25 20.0001 16.25H4.00011Z"
                                fill="#22282F"
                            />
                        </svg>
                        <svg
                            v-if="status"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L12 10.9393L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L13.0607 12L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L12 13.0607L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L10.9393 12L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
                                fill="#22282F"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <MobileNavigation />
    </div>
</template>

<script>
export default {
    computed: {
        status() {
            return this.$store.state.navigation.mobileNavigationStatus
        }
    },
    methods: {
        toggleNavigation() {
            this.$store.commit('navigation/toggle')
        }
    }
}
</script>

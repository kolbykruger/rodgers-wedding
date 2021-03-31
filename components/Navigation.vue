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
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="bars"
              class="svg-inline--fa fa-bars fa-w-14"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
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
  methods: {
    toggleNavigation() {
      this.$store.commit("navigation/toggle");
    }
  }
};
</script>

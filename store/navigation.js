export const state = () => ({
  mobileNavigationStatus: false
});

export const mutations = {
  toggle(state) {
    state.mobileNavigationStatus = !state.mobileNavigationStatus;
  },
  set(state, value) {
    state.mobileNavigationStatus = value;
  }
};

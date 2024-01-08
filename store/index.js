export const state = () => ({
  windowWidth: null,
});

export const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
};

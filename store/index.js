export const state = () => ({
  step: 1,
  type: "",
  reason: "",
  eft: {},
})

export const getters = {
  selectStep: (state) => state.step,
  selectType: (state) => state.type,
  selectReason: (state) => state.reason,
  selectEft: (state) => state.eft,
}

export const mutations = {
  nextPage(state) {
    state.step++
  },

  setType(state, action) {
    state.type = action;
  },

  setReason(state, action) {
    state.reason = action;
  },

  setEft(state, action) {
    state.eft = action;
  }
}
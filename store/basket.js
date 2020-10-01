export const state = () => ({
  basket: [],
  show: false,
  // productIdInBasket: [],
});
export const mutations = {
  showChange(state) {
    state.show = !state.show;
  },
  add(state, payload) {
    state.basket.push(payload);
  },

  delete(state, payload) {
    state.basket.splice(state.basket.indexOf(payload), 1);
  },
  deleteBasket(state) {
    state.basket = [];
  },

  decrement(state, payload) {
    const item = state.basket.find(el => el.id == payload);
    if (item) {
      --item.count;
      if (item.count == 0) {
        const indexOfPayload = state.basket.map(el => el.id).indexOf(payload);
        state.basket.splice(indexOfPayload, 1);
      }
    }
  },

  increment(state, payload) {
    const item = state.basket.find(el => el.id == payload);
    if (item) ++item.count;
  }
};

export const getters = {
  allCount(state) {
    return state.basket
      .map(el => el.count)
      .reduce(function(sum, current) {
        return sum + current;
      }, 0);
  }
};

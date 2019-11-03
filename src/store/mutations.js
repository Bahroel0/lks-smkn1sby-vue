import types from "./mutation-types";
export default {
  [types.SET_USER_STATE]: (state, payload) => {
    state.user = payload;
  },
  [types.SET_PRODUCT_STATE]: (state, payload) => {
    state.product = payload;
  },
  [types.ADD_PRODUCT_STATE]: (state, payload) => {
    state.products.push(payload);
  },
  [types.UPDATE_PRODUCT_STATE]: (state, payload) => {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id == payload.id) {
        state.products[i].name = payload.name;
        state.products[i].description = payload.description;
        state.products[i].price = payload.price;
      }
    }
  },
  [types.DELETE_PRODUCT_STATE]: (state, payload) => {
    let index;
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id == payload) {
        index = i;
      }
    }
    console.log(payload);
    state.products.splice(index, 1);
  }
};

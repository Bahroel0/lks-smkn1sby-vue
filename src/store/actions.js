import types from "./mutation-types";
import Cookie from "js-cookie";

export default {
  setUser({ commit }, payload) {
    commit(types.SET_USER_STATE, payload);
  },
  login({ commit }, payload) {
    commit(types.SET_USER_STATE, payload);
    Cookie.set("user", JSON.stringify(payload));
    return true;
  },
  logout({ commit }) {
    commit(types.SET_USER_STATE, null);
    Cookie.remove("user");
  },
  setProduct({ commit }, payload) {
    commit(types.SET_PRODUCT_STATE, payload);
  },
  addProduct({ commit, state }, payload) {
    let id = state.products.length + 1;
    commit(types.ADD_PRODUCT_STATE, { ...payload, id: id });
  },
  updateProduct({ commit }, payload) {
    commit(types.UPDATE_PRODUCT_STATE, payload);
  },
  deleteProduct({ commit }, payload) {
    commit(types.DELETE_PRODUCT_STATE, payload);
  }
};

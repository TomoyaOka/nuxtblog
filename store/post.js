export const state = () => ({
  total: []
});

export const mutations = {
  add(state, data) {
    state.total = data; //actionsで受け取ったデータをstateのtotalに渡す
  }
};

export const actions = {
  getList({ commit }, all) {
    commit("add", all); //mutation内 関数addにcommit
  }
};

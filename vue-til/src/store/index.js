import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//vuex의 인스턴스를 export
export default new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
});

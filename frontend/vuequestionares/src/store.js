import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    jobRegistration: []
  },
  getters: {
    isUserLoggedIn(state) {
      return state.isLoggedIn;
    },

    getJobRegistrationDetails(state) {
      return state.jobRegistration;
    }
  },
  actions: {
    login: (context) => {
      context.commit('login');
    },
    logout: (context) => {
      context.commit('logout');
    },
    maintainJobRegistration: (context, payload) => {
      context.commit('maintainJobRegistration', payload)
    }
  },
  mutations: {
    login: state => state.isLoggedIn = true,
    logout: state => state.isLoggedIn = false,
    maintainJobRegistration: (state, payload) => {
      var found = state.jobRegistration.find(x => x.key === payload.key)
      if (!found) {
        state.jobRegistration.push(payload)
      } else {
        state.jobRegistration = state.jobRegistration.filter(x => x.key !== payload.key)
        state.jobRegistration.push(payload)
      }
    }
  },
})

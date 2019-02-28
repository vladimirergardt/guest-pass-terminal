/**
 * Created by Ergardt.Vladimir on 27.02.2019
 */

import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Импорт mutation-type ( * as types)
 * Импорт modules (если будут)
 */

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    smsCode: '111111'
  },
  getters: {
    getSmsCode (state) {
      return state.smsCode
    }
  },
  mutations: {},
  actions: {}
})

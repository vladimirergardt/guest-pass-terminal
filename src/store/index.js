/**
 * Created by Ergardt.Vladimir on 27.02.2019
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'
/**
 * Импорт modules (если будут)
 */

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    smsCode: '111111',
    passIsReady: false,
    previousPage: ''
  },
  getters: {
    getSmsCode (state) {
      return state.smsCode
    },
    getPassStatus (state) {
      return state.passIsReady
    },
    getPreviousPage (state) {
      return state.previousPage
    }
  },
  mutations: {
    /**
     * Статус готовности пропуска
     * */
    [types.PASS_IS_READY] (state, payload) {
      state.passIsReady = payload
    },

    /**
     * Сохранить страницу
     */
    [types.SET_PREVIOUS_PAGE] (state, payload) {
      state.previousPage = payload
    }
  },
  actions: {
    setPassStatus ({ commit }, amount) {
      setTimeout(() => {
        commit(types.PASS_IS_READY, amount)
      }, 0)
    },
    setPreviousPage ({ commit }, amount) {
      return commit(types.SET_PREVIOUS_PAGE, amount)
    }
  }
})

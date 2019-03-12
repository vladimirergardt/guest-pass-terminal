/**
 * Created by Ergardt.Vladimir on 27.02.2019
 */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    previousPage: '',
    organizations: []
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
    },
    getOrganizations (state) {
      return state.organizations
    },
    getOftenOrganizations (state) {
      return state.organizations.filter(organization => organization.often)
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
    },

    /**
     * Сохранить список организаций
     */
    [types.SET_ORGANIZATIONS] (state, payload) {
      state.organizations = payload
    }
  },
  actions: {
    setPassStatus ({commit}, amount) {
      setTimeout(() => {
        commit(types.PASS_IS_READY, amount)
      }, 0)
    },
    setPreviousPage ({commit}, amount) {
      return commit(types.SET_PREVIOUS_PAGE, amount)
    },

    /**
     * Полуить список организация
     */
    getOrganizations ({commit}) {
      return axios.get('../static/organizations.json')
        .then((response) => {
          if (response.data.data) {
            commit(types.SET_ORGANIZATIONS, response.data.data)
          }

          // const arr = response.data.data.organizations.find(organization => organization.often === true)
          // console.log(arr);
        })
        .catch((e) => {
          console.log(e)
        })
    }
    // Todo: Написать мутации добавления организаций в стор,
    // Todo: геттер получения часто используемых компаний,
    // Todo: начать пагинацию, переход по странично, по элементу
  }
})

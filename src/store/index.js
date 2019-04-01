/**
 * Created by Ergardt.Vladimir on 27.02.2019
 */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import Alphabet from '@/utils/classes/alphabet'

import * as types from './mutation-types'
/**
 * Импорт modules (если будут)
 */

Vue.use(Vuex)

// Базовый URL
const API = (body) => {
  return axios.post('/classes/6550101/api/v1/gql.php', body)
}

export default new Vuex.Store({
  modules: {},
  state: {
    smsCode: '111111',
    passIsReady: false,
    previousPage: '',
    organizations: [],
    alphabetOrganizations: []
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
    },
    getAlphabetOrganization (state) {
      return state.alphabetOrganizations
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
    },

    /**
     * Сохранить список организаций по алфавиту
     */
    [types.SET_ORGANIZATIONS_ALPHABET] (state, payload) {
      state.alphabetOrganizations = Alphabet.getAlphabetList(payload.list);
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
      const body = { query: `query { terminal { getCAgent { id name score rated } } }`}

      return API(body)
        .then((response) => {
          if (response.data) {
            commit(types.SET_ORGANIZATIONS, response.data.data.terminal.getCAgent)
            commit(types.SET_ORGANIZATIONS_ALPHABET, { list: response.data.data.terminal.getCAgent })
          }
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

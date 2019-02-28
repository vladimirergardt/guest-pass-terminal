import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import SelectSearch from '@/pages/SelectSearch/SelectSearch.vue'
import SelectAlphabet from '@/pages/SelectAlphabet/SelectAlphabet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/select-search',
      name: 'SelectSearch',
      component: SelectSearch
    },
    {
      path: '/select-alphabet',
      name: 'SelectAlphabet',
      component: SelectAlphabet
    },
    {
      path: '/document-scan',
      name: 'DocumentScan'
      // component: SelectAlphabet
    }
  ]
})

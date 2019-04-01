import store from '../store/index'

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import SelectSearch from '@/pages/SelectSearch/SelectSearch.vue'
import SelectAlphabet from '@/pages/SelectAlphabet/SelectAlphabet.vue'
import DocumentScan from '@/pages/DocumentScan/DocumentScan.vue'

const GptNav = () => import('@/components/gpt-nav/GptNav.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/select-search',
      name: 'SelectSearch',
      components: {
        default: SelectSearch,
        menu: GptNav
      }
    },
    {
      path: '/select-alphabet',
      name: 'SelectAlphabet',
      components: {
        default: SelectAlphabet,
        menu: GptNav
      }
    },
    {
      path: '/document-scan',
      name: 'DocumentScan',
      components: {
        default: DocumentScan,
        menu: GptNav
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (from.name) {
    store.dispatch('setPreviousPage', from.name)
  }

  next()
})

// todo: Написать проверку, если переход осуществляеть со стр А на
// todo: стр А то осуществлять переход на гланую стартовую страницу (не для тестов)

export default router

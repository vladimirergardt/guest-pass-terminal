/**
 * Created by Ergardt.Vladimir on 12.03.2019
 */

import Vue from 'vue'

export default Vue.component('highlight', {
  props: {
    message: {
      type: String,
      require: true
    },
    search: {
      type: String,
      require: true
    },
    classValue: {
      type: String,
      require: true
    }
  },
  template: `<span><span v-for="(access, i) in parsedMessage" :class="getClass(i%2)">{{ access }}</span></span>`,
  methods: {
    getClass (i) {
      const myClass = {}
      myClass[this.classValue] = !!i
      return myClass
    }
  },
  computed: {
    parsedSearch () {
      return '(' + this.search.trim().replace(/ +/g, '|') + ')'
    },
    parsedMessage () {
      return this.message.split(
        new RegExp(this.parsedSearch, 'gi'))
    }
  }
})

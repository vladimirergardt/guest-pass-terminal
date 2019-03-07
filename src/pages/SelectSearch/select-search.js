/**
 * Created by Ergardt.Vladimir on 28.02.2019
 */

import { mapActions, mapGetters } from 'vuex'

export default {
  name: "select-search",
  data() {
    return {
      value: '',
    }
  },
  props: {},
  computed: {
    ...mapGetters([
      'getOftenOrganizations',
    ]),
  },
  methods: {
    ...mapActions([
      'getOrganizations',
    ]),
    addValue(value) {
      return this.value += value;
    },
    addSpace() {
      return this.value += ' ';
    },
    clearValue() {
      return this.value = '';
    },
    deleteValue() {
      return this.value = this.value
        .substring(0, this.value.length - 1)
    }
  },
  mounted() {
    this.getOrganizations();
  },
  created() {},
}

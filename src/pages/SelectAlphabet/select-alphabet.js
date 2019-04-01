/**
 * Created by Ergardt.Vladimir on 28.02.2019
 */

import * as constants from '../../utils/constants/constants';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: "select-alphabet",
  data() {
    return {
      value: '',
      showKeyboard: true,
    }
  },
  props: {},
  computed: {
    ...mapGetters([
      'getAlphabetOrganization',
    ]),
    windowSize() {
      return this.showKeyboard
        ? constants.MIN_HEIGHT_LIST
        : constants.MAX_HEIGHT_LIST; // todo: Не реактивно обновляются значения
    },
    maxSize() {
      return this.showKeyboard
        ? constants.MIN_ROW_LIST
        : constants.MAX_ROW_LIST;
    }
  },
  methods: {
      ...mapActions([
         'getOrganizations',
      ]),
    addValue(value) {
      this.value = value;
      this.showKeyboard = false;
    },
    backToAlphabet() {
      this.showKeyboard = true;
      this.value = '';
    }
  },
  mounted() {
      this.getOrganizations(); // todo: Написать функцию загрузки loadData()
  },
  created() {},
}

/**
 * Created by Ergardt.Vladimir on 27.02.2019
 */

import { checkClass } from '@/utils/func/util';

export default {
  name: "home",
  data() {
    return {
      promotionContext: 'Реклама',
      isVisibleCodeModal: false,
      isVisibleSubmitError: false,
      code: '',
      codeStatus: false,
    }
  },
  computed: {
      checkStatusModal() {
        !this.isVisibleCodeModal ? this.code = '' : false;
      },
    },
  methods: {
    checkCode() {
      this.isVisibleCodeModal = true;
    },
    setCode(val) {
      this.code = val;
    },
    setStatus(val) {
      this.codeStatus = val;
    },
    toSearchPage(evt){

      const checkButton = checkClass(evt, 'btn-check-code')
        || checkClass(evt, 'pa-button__content')
        || checkClass(evt, 'pa-button')
        || checkClass(evt, 'el-icon-close');

      !checkButton
        ? this.$router.push({ name: 'SelectSearch'})
        : false;

    }
  },
  mounted() {},
}

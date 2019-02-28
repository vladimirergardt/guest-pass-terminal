/**
 * Created by Ergardt.Vladimir on 27.02.2019
 */

export default {
  name: "home",
  data() {
    return {
      promotionContext: 'Реклама',
      isVisibleCodeModal: false,
      isVisibleSubmitError: false,
      code: '',
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
    }
    //
  },
  mounted() {},
}

/**
 * Created by Ergardt.Vladimir on 28.02.2019
 */

import { mapGetters } from 'vuex';

export default {
  name: "gpt-input-sms-code",
  data() {
    return {
      form: {
        value: '',
      },
      isVisibleSubmitError: false,
    }
  },
  props: {
    value: {
      type: String,
      require: true,
    },
    modalStatus: {
      type: Boolean,
      require: true,
    }
  },
  watch: {
    form(val) {
      return this.form.value = val;
    }
  },
  computed: {
    ...mapGetters([
      'getSmsCode',
    ]),
    disabledBtn() {
      return String(this.value).length !== 6;
    },
    setValue() {
      this.form.value = this.value;
      this.isVisibleSubmitError = false;
    },
    checkModalStatus() {
      !this.modalStatus ? this.form.value = '' : false;
    },
  },
  methods: {
    submitForm() {
      const self = this;
      if (this.value !== this.getSmsCode) {
        self.isVisibleSubmitError = true
      } else {
        self.isVisibleSubmitError = false;
        this.value = '';
        console.log('code complete');
        this.$emit('closeModal');
      }
    },
  },
  mounted() {

  },
  created() {},
}

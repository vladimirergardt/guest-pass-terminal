/**
 * Created by Ergardt.Vladimir on 28.02.2019
 */
export default {
  name: "gpt-keyboard-sms-code",
  data() {
    return {
      value: '',
      keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'c',],
    }
  },
  props: {
    modalStatus: {
      type: Boolean,
      require: true,
    }
  },
  watch: {},
  computed: {
    checkModalStatus(){
      !this.modalStatus ? this.value = '' : false;
    },
  },
  methods: {
    changeValue(n) {

      const maxLength = this.value.length < 6;
      const clear = n === 'c';
      const number = n !== 'c' && maxLength;

      number
        ? this.value += n
        : false;

      clear
        ? this.value = this.value
        .substring(0, this.value.length - 1)
        : false;

      this.$emit('getCode', this.value);
    },
  },
  created() {},
  mounted() {}
}

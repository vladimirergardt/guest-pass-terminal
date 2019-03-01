/**
 * Created by Ergardt.Vladimir on 01.03.2019
 */

export default {
  name: "gpt-keyboard",
  data() {
    return {
      alphabet: 'абвгдеёжзийклмнопрстуфкцчшщьыъэюя'
    }
  },
  props: {
    type: {
      type: String,
      require: true,
    }
  },
  computed: {
    computedAlphabet() {
      return this.alphabet.split('');
    },
  },
  methods: {},
  mounted() {
    console.log(this.type);
  },
  created() {}
}

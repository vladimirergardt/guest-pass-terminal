/**
 * Created by Ergardt.Vladimir on 01.03.2019
 */

const ALPHABET = 'абвгдеёжзийклмнопрстуфхцчшщьыъэюя';
const NUMERIC = '1234567890-/.,!';

export default {
  name: "gpt-keyboard",
  data() {
    return {
      alphabet: ALPHABET
    }
  },
  props: { // alphabet || search
    type: {
      type: String,
      require: true,
    }
  },
  computed: {
    computedAlphabet() {
      return this.alphabet.toUpperCase().split('');
    },
  },
  methods: {
    addValue(value) {
      this.$emit('add-value', value);
    },
    addSpace() {
      this.$emit('add-space');
    },
    clearValue() {
      this.$emit('clear-value');
    },
    deleteValue() {
      this.$emit('delete-value');
    },
    simbolsUpperCase() {
      this.alphabet =
        this.alphabet === NUMERIC
        ? ALPHABET
        : NUMERIC;

      // return this.alphabet =
      //   this.alphabet === this.alphabet.toUpperCase()
      //   ? this.alphabet.toLowerCase()
      //   : this.alphabet.toUpperCase();
    },
  },
  mounted() {

  },
  created() {}
}

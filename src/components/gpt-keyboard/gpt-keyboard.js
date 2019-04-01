/**
 * Created by Ergardt.Vladimir on 01.03.2019
 */

import { mapGetters } from 'vuex';

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
    ...mapGetters([
      'getLetters',
    ]),
    computedAlphabet() {
      return this.alphabet.toUpperCase().split('');
    },
  },
  methods: {
    disabledBtn(letter) {
      return this.getLetters
        .indexOf(letter) === -1
        && this.type === 'alphabet';
    },
    addValue(value) {
      if (this.disabledBtn(value)) return false;
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
    },
  },
  mounted() {

  },
  created() {}
}

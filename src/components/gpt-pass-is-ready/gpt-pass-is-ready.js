/**
 * Created by Ergardt.Vladimir on 01.03.2019
 */

import { mapGetters } from 'vuex';

export default {
  name: "gpt-pass-is-ready",
  data() {
    return {

    }
  },
  props: {
  },
  computed: {
    ...mapGetters([
      'getPassStatus',
    ]),
  },
  methods: {},
}

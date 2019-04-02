/**
 * Created by Ergardt.Vladimir on 01.04.2019
 */

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "gpt-pass-no-ready",
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'getPassStatusIsNotReady',
    ]),
  },
  methods: {
    ...mapActions([
      'setPassIsNotReadyStatus',
    ]),
    scanning() {
      console.log('сканирование');
      this.setPassIsNotReadyStatus(false);
    }
  },
  mounted(){},
}

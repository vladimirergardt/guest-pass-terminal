/**
 * Created by Ergardt.Vladimir on 07.03.2019
 */

import { mapGetters, mapActions } from 'vuex'

export default {
  name: "gpt-view-window",
  data() {
    return {

    }
  },
  props: {
    searchValue: {
      type: String,
      require: true,
    }
  },
  computed: {
    ...mapGetters([
      'getOftenOrganizations',
    ]),
  },
  methods: {
    ...mapActions([

    ]),
  },
  mounted() {},
  created() {},
}

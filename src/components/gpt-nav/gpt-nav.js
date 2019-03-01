/**
 * Created by Ergardt.Vladimir on 01.03.2019
 */
import router from '@/router/index'

import { mapGetters } from 'vuex'

export default {
  name: "gpt-nav",
  data() {
    return {
      pathName: '',
    }
  },
  watch: {
    '$route'() {
      this.pathName = this.getPageName();
    },
  },
  computed: {
    ...mapGetters([
      'getPreviousPage',
    ]),
  },
  methods: {
    getPageName() {
      return router.history.current.name;
    },
    active(names) {
      return names.indexOf(this.pathName) !== -1;
    },
  },
  created(){
  },
  mounted(){
    this.pathName = this.getPageName();
  },
  created(){},
}

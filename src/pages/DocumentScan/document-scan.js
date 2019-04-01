/**
 * Created by Ergardt.Vladimir on 01.03.2019
 */

import { mapGetters, mapActions } from 'vuex';

export default {
  name: "document-scan",
  data() {
    return {
      scanning: false,
    }
  },
  computed: {
    ...mapGetters([
      'getPassStatus',
    ]),
  },
  methods: {
    ...mapActions([
      'setPassStatus',
    ]),
    async scanningDocument() {
      this.scanning = true;
      setTimeout( async() => {
        this.scanning = false;
        await this.setPassStatus(true);
      }, 3000);


      // Возврат на главную через 10 сек
      // if (await this.getPassStatus) {
      setTimeout(async () => {
        await this.setPassStatus(false);
        await this.$router.push({name: 'Home'});
      }, 10000);
      // }
    }
  },
  mounted() {},
}

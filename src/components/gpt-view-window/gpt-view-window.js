/**
 * Created by Ergardt.Vladimir on 07.03.2019
 */

import { mapGetters, mapActions } from 'vuex'

const Highlight = () => import('../../wrappers/Highlight/highlight');

export default {
  name: "gpt-view-window",
  data() {
    return {
      // maxLength: 7,
      valueScroll: 0,
      disabledBtn: false,
    }
  },
  components: {
    'highlight': Highlight,
  },
  props: {
    searchValue: {
      type: String,
      require: true,
    },
    windowHeight: {
      type: Number,
      require: true,
    },
    maxLength: {
      type: Number,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    organizations: {
      type: Array,
      require: true,
    }
  },
  computed: {
    ...mapGetters([
      'getOrganizations',
      'getOftenOrganizations',
      'getAlphabetOrganization',
    ]),
    filteredData() {
      const search = this.type === 'search';
      const alphabet = this.type === 'alphabet';

      if (this.searchValue === '' && search) {
        // Если часто посещаемых нет, выводим первые 7
        return this.getOftenOrganizations.length
          ? this.getOftenOrganizations
          : this.getOrganizations.slice(0, 7);
      }
      // Выдача результатов по приоритетам н: о, "о"фыв, фы"о".
      if (alphabet){
        return this.searchValue === ''
          ? this.getAlphabetOrganization
          : this.getAlphabetOrganization.filter(org => org.letter === this.searchValue)
      }

      if (search) {
        return this.getOrganizations
          .filter(org => org.name.toLowerCase()
            .indexOf(this.searchValue.toLowerCase()) > -1);
      }
    },
    organizationsList() {
      return this.$refs.resultWindow;
    },
    resultRowHeight () {
      // const border = 1; // нижняя граница (px)
      // return this.$refs.resultRow[0].clientHeight + border;
      return 66;
    },
    maxScroll() {
      return (this.filteredData.length * this.resultRowHeight) - (this.resultRowHeight * this.maxLength);
    },
    disabledUpBtns() {
      return this.valueScroll === 0 || this.disabledBtn;
    },
    disabledDownBtns() {
      return this.valueScroll === this.maxScroll || this.disabledBtn
    },
  },
  methods: {
    ...mapActions([
      'setOrganization',
    ]),
    scrolling(props, items) {
      let count = this.organizationsList.scrollTop;
      this.disabledBtn = true;

      const i = setInterval(() => { // скролл

        // 11 * items - скорость скролла,
        // определять динамически в зависимости от кольичества организаций

        props === 'down'
          ? this.organizationsList.scrollTop += 11 * items
          : this.organizationsList.scrollTop -= 11 * items;

        const max = items === this.maxLength;

        const upStop = max
          ? ( this.organizationsList.scrollTop === count - this.resultRowHeight * items
            || this.organizationsList.scrollTop === 0 )
          : ( count - this.organizationsList.scrollTop === this.resultRowHeight * items );

        const downStop = max
          ? ( this.organizationsList.scrollTop === count + this.resultRowHeight * items
            || this.organizationsList.scrollTop === this.maxScroll )
          : ( this.organizationsList.scrollTop - count === this.resultRowHeight * items );

        const clear = (val) => {
          this.disabledBtn = false;
          return clearInterval(val)
        };

        if ( props === 'up' && upStop ) clear(i);
        if ( props === 'down' && downStop ) clear(i);

      }, 0);
    },
    async getScrollValue() {
      this.$refs.resultWindow.onscroll = () => {
        this.valueScroll = this.$refs.resultWindow.scrollTop
      }
    },

    /**
     * Выбор органицзации и переход на страницу сканирования
     */
    async selectOrganization(org) {
      if (org.type === 'letter') {
          await this.setOrganization(org);
          await this.$router.push({ name: 'DocumentScan'});
      }
    }
  },
  mounted() {
    this.getScrollValue(); // todo: Перенести на главную страницу, обновлять только на ней !!!
  },
  created() {},
}

/**
 * Created by Ergardt.Vladimir on 07.03.2019
 */

import { mapGetters, mapActions } from 'vuex'

const Highlight = () => import('../../wrappers/Highlight/highlight');

export default {
  name: "gpt-view-window",
  data() {
    return {
      maxLength: 7,
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
    }
  },
  computed: {
    ...mapGetters([
      'getOrganizations',
      'getOftenOrganizations',
    ]),
    filteredData() {
      if (this.searchValue === '') return this.getOftenOrganizations;
      // Выдача результатов по приоритетам н: о, "о"фыв, фы"о".
      return this.getOrganizations
        .filter(org => org.name.toLowerCase()
          .indexOf(this.searchValue.toLowerCase()) > -1);
    },
    organizationsList() {
      return this.$refs.resultWindow;
    },
    resultRowHeight() {
      const border = 1; // нижняя граница (px)
      return this.$refs.resultRow[0].clientHeight + border;
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

    ]),
    scrolling(props, items) {
      let count = this.organizationsList.scrollTop;
      this.disabledBtn = true;

      const i = setInterval(() => { // скролл

        props === 'down'
          ? this.organizationsList.scrollTop += 1 * items
          : this.organizationsList.scrollTop -= 1 * items;

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
    }
  },
  mounted() {
    this.getScrollValue();
  },
  created() {},
}

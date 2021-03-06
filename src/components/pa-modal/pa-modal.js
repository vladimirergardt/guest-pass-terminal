/**
 * Created by Smirnov.Denis on 07.11.2017.
 *
 * @flow
 */

import { mapGetters, mapActions } from 'vuex';

import paButton from '@/components/pa-button/PaButton'

export default {
  name: 'PaModal',
  components: {
    paButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      required: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    typeModal: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      ops: {
        scrollContent: {
          padding: false
        },
        vBar: {
          background: '#41bab9',
          opacity: 1
        }
      }
    };
  },
  computed: {
    ...mapGetters([
      'getPassStatusIsReady',
      'getPassStatusIsNotReady',
    ]),
  },
  watch: {
    visible (value) {
      this.$emit('update:visible', value)
      if (value) {
        if (document.body) {
          document.body.style.overflow = 'hidden'
        }
      } else if (document.body) {
        document.body.style.overflow = 'auto'
      }
    },
  },
  methods: {
    ...mapActions([
      'setPassStatus',
      'setPassIsNotReadyStatus',
    ]),
    async close () {
      this.$emit('update:visible', false)
      this.$emit('close')

      if(this.typeModal === 'success'){
        await this.getPassStatusIsReady
          ? this.setPassStatus(false)
          : false;
        await this.$router.push( { name: 'Home' });
      }

      if(this.typeModal === 'no-success') {
        await this.getPassStatusIsNotReady
          ? this.setPassIsNotReadyStatus(false)
          : false;
      }
    },
    closeByEsc (evt) {
      if (evt.which === 27) this.close()
    },
  },
  created () {
    window.addEventListener('keyup', this.closeByEsc)
  },
  beforeDestroy () {
    window.removeEventListener('keyup', this.closeByEsc)
    if (document.body) {
      document.body.style.overflow = 'auto'
    }
  }
};

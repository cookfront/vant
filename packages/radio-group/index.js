import { use } from '../utils';

const [sfc, bem] = use('radio-group');

export default sfc({
  props: {
    value: null,
    disabled: Boolean
  },

  provide() {
    return {
      vanRadioGroup: this
    };
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    }
  },

  render(h) {
    return <div class={bem()}>{this.slots()}</div>;
  }
});

/**
 * Common part of Checkbox & Radio
 */
import Icon from '../icon';
import { FindParentMixin } from './find-parent';

export const CheckboxMixin = (parent, child, bem) => ({
  mixins: [FindParentMixin(parent, child)],

  props: {
    name: null,
    value: null,
    disabled: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      default: 'round'
    }
  },

  computed: {
    isDisabled() {
      return (this.parent && this.parent.disabled) || this.disabled;
    },

    iconStyle() {
      const { checkedColor } = this;
      if (checkedColor && this.checked && !this.isDisabled) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    }
  },

  render(h) {
    const { slots, checked } = this;

    const CheckIcon = slots('icon', { checked }) || (
      <Icon name="success" style={this.iconStyle} />
    );

    const Label = slots() && (
      <span
        class={bem('label', [this.labelPosition, { disabled: this.isDisabled }])}
        onClick={this.onClickLabel}
      >
        {slots()}
      </span>
    );

    return (
      <div
        class={bem()}
        onClick={() => {
          this.$emit('click');
        }}
      >
        <div
          class={bem('icon', [this.shape, { disabled: this.isDisabled, checked }])}
          onClick={event => {
            event.stopPropagation();
            this.onClickIcon();
          }}
        >
          {CheckIcon}
        </div>
        {Label}
      </div>
    );
  }
});

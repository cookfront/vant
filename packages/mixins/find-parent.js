/**
 * find parent component by name
 */
import { camelize } from '../utils';

export const FindParentMixin = (parent, child) => {
  const provideName = camelize(`van-${parent}`);

  return {
    inject: [provideName],

    computed: {
      parent() {
        if (process.env.NODE_ENV !== 'production' && !this[provideName]) {
          console.error(`[Vant] ${child} needs to be child of ${parent}`);
        }
        return this[provideName];
      }
    }
  };
};

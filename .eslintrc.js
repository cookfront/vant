module.exports = {
  root: true,
  env: {
    jest: true
  },
  extends: ['plugin:vue-libs/recommended', 'plugin:vue/strongly-recommended'],
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'vue/require-v-for-key': 0,
    'vue/require-default-prop': 0,
    'vue/name-property-casing': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: {
          max: 5,
          allowFirstLine: false
        }
      }
    ]
  }
};

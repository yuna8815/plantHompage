import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#008ECF',
        secondary: '#159E60',
        gray: '#f1f1f1'
      }
    },
  },
  breakpoint: {
    thresholds: {
      'xs': 360,
      'sm': 769,
      'md': 769,
      'lg': 1201,
      'xl': 1201
    }
  },
});

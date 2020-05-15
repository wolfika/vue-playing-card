import { configure } from '@storybook/vue';
import Vue from 'vue';
import VuePlayingCard from '../';

//Vue.component('vue-playing-card', VuePlayingCard);
Vue.use(VuePlayingCard);

configure(require.context('../stories', true, /\.stories\.js$/), module);

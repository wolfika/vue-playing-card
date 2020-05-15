import VuePlayingCard from './VuePlayingCard.vue';
const sprite = require('!svg-inline-loader!./sprite.svg');
const SPRITES_MOUNTED_KEY = '__playing-card-sprites-mounted';

function mountSprite() {
  if (window[SPRITES_MOUNTED_KEY]) {
    return;
  }

  const spriteElement = document.createElement('div');
  spriteElement.innerHTML = sprite;
  spriteElement.style.height = 0;
  spriteElement.style.position = 'absolute';
  spriteElement.style.width = 0;
  document.body.appendChild(spriteElement);
  window[SPRITES_MOUNTED_KEY] = true;
}

document.addEventListener('DOMContentLoaded', () => {
  mountSprite();
});

export default {
  install(Vue) {
    Vue.component('vue-playing-card', VuePlayingCard);
  },
};

export { VuePlayingCard };

import VuePlayingCard from './VuePlayingCard.vue';
import sprite from './sprite.svg';

function plugin (Vue) {
  Vue.component('vue-playing-card', VuePlayingCard);
}

function createSpriteElement() {
  const spriteElement = document.createElement('div');
  spriteElement.innerHTML = sprite;
  document.body.appendChild(spriteElement);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

createSpriteElement();

export default plugin;
const version = '__VERSION__';
// Export all components too
export {
  VuePlayingCard,
  version
};

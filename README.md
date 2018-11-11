# VuePlayingCard

[![npm](https://img.shields.io/npm/v/vue-playing-card.svg)](https://www.npmjs.com/package/vue-playing-card) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Simple Vue component for displaying playing cards, for 52-card French card decks

This component uses an SVG sprite for actually displaying the playing cards in a scalable format. The SVG is injected only once into the `<body>` as a collection of symbols.

> ⚠ **Note:** the SVG sprite is quite heavy (390 kB). Use with caution!

## Installation

```bash
npm install --save vue-playing-card
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue';
import VuePlayingCard from 'vue-playing-card';

Vue.use(VuePlayingCard);
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="vue-playing-card/dist/vue-playing-card.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/vue-playing-card/dist/vue-playing-card.min.js"></script>
```

### After including

```html
<vue-playing-card signature="4s"></vue-playing-card>
```

```html
<vue-playing-card cover></vue-playing-card>
```

```html
<vue-playing-card signature="as" width="300"></vue-playing-card>
```

## Props

### `signature`

**Type:** `string` or `null`

Accepts a valid card signature that can be parsed by the [playing-card-signature](https://github.com/wolfika/playing-card-signature) module. If `null` or missing, the card will show its cover.

### `cover`

**Type:** `boolean`

If `true` (or present without value), the card will show its cover, no matter the `signature`.

### `width`

**Type:** `string` or `number`

Sets the width of each card component, in pixels. If `string` given, the numbers are extracted from it using `parseInt(strValue, 10)`.

### `height`

**Type:** `string` or `number`

Sets the height of each card component, in pixels. If `string` given, the numbers are extracted from it using `parseInt(strValue, 10)`.

## Card sizing

Cards have a default size of `200x280` pixels. They can be resized using *either* the `width` or `height` props. If one of these props is given, the other prop is calculated from it using a ratio between the default width and height. E.g. if you give `width="140"`, the resulting card component will have a height of `196`, because `resultingHeight = userWidth * (DEFAULT_HEIGHT / DEFAULT_WIDTH)`. This calculation is useful if you want to customize the size of cards, but want to keep the aspect ratio of them.

Using both `width` and `height` at the same time is allowed, but should only be used if you know what you're doing, as you will probably mess up the aspect ratio of the cards, and be left with an odd-looking card.

## Development

### Build

Bundle the js to the `dist` folder:

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)

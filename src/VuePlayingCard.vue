<template>
  <svg :class="[cssClassBase, signatureClass]" :width="computedWidth" :height="computedHeight">
    <use :xlink:href="uppercaseSignatureWithHash"></use>
  </svg>
</template>

<script>
import playingCardSignature from "playing-card-signature";

const validateSizeProp = (sizeValue) => {
  return typeof sizeValue === 'number' || (typeof sizeValue === 'string' && sizeValue.endsWith('px'));
};

const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 280;

export default {
  name: "VuePlayingCard",
  props: {
    signature: {
      default: null,
      validator(val) {
        if (val === null) {
          return true;
        }

        if (typeof val !== "string") {
          return false;
        }

        return playingCardSignature.validate(val);
      }
    },
    cover: {
      default: false,
      type: Boolean
    },
    width: {
      default: null,
      type: [Number, String],
      validator: validateSizeProp,
    },
    height: {
      default: null,
      type: [Number, String],
      validator: validateSizeProp,
    },
  },
  data() {
    return {
      cssClassBase: 'vue-playing-card',
      parsedSignature: null,
    };
  },
  created() {
    if (this.signature) {
      this.parsedSignature = playingCardSignature.parse(this.signature);
    } else {
      this.parsedSignature = null;
    }
  },
  computed: {
    rank() {
      if (!this.parsedSignature) {
        return "";
      }

      return this.parsedSignature.rank.toUpperCase();
    },
    suit() {
      if (!this.parsedSignature) {
        return "";
      }

      return this.parsedSignature.suit.toUpperCase();
    },
    computedSignature() {
      if (
        this.isCovered ||
        !this.parsedSignature ||
        this.parsedSignature === null
      ) {
        return 'cover';
      }

      return `${this.parsedSignature.signature}`;
    },
    uppercaseSignatureWithHash() {
      return `#${this.computedSignature.toUpperCase()}`;
    },
    signatureClass() {
      return `${this.cssClassBase}--${this.computedSignature}`;
    },
    isCovered() {
      return this.cover || !this.signature;
    },
    computedWidth() {
      let computedValue = parseInt(this.width, 10);

      if (computedValue === 0 || Number.isNaN(computedValue)) {
        if (this.height !== null) {
          computedValue = this.height * (DEFAULT_WIDTH / DEFAULT_HEIGHT);
        } else {
          computedValue = DEFAULT_WIDTH; // no width or height is specified, use default width
        }
      }

      return String(computedValue);
    },
    computedHeight() {
      let computedValue = parseInt(this.height, 10);

      if (computedValue === 0 || Number.isNaN(computedValue)) {
        if (this.width !== null) {
          computedValue = this.width * (DEFAULT_HEIGHT / DEFAULT_WIDTH);
        } else {
          computedValue = DEFAULT_HEIGHT; // no width or height is specified, use default height
        }
      }

      return String(computedValue);
    },
  }
};
</script>

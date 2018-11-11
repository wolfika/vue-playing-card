<template>
    <div class="card" :class="{'card--back': isCovered}">
        <p>rank: {{rank}}</p>
        <p>suit: {{suit}}</p>
        <p>isCovered: {{isCovered}}</p>

        <svg class="icon">
            <use :xlink:href="signatureWithHash"></use>
        </svg>
    </div>
</template>

<script>
import playingCardSignature from "playing-card-signature";

const RANKS = ["a", 2, 3, 4, 5, 6, 7, 8, 9, "t", "j", "q", "k"];
const SUITS = ["c", "d", "h", "s"];

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
    }
  },
  data() {
    return {
      parsedSignature: null
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
    signatureWithHash() {
      if (!this.parsedSignature || this.parsedSignature === null) {
        return `#cover`;
      }

      return `#${this.parsedSignature.signature.toUpperCase()}`;
    },
    isCovered() {
      return this.cover || !this.signature;
    }
  }
};
</script>

<style scoped>
.vue-playing-card {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.vue-playing-card p {
  margin: 0 0 1em;
}
</style>

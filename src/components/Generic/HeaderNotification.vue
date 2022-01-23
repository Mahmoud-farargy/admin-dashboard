<template>
  <span ref="noti_ref" class="header__nav__item">
    <span
      class="inner flex-row"
      aria-haspopup="true"
      aria-label="dropdown toggle"
      aria-expanded="false"
    >
      <small
        v-if="showBadge && badge.number"
        class="badge"
        :style="{ backgroundColor: badge.color }"
        >{{ badge.number }}</small
      >
      <v-icon>{{ icon }} </v-icon>
    </span>
  </span>
</template>

<script>
export default {
  name: "header_notification",
  data() {
    return {
      showBadge: true,
    };
  },
  props: {
    badge: {
      type: Object,
      default: () => ({
        number: 0,
        color: "#39f",
      }),
    },
    icon: {
      type: String,
      required: true,
    },
  },
  methods: {
    listenForClicks() {
      if (this.showBadge) this.showBadge = false;
    },
    removeListening() {
      const refEls = this.$refs;
      refEls.noti_ref.parentNode?.removeEventListener(
        "click",
        this.listenForClicks,
        true
      );
    },
  },
  mounted() {
    const refEls = this.$refs;
    if (refEls.noti_ref) {
      refEls.noti_ref.parentNode.addEventListener(
        "click",
        this.listenForClicks,
        true
      );
    }
  },
  watch: {
    showBadge(val) {
      if (!val) {
        this.removeListening();
      }
    },
  },
  beforeDestroy() {
    this.removeListening();
  },
};
</script>

<style lang="scss" scoped>
.header__nav__item {
  cursor: pointer;
  .badge {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -16px;
    padding: 0.2em 0.5em;
    border-radius: 10rem;
    color: var(--ultra-white);
    transition: background-color 0.15s ease-in-out;
    text-align: center;
    min-width: 8px;
    max-width: 30px;
    overflow: hidden;
    z-index: 2;
    border: 2px solid var(--ultra-white);
  }
  .inner {
    text-decoration: none;
    color: inherit;
    i{
      color: var(--text-gray);
    }
  }
}
</style>
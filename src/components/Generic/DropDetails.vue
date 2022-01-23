<template>
  <div class="dropdown--details">
    <div v-if="dropDetails.headTitle" class="dropdown_header">
      {{ dropDetails.headTitle }}
    </div>
    <ul
      v-if="dropDetails && dropDetails.list.length > 0"
      class="dropdown__inner"
    >
      <li v-for="(item, idx) in dropDetails.list" :key="item.id || idx">
        <a
          :href="item.link"
          :target="item.isExternal ? '_blank' : '_self'"
          :rel="item.isExternal ? 'noopener' : ''"
          class="flex-row dropwdown--item--link"
        >
          <v-icon v-if="item.icon">mdi-{{ item.icon }}</v-icon>
          <span v-if="item.title">{{ item.title }}</span>
        </a>
      </li>
    </ul>
    <div v-if="dropDetails.footerTitle" class="dropdown_footer">
      <strong>{{ dropDetails.footerTitle }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "drop_details",
  props: {
    dropDetails: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    toggleFunc: {
      type: Function,
      required: true,
    },
  },
  beforeDestroy() {
    document.removeEventListener("mousedown", this.toggleFunc, true);
  },
};
</script>

<style lang="scss" scoped>
.dropdown--details {
  user-select: none;
  position: absolute;
  border: 1px solid var(--quaternary-clr);
  background-color: var(--ultra-white);
  right: 0;
  $radius: 7px;
  overflow: hidden;
  top: calc(100% + 5px);
  margin: 0;
  z-index: var(--z-dropdown);
  max-width: 400px;
  min-width: 180px;
  display: block;
  float: left;
  width: max-content;
  box-shadow: var(--box-shadow);
  transform-origin: top right;
  border-radius: $radius;
  animation: open 0.5s var(--trans-cubic);

  .dropdown_header {
    color: #8a93a2;
    display: block;
    background: var(--light);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-heavy);
    text-align: center;
    text-transform: capitalize;
    padding: 0.5rem 0.5rem;
    border-top-right-radius: $radius;
    border-top-left-radius: $radius;
  }
  .dropdown_footer {
    border-bottom-right-radius: $radius;
    border-bottom-left-radius: $radius;
    border-top: 1px solid var(--lighter-gray);
    &:hover {
      background-color: var(--lightest-gray);
    }
    &:active {
      background-color: var(--primary-clr);
      color: var(--ultra-white);
    }
    color: var(--darker-black);
    padding: 0.7rem 1.25rem;
    text-align: center;
    font-size: var(--font-size-small);
    cursor: pointer;
  }
  ul.dropdown__inner {
    padding: 0;
    list-style: none;
    li {
      display: flex;
      text-transform: capitalize;
      padding: 0.5rem 1.25rem;
      cursor: pointer;
      clear: both;
      font-weight: var(--font-weight);
      align-items: center;
      white-space: nowrap;
      width: 100%;
      transition: background-color, color var(--trans-02);
      .dropwdown--item--link {
        color: inherit;
        text-decoration: none;
        i,
        span {
          color: inherit;
        }
        i {
          margin-right: 0.4rem;
        }
      }
      &:hover {
        background-color: var(--lightest-gray);
      }
      &:active {
        background-color: var(--primary-clr);
        color: var(--ultra-white);
      }
    }
  }
  @media (max-width: 450px) {
    max-width: 300px;
    ul.dropdown__inner {
      max-height: 300px;
      overflow-y: auto;
    }
  }
}
@keyframes open {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
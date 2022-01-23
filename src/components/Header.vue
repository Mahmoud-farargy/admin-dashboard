<template>
  <header id="header" class="flex-row full-width">
    <div class="header--inner flex-row full-width">
      <span
        class="sideToggler--btn--container center-content"
        @click="() => toggleSideBar()"
      >
        <v-btn class="sideToggler--btn center-content">
          <v-icon size="25" class="mr-1">mdi-menu</v-icon>
        </v-btn>
      </span>
      <ul class="header--navbar-left hide-mobile flex-row">
        <li><RouterLink to="/">dashboard</RouterLink></li>
        <li><RouterLink to="/datatable/customers">users</RouterLink></li>
        <li><RouterLink to="/blankpage/settings">settings</RouterLink></li>
      </ul>
      <ul
        v-if="Object.values(navDropdownData).length > 0"
        class="header--navbar-right flex-row"
      >
        <HeaderNavItem
          v-for="(item, idx) in Object.values(navDropdownData)"
          :key="item.title + idx"
          in
          Object
          :dropDetails="navDropdownData[item.title]"
        >
          <HeaderNotification
            v-if="item.title !== 'profile'"
            slot="dropdown_btn"
            :badge="{ color: item.badge, number: randomNum(1, 25) }"
            :icon="item.icon"
          />
          <img
            v-else-if="item.img"
            slot="dropdown_btn"
            class="profile__img rounded-circle z-depth-2"
            :src="require(`../assets/${item.img}`)"
            alt="user name"
          />
        </HeaderNavItem>
      </ul>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
import { randomNum } from "@/utilities/tools";
import Vue from "vue";
import HeaderNavItem from "./Generic/HeaderNavItem.vue";
import HeaderNotification from "./Generic/HeaderNotification.vue";
import navDropdownData from "@/fixtures/navDropdowns.json";
export default Vue.extend({
  name: "header_component",
  data() {
    return {
      navDropdownData,
      openedDropName: "",
    };
  },
  methods: {
    ...mapActions("toggleKeys", ["mutateKeys"]),
    toggleSideBar() {
      this.mutateKeys({ key: "openSidebar" });
    },
    randomNum,
  },
  components: {
    HeaderNavItem,
    HeaderNotification,
  },
});
</script>

<style lang="scss" scoped>
#header {
  position: sticky;
  top: 0;
  left: 0px;
  padding: 0px;
  border-bottom: 1px solid var(--quaternary-clr);
  min-height: var(--height-header);
  z-index: var(--z-header);
  .header--inner {
    .v-btn {
      padding: 0.2rem 0.4rem;
      display: grid;
      place-content: center;
      border-radius: 50%;
      min-width: auto;
      background: transparent;
      border: none;
      box-shadow: none;
      cursor: pointer;
    }
    padding: 0rem 1rem;
    background: var(--ultra-white);
    .sideToggler--btn--container {
      height: 100%;
      .sideToggler--btn {
        i {
          color: var(--text-gray);
        }
        label {
          padding: 1.1rem;
          width: 30px;
          height: 30px;
        }
      }
    }

    ul {
      padding-left: 0;
      margin: 0;
      list-style: none;
      gap: 0.5rem;
      li {
        padding: 6.5px 8px;
        color: var(--text-gray);
        a {
          text-transform: capitalize;
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
    ul.header--navbar-left {
      margin-right: auto;
    }
    .profile__img {
      width: 36px;
      height: 36px;
      cursor: pointer;
    }
    .header--navbar-right {
      width: 100%;
      justify-content: flex-end;
      float: right;
      i {
        color: var(--text-gray);
      }
    }
  }
  .header--inner,
  ul {
    align-items: center;
  }
}
</style>
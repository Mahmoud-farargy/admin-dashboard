<template>
  <v-app id="app" :class="{'sidebar--lg--show' : getKeys.openSidebar}">
    <!-- modals & loaders -->
    <div v-if="pageLoading" class="loading--screen">
      <span></span>
    </div>
    <!-- sidebar -->
    <Sidebar />
    <!-- different screens -->
    <Screens />
  </v-app>
</template>

<script >
import Vue from 'vue';
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Screens from "../src/components/Screens.vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: 'App',
  data(){
    return {
      pageLoading: true
    }
  },
  components: {
    Sidebar,
    Screens
  },
  methods:{
    ...mapActions("toggleKeys", ["mutateKeys"]),
    onPageFinishLoading(){
      this.pageLoading = false;
    }
  },
  computed: {
      ...mapGetters("toggleKeys", ["getKeys"]),
  },
  created() {
    if((window.innerWidth || document.documentElement.offsetWidth) < 900){
      this.mutateKeys({key: "openSidebar", val: false});
    }
  },
  mounted(){
    document.addEventListener("load", this.onPageFinishLoading, true);
  },
  beforeDestroy() {
    document.removeEventListener("load", this.onPageFinishLoading, true);
  },
});
</script>

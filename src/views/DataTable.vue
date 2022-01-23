<template>
  <div id="datatable">
    <div class="loading--grid section--loading" v-if="isLoading">
        <span></span>
    </div>
    <CRUIDGrid v-else :dataObj="dataGrid" :gridTitle="currentType" :isLoading="isLoading"/>
  </div>
</template>

<script>
import CRUIDGrid from "@/components/Grid/CRUD.vue";
import * as Consts from "@/utilities/consts";
import storedHeaders from "@/fixtures/gridHeaders.json";
import { database } from "@/config/firebase";
import { lowerString } from "@/utilities/tools";
export default {
  data() {
    return {
      Consts,
      currentType: "",
      storedHeaders,
      isLoading: false,
      dataGrid: {
        headers: storedHeaders[this.currentType],
        itemsList: [],
      },
    };
  },
  components: {
    CRUIDGrid,
  },
  watch: {
    "$route.params": {
      deep: true,
      immediate: true,
      handler(params) {
        const { type = ""} = params;
        if(Object.keys(this.Consts.dbObjects).some(key => lowerString(key) === lowerString(type))){
            this.isLoading = true;
            this.currentType = type;
            this.dataGrid["headers"] = storedHeaders[type],
            database.ref(`/${type}`).on("value", (snapshot) => {
                this.isLoading = false;
                const newData = snapshot?.val();
                this.dataGrid["itemsList"] = newData || [];
            });
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
    #datatable{
      .loading--grid{
        height: 425px;
        box-shadow: var(--box-shadow);
      }
    }
</style>
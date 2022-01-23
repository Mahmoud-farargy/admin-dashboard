<template>
  <div id="blankpage">
    <div class="card">
        <div class="card-body">
            <strong>{{currPageName}} page</strong>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currPageName: "empty"
      }
    },
    watch: {
      "$route.params":{
        immediate: true,
        deep: true,
        handler(currParam) {
         const { pagename = "" } = currParam;
         if(pagename){
            this.currPageName = pagename.replace("_", () => " ");
         }
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  #blankpage{
    strong{
      text-transform: capitalize;
    }
  }
</style>
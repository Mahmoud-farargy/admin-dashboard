<template>
  <aside id="sidebar" class="flex-column">
    <div @click="() => closeSidebar()"  v-if="appConfig.title" class="logo--container flex-row">
      <RouterLink to="/">
         <v-icon>mdi-shield-crown-outline</v-icon>
         <div class="logo--txt flex-row">
            <strong>{{appConfig.title.substring(0,4)}}</strong>
            <span>{{appConfig.title.substring(4)}}</span> 
         </div>

      </RouterLink>
    </div>
    <div class="sidebar--inner flex-column full-width">
        <ul>
          <li class="sidebar--item" v-for="(item, idx) in menuData.list" :key="item.title + idx">
            <Item :item="item" :showSubItem="item.title === openedSubListName" :changeActiveSublist="changeActiveSublist"/>
          </li>
        </ul>
    </div>
  </aside>
</template>

<script >
import Vue from 'vue';
import menuData from "@/fixtures/menu.json";
import Item from "./Item.vue";
import { lowerString } from "@/utilities/tools";
import appConfig from "@/appConfig";
import { mapActions } from "vuex";

export default Vue.extend({
  name: 'sidebar',
  data() {
    return {
      appConfig,
      menuData,
      openedSubListName: "" 
    }
  },
  components: {
    Item
  },
  methods:{
    ...mapActions("toggleKeys", ["mutateKeys"]),
        closeSidebar () {
        if((window.innerWidth || document.documentElement.offsetWidth) < 670){
          this.mutateKeys({key: "openSidebar", val: false});
        }
    },
    changeActiveSublist(subListTitle) {
      this.openedSubListName = lowerString(subListTitle) === lowerString(this.openedSubListName) ? "" : subListTitle;
    }
  }
});
</script>


<style lang="scss">
  aside#sidebar#sidebar{
    user-select: none;
    position: fixed;
    left:0px;
    right:0px;
    flex: 0 0 var(--default-layout-size);
    z-index: var(--z-sidebar);
    order: -1;
    padding:0;
    width: var(--default-layout-size);
    margin-left: var(--minimized-layout-size);
    height: 100%;
    background: var(--seconday-clr);
    transition: width var(--trans-05);
    overflow: hidden;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .logo--container{
      position: sticky;
      top:0;
      width: 100%;
      color:#fff;
      background: rgba(0,0,21,.2);
      align-content: center;
      justify-content: center;
      flex-wrap: nowrap;
      white-space: nowrap;
      overflow: hidden;
      flex: 0 0 55px;
      a, i, strong, .logo--txt{
         color:inherit;
      }
      a{
        display: flex;
        align-items: center;
        text-decoration: none;
       
        i{
          font-size: var(--font-size-x-large);
          margin-right: 4px;
        } 
        .logo--txt{
          flex-wrap: nowrap;
          white-space: nowrap;
          span{
            color: rgb(73, 148, 219);
          }
        }
      }
    }
    .sidebar--inner{
      padding: 0 0 1rem ;
      overflow-y:auto;
      h1, h2, h3, h4, h5, h6, p, strong, span, i, em {
          color: var(--ultra-white);
      }
      ul{
        padding: 0;
        list-style: none;
        .sidebar--item {
          .sidebar--item--inner{
            align-items: center;
            flex: 1 1 ;
            padding: 0.8445rem 1rem;
            white-space: nowrap;
            transition: 0.2s linear;
            transition-property: background, color, padding;
            color: var(--light-gray);
            i:not(.chevron__icon){
              font-size: 1.09375rem;
            }
            i.chevron__icon{
              font-size: 17px;
            }
            span{
              text-transform: capitalize;  
            }
            i, span{
              color: inherit;
            }
            text-decoration: none;  
            &:hover{
              background: var(--primary-clr) !important;
              color: var(--ultra-white) !important;
              padding-left: 1.3rem;
            }
          }
          .sidebar--item--inner.active__route{
            background: hsla(0,0%,100%,.05);
            color: var(--ultra-white);
          }
         .parent--list{
           justify-content: space-between;
           align-items: center;
           .new__badge{
             background: var(--info);
             color: var(--ultra-white);
           }
         }
          .active--nestedList{
            background: rgba(0,0,0,0.2);
            i.chevron__icon{
              transform: rotate(-90deg);
            }
          }  
          .nestedList{
              cursor: pointer;
              .nestedList--btn{
                align-items: center;
                justify-content: space-between;
              }
              .subItem--details{
                  height: auto;
                  max-height: 0;
                  overflow-y: hidden;
                  transition: max-height .3s ease-in-out;
                  .sidebar--subItem .sidebar--item--inner{
                    padding-left: 2.5rem;
                  }
              }
              .active__details{
                max-height: 1500px;
              }
          }

        }
      }
    }
  }
</style>

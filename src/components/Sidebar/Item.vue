<template>
        <div @click="(e) =>  closeSidebar(e)">
                <RouterLink exact v-if="item.path" :to="item.path" active-class="active__route" class="sidebar--item--inner parent--list flex-row">
                    <div class="d-flex align-center">
                        <v-icon class="mr-2">mdi-{{item.icon}}</v-icon>
                        <span class="route__title">{{item.title}}</span>  
                    </div>
                    <span v-if="item.isNew" class="new__badge badge">new</span>
                </RouterLink>
                <div v-else-if="item.nestedList && item.nestedList.length >0" :class="{'active--nestedList': showSubItem}" class="nestedList flex-column">
                    <div @click="() => changeActiveSublist(item.title)" class="sidebar--item--inner nestedList--btn flex-row">
                        <div class="d-flex align-center">
                            <v-icon class="mr-2">mdi-{{item.icon}}</v-icon>
                            <span>{{item.title}}</span> 
                        </div>
                        <v-icon class="chevron__icon">mdi-chevron-left</v-icon>
                    </div>
                    <ul :class="{'active__details': showSubItem}" class="subItem--details">
                        <li v-for="(subItem, idx) in item.nestedList" class="sidebar--subItem" :key="subItem.title + idx">
                            <RouterLink  exact v-if="subItem.path" :to="subItem.path" active-class="active__route" class="sidebar--item--inner flex-row">
                            <span class="route__title">{{subItem.title}}</span>
                            </RouterLink>
                        </li> 
                    </ul>
                </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        props: {
            item: Object,
            showSubItem: Boolean,
            changeActiveSublist: Function
        },
        methods:{
            ...mapActions("toggleKeys", ["mutateKeys"]),
            closeSidebar(e) {
                const tagTarget = e.target.tagName;
                if((window.innerWidth || document.documentElement.offsetWidth) < 670){
                    if( tagTarget === "A" || tagTarget === "SPAN" || tagTarget === "I"){
                        this.mutateKeys({key : "openSidebar", val: false});
                    }      
                }
            }
        }
    }
</script>
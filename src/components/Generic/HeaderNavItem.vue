<template>
    <li id="headerNavItem">
        <Dropdown :dropDetails="dropDetails">
            <slot slot="dropdown_btn" name="dropdown_btn"></slot>
        </Dropdown>
    </li>
</template>

<script>
    import Dropdown from "./Dropdown.vue";
    export default {
        name: "header_nav_item",
        components:{
            Dropdown,
        },
        props: {
            dropDetails: Object,
        },
    }
</script>

<style lang="scss" >
    #headerNavItem{
        position: relative;
    }
</style>
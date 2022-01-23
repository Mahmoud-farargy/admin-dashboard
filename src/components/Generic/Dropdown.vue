<template>
    <div id="dropdownContainer">
        <button @click="() => toggleDetails()" ref="toggle_ref" aria-label="toggle button"><slot name="dropdown_btn"></slot></button>
        <div ref="details_ref">
            <DropDetails v-if="openDetails" :dropDetails="dropDetails" :toggleFunc="toggleFunc"/>
        </div>
    </div>
</template>

<script>
    import DropDetails from "./DropDetails.vue";
    export default {
        name: "dropdown",
        data() {
            return {
                openDetails: false
            }
        },
        props: {
            dropDetails: Object,
        },
        methods: {
            toggleFunc(e) {
                        const refEls = this.$refs;
                        const target = e.target;
                        if(refEls.details_ref && refEls.toggle_ref){
                            if(!refEls.details_ref.contains(target) && !refEls.toggle_ref.contains(target)){
                                 this.openDetails = false;
                            }
                        }
            },
            toggleDetails(){ 
               this.openDetails = !this.openDetails;
               document.addEventListener("mousedown", this.toggleFunc, true);
            }
        },
        components: {
            DropDetails
        }
    }
</script>

<style lang="scss" scoped>
    #dropdownContainer{
        position:relative;
        align-items: center;
        button{
            margin-top: 2px;
            border:none;
            background: none;
        }
    }
</style>
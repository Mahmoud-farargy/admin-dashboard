<template>
    <div id="screens">   
        <!-- backdrops & modals -->
        <div class="modal--backdrop" @click="() => closeSidebar()"></div>
        <!-- header -->
        <Header />
        <!-- views -->
        <main id="mainViews">
            <transition name="fadepage" mode="out-in">
                <router-view :key="$route.fullPath"/> 
            </transition>
        </main> 
        <!-- footer -->
        <Footer />
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import { mapActions } from 'vuex';
    export default {
        components: {
            Header,
            Footer
        },
        methods: {
            ...mapActions("toggleKeys", ["mutateKeys"]),
            closeSidebar () {
                this.mutateKeys({key: "openSidebar", val: false});
            }
        }
    }
</script>

<style lang="scss" scoped>
    div#screens{
        position: relative;
        width: auto;
        background:  var(--light);
        margin-left: 0px;
        min-width: 150px;
        .modal--backdrop{
            display: none;
            z-index: var(--z-backdrop);
        }
        main#mainViews{
            overflow: hidden;
            min-height: calc(100vh - var(--height-header) - var(--height-footer) - 1rem);
            padding: 1.9rem 1.875rem 1rem;
            @media (max-width: 870px){
                padding: 1rem;
            }
            @media (max-width: 470px){
                padding: 1rem 0.7rem;
            }
        }
    }
</style>
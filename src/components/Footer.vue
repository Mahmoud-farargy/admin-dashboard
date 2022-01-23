<template>
    <footer id="footer" class="flex-row full-width">
        <span>
            <a class="author__name" href="https://mahmoud-farargy.web.app" target="_blank" rel="noopener">{{appConfig.author}}</a> &copy; 2022    
        </span>
        <span>
            Made with <a href="https://vuejs.org/v2/guide" target="_blank" rel="noopener">Vue.js</a> &amp; <a href="https://vuetifyjs.com/en/getting-started/installation/" target="_blank" rel="noopener">Vuetify</a> 
        </span>
    </footer>
</template>

<script>
    import appConfig from "@/appConfig";
    export default {
        name: "footer_component",
        data(){
            return {
                appConfig
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer{
        align-items: center;
        color: var(--seconday-clr);
        background: var(--light);
        border-top: 1px solid var(--quaternary-clr);
        min-height: var(--height-footer);
        flex: 0 0 var(--height-footer);
        margin-top: 1rem;
        padding: 0.3rem 1rem;
        gap: 0.3rem;
        flex-wrap: wrap;
        span{
            color: inherit;
            font-size: inherit;
        }
        a{
            text-decoration: none;
        }
        a:not(.author__name){
            color: var(--primary-clr);
        }
        .author__name{
            color: inherit;
        }
        @media (min-width: 670px){
          justify-content: space-between;  
        }
    }
</style>
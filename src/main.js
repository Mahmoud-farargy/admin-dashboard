import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './state/store';
import '@mdi/font/css/materialdesignicons.css';
import "./design/index.scss";
import 'bootstrap/dist/css/bootstrap.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.filter("formatNumber", function(num){
    if(typeof num !== "number") return;
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');

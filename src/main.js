import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import Routers from './routers'

Vue.use(VueAxios, axios, Routers, VueRouter)

Vue.config.productionTip = false

new Vue({
    router: Routers,
    vuetify,
    render: h => h(App)
}).$mount('#app')

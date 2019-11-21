import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Mains from '@/components/Mains'

let routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: 'mains/',
        name: 'Mains',
        component: Mains
    },
    {
        path: '/car',
        name: 'Car',
        component: require('./components/Car').default
    }
    // {
    //     path: '/about',
    //     component: require('./views/About').default
    // }
]

export default new VueRouter({
    routes
})

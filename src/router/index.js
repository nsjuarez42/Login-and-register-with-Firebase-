import {createWebHistory,createRouter} from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
const routes = [
    {path:'/',component:Login},
    {path:"/register",component:Register}

]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)  // 在vue中注入Router

// 将路径注入到Router中
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        movieRouter,
        mineRouter,
        cinemaRouter
        ,{
            path:'/*',
            redirect:'/movie'
        }
    ]
})

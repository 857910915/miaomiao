export default{
    path:'/cinema',
    component: () => import('@/views/Cinema'),
    children:[
        {
            path: 'ciList',
            component: () => import('@/components/CiList')
        }
    ]
}
var router = new VueRouter({
    routes:[
        {path:'/',component:Index},
        {path:'/details/:lid',component:Detalis,props:true},
        {path:'/login',component:Login},
        {path:'*',component:NotFound}
    ]
})
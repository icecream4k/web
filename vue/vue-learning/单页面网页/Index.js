var Index = {
    template : `
    
    <div class = 'index'>
    <my-header></my-header>
    <h1 style='color:skyblue'>这是首页</h1>
    <ul>
        <li><router-link to='/details/1'>查看1号商品详情</router-link></li>
        <li><button @click='goToDetails(5)'>查看5号商品详情</button></li>
    </ul>
    </div>
    `,
    methods:{
        goToDetails(lid){
            this.$router.push(`/details/${lid}`)
        }
    }

} 
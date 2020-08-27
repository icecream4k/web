Vue.component('my-header',{
    template:`
    
    <div class = 'my-header'>
        <h1>这里是页头</h1>
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/details">详情页</router-link></li>
        </ul>
        <br><hr><br>
    </div>
    `
})
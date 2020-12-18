var NotFound = {
    template : `
    <div class='not-found'>
    <h1 style="color:red">404：您所查找的页面不存在</h1>
    <h2 style='color:gray'>{{n}}s后自动返回首页</h2>
    </div>
    `,
    data(){
        return{
            n:3
        }
    },
    mounted(){
        //必须用箭头函数保持内外this一致
        this.timer = setInterval(()=>{
            this.n--;//每隔一秒减1
            if(this.n==0){//减到0时，返回首页，并且停止定时器
                clearInterval(this.timer);
                this.n = 3;
                this.$router.push('/');
            }
        },1000)
    }
}
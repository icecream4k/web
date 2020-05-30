const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入路由器
const userRouter=require('./routes/user.js');
const ajaxRouter=require('./routes/ajax.js');
//创建web服务器，设置端口
const app=express();
app.listen(8080);

//托管静态资源到public目录
app.use( express.static('public') );
app.use( express.static('ajax') );
//使用body-parser中间件将post请求数据解析为对象
app.use( bodyParser.urlencoded({
  extended:false
}) );

//把路由器挂载到web服务器下，并添加前缀/user
// /user/reg
app.use( '/user', userRouter );
app.use( '/test', ajaxRouter ); 
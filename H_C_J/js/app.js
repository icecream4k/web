const experss = require('express'); //创建web服务器，设置端口
const userRouter=require('./routes/user.js.js');// 引入路由器
console.log(userRouter);//如果看见对象，则成功引入路由器
const app = experss(); //创建
app.listen(8080);//设置端口

//托管静态资源到public目录，创建注册文件 user_reg.html
app.use(experss.static('public'));

// /user/reg
app.use('/user',userRouter);//把路由器挂在再web服务器下，并且添加前缀/user


const express=require('express');
//引入连接池模块       
const pool=require('../pool.js');
//创建路由器对象
let router = express.Router();
//测试接口
router.get('/ajax',function(req,res){
  console.log("我已经接收到请求了~wow");
  res.send("我的第一个ajax程序~");
  // res.send("同时又发了一句话");
});
// get方法可以使用地址栏浏览器进行验证,其他方法不能使用地址栏
// 原生get方法带参数请求
router.get("/get_http",(req,res)=>{
	var $uname = req.query.uname;
	var $upwd = req.query.upwd;
	console.log($uname+'~~~~'+$upwd);
	//使用pool操作数据库
	var sql = "select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd]),(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	};
});
router.get('/http_login',(res,req)=>{
	var $uname = req.query.uname;
	var $upwd = req.query.upwd;
	if(!$uname){
		res.send("用户名不存在");return;
	};
	if(!$upwd){
		res.send("密码不存在");return;
	};
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd]),(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	};
});
// restful的get登陆
router.get('/restful_login/:uname&:upwd',(res,req)=>{
	// var $uname=req.query.name  http的get
	var $uname=req.params.uname;
	var $pwd=req.params.upwd;
	res.send($uname+"~~~"+$upwd);
})
module.exports=router;
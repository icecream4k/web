//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器
const router=express.Router();
//添加路由
//1.用户注册 post /reg
router.post('/reg',(req,res)=>{
  //1.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //1.2验证各项数据是否为空
  //如果用户名为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	//阻止函数体往后执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'email required'});
	return;
  }
  if(!obj.phone){
    res.send({code:404,msg:'phone required'});
	return;
  }
  //1.3执行SQL语句，将数据插入到数据库
  pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	console.log(result);
    //如果数据插入成功，响应成功的对象
    res.send({code:200,msg:'reg suc'});
  });
  
});
//2.用户登陆 post /login
router.post('/login',(req,res)=>{
  //2.1获取post请求的数据
  let obj=req.body;
  console.log(obj);
  //2.2验证用户名和密码是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //2.3执行SQL语句，到数据库查询有没有用户名和密码同时匹配的数据
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//result是数组，如果数组中有元素，说明登陆成功，否则空数组说明登陆失败
    if(result.length>0){
	  res.send({code:200,msg:'login suc'});
	}else{
	  res.send({code:301,msg:'login error'});
	}
  });
});
//3.修改用户 get /update
router.get('/update',(req,res)=>{
  //3.1获取查询字符串传递的数据
  let obj=req.query;
  console.log(obj);
  //3.2验证数据是否为空
  //查看每一个值是否为空，批量的验证
  let i=400;
  for(let key in obj){//遍历对象属性
    i++;
    //key属性名  obj[key] 属性值
    //console.log(key,obj[key]);
	//如果属性值为空，响应属性名是必须的
	if(!obj[key]){
	  res.send({code:i,msg:key+' required'});
	  return;
	}
  }
  //3.3执行SQL语句
  pool.query('UPDATE xz_user SET ? WHERE uid=?',[obj,obj.uid],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//result 是一个对象
	//result下有一个属性affectedRows，如果大于0 说明修改成功，否则修改失败
    if(result.affectedRows>0){
	  res.send({code:200,msg:'update suc'});
	}else{
	  res.send({code:301,msg:'update err'});
	}
  });
  
});
//4.用户列表 get /list
router.get('/list',(req,res)=>{
  //4.1获取get传递的数据
  //查询字符串
  let obj=req.query;
  //4.2如果数据为空，设置默认值
  //页码为空，显示第1页
  if(!obj.pno) obj.pno=1;
  //每页大小为空，默认是2条件数据
  if(!obj.count) obj.count=2;
  console.log(obj);
  //4.3计算start
  let start=(obj.pno-1)*obj.count;
  //4.4将每页大小转为数值型
  obj.count=parseInt(obj.count);
  //4.5执行SQL语句
  pool.query('SELECT uid,uname FROM xz_user LIMIT ?,?',[start,obj.count],(err,result)=>{
    if(err) throw err;
	//console.log(result);
	//把查询到的数据响应到浏览器
	res.send(result);
  });
  
});
//导出路由器对象
module.exports=router;
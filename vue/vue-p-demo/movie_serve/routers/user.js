const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//1��ע��·��
router.post('/reg',(req,res)=>{
  var obj=req.body;
  console.log(obj);
	//ִ��sql���
  var sql="INSERT INTO user SET ?";
  pool.query(sql,[obj],(err,result)=>{
	if(err) throw err;
	console.log(result);
	if(result.affectedRows>0){
		res.send({code:1});
	}else{
		res.send({code:-1});
	}
  })
})
//2����֤�û����Ƿ���ע��
router.get('/yz_reg',(req,res)=>{
  var uname=req.query.uname;	
  console.log(uname);
	//ִ��sql���
  var sql="SELECT * FROM user WHERE uname=?";
  pool.query(sql,[uname],(err,result)=>{
	if(err) throw err;
	console.log(result);
	if(result.length>0){
		res.send({code:1});
	}else{
		res.send({code:-1});
	}
  })
})
//3:��¼��֤
  router.post('/login',(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  // console.log(uname,upwd);
	//ִ��sql���
  var sql="SELECT * FROM user WHERE uname=? AND upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
	// console.log(result)
	if(err) throw err;
	
	if(result.length>0){
		var uid=result[0].uid;
		res.send({code:1,uid:uid});
	}else{
		res.send({code:-1});
	}
  })
})

router.get('/want',(req,res)=>{
	var uid=req.query.uid;
	pool.query("select want from user where uid=?",[uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

module.exports=router;
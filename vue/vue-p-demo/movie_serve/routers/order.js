const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
// 插入订单
router.post('/add',(req,res)=>{
  // console.log('1111');
  req.on('data',function(buf){
	// console.log(buf.toString());
	// console.log(JSON.parse(buf.toString()));
  var obj=JSON.parse(buf.toString());
	  pool.query("insert into orders set ?",[obj],(err,result)=>{
	  if(err) throw err;
	  if(result.affectedRows>0){
	    res.send({code:200,msg:"插入成功"});
	  }else{
	    res.send({code:400,msg:"插入失败"});
	  }
	})
  })
})
// 查询订单
router.get('/getOrder',(req,res)=>{
  var obj=req.query;
  pool.query("select * from orders where cid=? and mid=? and date=? and time=? and price=? and roomid=?",[obj.cid,obj.mid,obj.date,obj.time,obj.price,obj.roomid],(err,result)=>{
    if(err) throw err;
    res.send(result)
  })
})

router.get('/getUserOrder',(req,res)=>{
  pool.query("select * from orders where uid=? order by oId desc",[req.query.uid],(err,result)=>{
   if(err) throw err;
   res.send(result)
  })
 })

module.exports=router;
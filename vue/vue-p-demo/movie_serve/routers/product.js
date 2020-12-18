const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
// 查询小吃信息
router.get('/',(req,res)=>{
  var obj={};
  pool.query("select * from foods",[],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      obj.code=200;
      obj.res=result;
      res.send(obj);
    }else{
      obj.code=404;
      res.send(obj);
    }
  })
})
module.exports=router;

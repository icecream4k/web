const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
// 查询所有电影页和首页轮播
router.get('/',(req,res)=>{
  var output={};
  (async function(){
    await Promise.all([
    new Promise((resolve,reject)=>{
      pool.query("select * from carousel",[],(err,result)=>{
        if(err) throw err;
        var res="";
        result.forEach(elem=>{
          res+=elem.pic+"&"
        })
        res=res.slice(0,-1);
        output.pic=res;
        resolve();
      })
    }),
    new Promise((resolve,reject)=>{
      pool.query("select * from movies",[],(err,result)=>{
        if(err) throw err;
        output.movie=result;
        resolve();
      })
    })
  ])
    res.send(output);
  })()
})
// 查询电影详情页与想看列表
router.get('/detailAndWant',(req,res)=>{
  var mid=req.query.mid;
  var uid=req.query.uid;
  var output={};
  (async function(){
    await Promise.all([
      new Promise((resolve,reject)=>{
        pool.query("select * from movies where mid=?",[mid],(err,result)=>{
          if(err) throw err;
          output.movie=result;
          resolve();
        })
      }),
      new Promise((resolve,reject)=>{
        pool.query("select want from user where uid=?",[uid],(err,result)=>{
          if(err) throw err;
          console.log(result)
          if(result.length==0){
            output.want=null
          }else{
            output.want=result[0].want;
          }
          resolve();
        })
      })
    ])
    res.send(output)
  })() 
})
// 查询电影详情页
router.get('/detail',(req,res)=>{
  var mid=req.query.mid;
  pool.query("select * from movies where mid=?",[mid],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
// 查询对应城市的电影院页
router.get('/cinema',(req,res)=>{
  var cityId=req.query.cityId;
  var obj={};
  pool.query("select cid,cName,loca from cinemas where cityId=?",[cityId],(err,result)=>{
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
// 查询电影详情页
router.get('/cinemaDetail',(req,res)=>{
  var cid=req.query.cid;
  pool.query("select * from cinemas where cid=?",[cid],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send(result[0]);
    }else{
      res.send("404");
    }
  })
})
// 插入想看列表
router.get('/want',(req,res)=>{
  var output={};
  console.log(req.query.mid,req.query.watcher);
  // console.log(req.query.want,req.query.uid)
  (async function(){
    await Promise.all([
      new Promise((reslove,reject)=>{
        pool.query("update user set want=? where uid=? ",[req.query.want,req.query.uid],(err,result)=>{
          if(err) throw err;
          if(result.affectedRows>0){
            output.code1=200;
          }else{
            output.code1=400;
          }
          reslove();
        })
      }),
      new Promise((reslove,reject)=>{
        pool.query("update movies set watcher=? where mid=?",[req.query.watcher,req.query.mid],(err,result)=>{
          if(err) throw err;
          if(result.affectedRows>0){
            output.code2=200;
          }else{
            output.code2=400;
          }
          reslove();
        })
      })
    ])
    res.send(output);
  })()
})

// 查询想看列表
router.get('/wantList',(req,res)=>{
  var want=req.query.want;
  var sql=`select * from movies where mid in (${want})`;
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})


module.exports=router;
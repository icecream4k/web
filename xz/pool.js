//引入mysql模块
const mysql=require('mysql');
//既可以使用普通的连接，也可以是连接池
//创建连接池对象
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'xz',
  connectionLimit:20//设置连接池的大小，默认15个
});
//导出连接池对象
module.exports=pool;
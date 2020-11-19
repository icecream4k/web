// common.js的模块化规范导入方式
const {add,mul} = require('./js/mathUtils')
console.log(add(20,40));
console.log(mul(20,30)); 

// ES6的模块化规范导入方式
import { name,age,height } from "./js/info";
console.log(name);
console.log(age);
console.log(height);


// 依赖css文件
require('./css/normal.css')

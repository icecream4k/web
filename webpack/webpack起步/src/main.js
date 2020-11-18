// common.js的模块化规范导入方式
const {add,mul} = require('./mathUtils')
console.log(add(20,40));
console.log(mul(20,30)); 

// ES6的模块化规范导入方式
import { name,age,height } from "./info";
console.log(name);
console.log(age);
console.log(height);
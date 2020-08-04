// function saoma_01() {
//   let c = document.getElementById("denglu_div_01");
//   c.innerHTML = `
// 	<iframe src="../html/denglu_01.html" scrolling="no" height="350px"
// 	 width="355px"
// 	 frameborder="0"
// 	 margin-left:-5px
// 	 align='center'></iframe>
// 	`;
// }
//
// function saoma_02() {
//   let c = document.getElementById("denglu_div_01");
//   c.innerHTML = `
// 	<iframe src="../html/denglu_02.html" scrolling="no" height="350px"
// 	 width="355px"
// 	 frameborder="0"
// 	 margin-left:-5px
// 	 align='center'></iframe>
// 	`;
// }
// --------------------------
console.log("hello world");
// --------------------------
var x = 1;
var y = 1;
console.log("x", x, "y", y);
// --------------------------
var eid = 3;
var ename = "tom";
var sex = 1;
var birthday = "1990-2-1";
var salary = 8000;
var deptId = 20;
console.log(
  "eid:",
  eid,
  "ename:",
  ename,
  "sex:",
  sex,
  "birthday:",
  birthday,
  "salary:",
  salary,
  "deptId:",
  deptId
);
// --------------------------
var d;
d = 1;
console.log(d);
// --------------------------
var f1 = 3.14;
console.log("f1的数据类型是:", typeof f1);
// --------------------------
var a = "韩";
console.log("韩的unicode编码是:", a.charCodeAt());
// --------------------------
var a = 1,
  b = true,
  c = "han";
result1 = a + b + c;
result2 = b + c + a;
result3 = c + a + b;
console.log("a + b + c的结果是", result1, "类型是:", typeof result1);
console.log("b + c + a的结果是", result2, "类型是:", typeof result2);
console.log("c + a + b的结果是", result3, "类型是:", typeof result3);
// --------------------------
// 假设已经从数据库中获取到了商品的标题和价格,把这些数据打印成一行
var title = "macbook pro";
var price = 15999;
console.log("商品名:", title, "价格:", price);
// --------------------------
// 查看一个人的工资是否在5K-7K之间
var salary = 8000;
console.log(salary > 5000 && salary < 7000);
// --------------------------
// 声明变量分别保存用户名和密码,如果用户名是root并且密码是123456,打印true,否则打印false
var uname = "root";
var upwd = 123456;
console.log(uname === "root" && upwd === 123456);
// --------------------------
// 查看一个人是否符合免票的标准-老人或者儿童,是否满足60岁以上或者12岁以下
var age = 31;
console.log(age >= 60 || age <= 12);
// --------------------------
// 声明一个变量保存用户输入的值,如果输入的是用户名root,或者邮箱user@jd.com,或者手机号码13000000000,打印true,否则打印false
var uname = "root";
console.log(
  uname === "root" || uname === "user@jd.com" || uname === "13000000000"
);
// --------------------------
// 声明变量保存人的年龄,如果满18岁,打印成年人
var age = 24;
age > 18 && console.log("成年人");
// --------------------------
var a = 1;
// 在原来的基础上加1
// a++;
// a = a+1; // 等同于上面的写法
// 先获取到a的值执行加1,把结果再赋给a
a += 2; // 计算赋值,先执行计算,再执行赋值
console.log(a);
// --------------------------
// 声明变量保存商品的单价，让该商品打9折，最后打印当前价格
var price = 100;
price *= 0.9;
console.log(price);
// --------------------------
// 如果一个人满18岁，打印成年人，否则打印从未成年人
var age = 17;
var s = age >= 18 ? "成年人" : "未成年人";
console.log(s);
// --------------------------
// 声明变量保存一个人的性别值 1/0 ，如果值是1打印男，否则打印女
var sex = 1;
var sex = 1 ? "男" : "女";
console.log(sex);
// --------------------------
// alertx
// alert('web')
// 弹出提示(输入)框
// var str = prompt('input your number:');
// console.log(str);
// --------------------------
// 弹出两次提示框，要求用户输入谁，最后计算两个数字相加的和，并将结果以警示框形式弹出
// var number1 = parseInt(prompt('input your first number:'))
// var number2 = parseInt(prompt('input your second number:'))
// alert(number1+number2)
// --------------------------
var money = 90;
if(money>30){
    console.log('满三十减而是之后的金额为:',money-20);
}






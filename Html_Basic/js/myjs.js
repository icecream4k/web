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
// 声明变量保存商品的单价,让该商品打9折,最后打印当前价格
var price = 100;
price *= 0.9;
console.log(price);
// --------------------------
// 如果一个人满18岁,打印成年人,否则打印从未成年人
var age = 17;
var s = age >= 18 ? "成年人" : "未成年人";
console.log(s);
// --------------------------
// 声明变量保存一个人的性别值 1/0 ,如果值是1打印男,否则打印女
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
// 弹出两次提示框,要求用户输入谁,最后计算两个数字相加的和,并将结果以警示框形式弹出
// var number1 = parseInt(prompt('input your first number:'))
// var number2 = parseInt(prompt('input your second number:'))
// alert(number1+number2)
// --------------------------
var money = 90;
if (money > 30) {
  console.log("满三十减而是之后的金额为:", money - 20);
}
// --------------------------
// 声明变量来保存个人签名,如果签名内容为空,则设置默认内容为'这家伙很懒,什么也没留下',最后打印签名内容
var autograph01 = "";
var autograph02 = "今天天气真好";
if (autograph01 != false) {
  console.log(autograph01);
} else {
  console.log("这家伙很懒,什么都没留下");
}
// --------------------------
// 声明变量分别保存用户名和密码,如果用户是root,并且密码是123456,打印'登陆成功',否则打印'用户名或密码错误'
var uid = "root";
var upwd = "123456";
if (uid == "root" && upwd == "123456") {
  console.log("登陆成功");
} else {
  console.log("用户名或密码错误");
}
// --------------------------
// 根据政治面貌判断加分情况
var type = "党员";
if (type === "党员") {
  console.log("加五分");
} else if (type === "入党积极分子") {
  console.log("加两分");
} else if (type === "团员") {
  console.log("加一分");
} else {
  console.log("不加分");
}
// --------------------------
// 声明变量保存年份,如果是闰年打印'闰年',否则打印'平年';闰年判断:能被4整除,并且不能被100整除,或者能被400整除
var year = 2011;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("是闰年");
} else {
  console.log("不是闰年");
}
// --------------------------
// 分别弹出两次提示框,要求用户输入商品的单价和数量,计算出总价,如果总价满600打9折；假设卡内余额有1000,如果足以支付,警示框弹出'pay success',否则警示框弹出'pay error'
// var price = parseFloat(prompt("请输入单价"));
// var number = parseFloat(prompt("请输入数量"));
// var total = price * number;
// var money = 1000;
// if(total >= 600){
//     total*=0.9;
//     if(money>=total){
//         console.log('可以支付，支付金额为:',total,'剩余金额为:',money-total)
//     }else{
//         console.log('金额不足，还差',total-money,'元')
//     };
// }else{
//     if(money>=total){
//         console.log('可以支付，支付金额为:',total,'剩余金额为:',money-total)
//     }else{
//         console.log('金额不足，还差',total-money,'元')
//     };
// };
// --------------------------
// 声明变量保存一个人的成绩,90以上打印'优秀',80-90打印'良好',70-80打印'中等',60-70打印'及格',否则打印'不及格'
// var Student_achievement = parseFloat(prompt("请输入成绩"));
// if (Student_achievement > 90) {
//   console.log("优秀");
// } else if (80 < Student_achievement && Student_achievement <= 90) {
//   console.log("良好");
// } else if (70 < Student_achievement && Student_achievement <= 80) {
//   console.log("中等");
// } else if (60 < Student_achievement && Student_achievement <= 70) {
//   console.log("及格");
// } else {
//   console.log("不及格");
// };
// --------------------------


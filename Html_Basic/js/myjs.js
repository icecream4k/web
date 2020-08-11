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
//         console.log('可以支付,支付金额为:',total,'剩余金额为:',money-total)
//     }else{
//         console.log('金额不足,还差',total-money,'元')
//     };
// }else{
//     if(money>=total){
//         console.log('可以支付,支付金额为:',total,'剩余金额为:',money-total)
//     }else{
//         console.log('金额不足,还差',total-money,'元')
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
// 根据星期的代码值(0-6)打印不同的代码
var day = 5;
switch (day) {
  case 0:
    console.log("拔丝地瓜");
    break;
  case 1:
    console.log("肉末茄子");
    break;
  case 2:
    console.log("蒜泥白肉");
    break;
  case 3:
    console.log("西红柿炒鸡蛋");
    break;
  case 4:
    console.log("辣椒炒肉");
    break;
  case 5:
    console.log("韭菜炒香干");
    break;
  case 6:
    console.log("萝卜丝炒肉");
    break;
  case 7:
    console.log("炖鱼头");
    break;
  default:
    console.log("喝粥");
}
// --------------------------
// 根据订单的状态码打印对应的汉子状态；1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其他-无法跟踪
var Status_code = 3;
switch (Status_code) {
  case 1:
    console.log("等待付款");
    break;
  case 2:
    console.log("等待发货");
    break;
  case 3:
    console.log("运输中");
    break;
  case 4:
    console.log("已签收");
    break;
  case 5:
    console.log("已取消");
    break;
  default:
    console.log("无法跟踪");
}
// --------------------------
// 循环打印0-9
var number = 0;
while (number <= 9) {
  console.log("0-9:", number);
  number += 1;
}
// --------------------------
// 打印10-20之间所有的整数
var number = 10;
while (number <= 20) {
  console.log("10-20:", number);
  number += 1;
}
// --------------------------
// 使用循环打印80 75 70 65 60
var number = 80;
while (number > 60) {
  console.log("80-60", number);
  number -= 5;
}
// --------------------------
// 计算1-100之间所有的整数的和
var frequency = 1; // 次数
var value = 0; // 值
while (frequency <= 100) {
  value += frequency;
  frequency += 1;
}
console.log("1-100的和是", value);
// --------------------------
// 计算出100-200之间所有奇数的和
var i = 100;
var sum = 0;
while (i <= 200) {
  if (i % 2 === 1) {
    sum += i;
  }
  i++;
}
console.log("100-200奇数的和:", sum);
// --------------------------
// 使用break循环产生1-10之间所有整数,并计算他们的乘积
var number = 1;
var sum = 1;
while (number < 10) {
  number++;
  sum *= number;
}
console.log("1-10的乘积是:", sum);
// --------------------------
var i = 0;
do {
  //循环体
  console.log("i:", i);
  i++;
} while (i < 10); //循环条件
// --------------------------
// 打印30-50之间所有整数
var i = 30;
do {
  console.log("30-50", i);
  i++;
} while (i <= 50);
// --------------------------
// 打印70 65 60 55 50
var i = 70;
do {
  console.log("70-50:", i);
  i -= 5;
} while (i >= 50);
// --------------------------
// 打印1-100之间所有能被3整除的数字
var i = 1;
do {
  if (i % 3 === 0) {
    console.log("1-100能被3整除的数:", i);
  }
  i++;
} while (i <= 100);
// --------------------------
// 计算1-100之间所有整数的和
var i = 1;
var sum = 0;
do {
  sum += i;
  i++;
} while (i <= 100);
console.log("1-100整数的和:", sum);
// --------------------------
// 计算1-30之间所有能被3整除或者能被4整除的数字的乘积
var i = 1;
var sum = 1;
do {
  if (i % 3 === 0 || i % 4 === 0) {
    sum *= i;
  }
  i++;
} while (i <= 30);
console.log("1-30之间被3,4整除的乘积:", sum);
// --------------------------
// 声明变量保存密码'123456',死循环弹出提示框，并且输入密码，如果输入正确结束循环
// var password = '123456';
// while(true){
//     var pwd = prompt('请输入密码:');
//     if(password===pwd){
//         break
//     };
// }
// var password = '123456';
// do{
//     var pwd = prompt('请输入密码:');
// }while(pwd!==password);
// --------------------------
// 打印0-9
for (var i = 0; i <= 9; i++) {
  console.log("0-9", i);
}
// --------------------------
// 打印 75 80 85 90
for (var i = 75; i <= 90; i += 5) {
  console.log("75-90:", i);
}
// --------------------------
// 打印100-50之间所有整数
for (var i = 100; i >= 50; i--) {
  console.log("100-50:", i);
}
// --------------------------
// 计算1-100之间所有整数的和
for (var i = 1, sum = 0; i <= 100; i++) {
  sum += i;
}
console.log("1-100的和:", sum);
// --------------------------
// 多个循环条件，只是最后一个起作用
for (var i = 1, j = 5; j > 1, i < 10; i++, j--) {
  console.log("i:", i, "j:", j);
}
// --------------------------
// 打印1-10之间所有在整数，不包括4
for (var i = 1; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log("1-10不包括4:", i);
}
// --------------------------
// 打印1-100之间所有的奇数;使用continue，如果遇到偶数就跳过
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("奇数是:", i);
}
// --------------------------
// 打印1-100之间所有的整数，不包含所能被7整除或9整除的数字
for (var i = 1; i <= 100; i++) {
  if (i % 7 === 0 || i % 9 === 0) {
    continue;
  }
  console.log("1-100不被7 9整除的数;", i);
}
// --------------------------
// 本世纪(2000-2099)的前10个闰年
var number = 1;
for (var year = 2000; year <= 2099; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
    if (number <= 10) {
      console.log("2000-2099年前10个闰年是:", year);
      number++;
    }
  }
}
// --------------------------
// 计算1-100之间所有整数的和，当和大于4000的时候，提前结束循环，并且打印出此时总和是多少，以及当前循环到了哪个数字
var number = 0;
for (var i = 0; i <= 100; i++) {
  if (number > 4000) {
    break;
  }
  number += i;
}
console.log("总和是:", number, "此时的循环数字是:", i);
// --------------------------
// 循环打印九九乘法表第5行
// 1x1 = 1
// 1x2 = 2 2x2 = 4
// 1x3 = 3 2x3 = 6 3x3 = 9
for (var i = 1; i <= 9; i++) {
  var str = "";
  for (var k = 1; k <= 9; k++) {
    if (i >= k) {
      str += k + "x" + i + "=" + i * k + " ";
    }
  }
  console.log(str);
}
// --------------------------
function say() {
  // 函数体
  console.log("hello");
  console.log("world");
  console.log("function");
}
// 调用
// say();
// say();
// say();
// 循环调用
// for(var i = 0;i<3;i++){
//     say()
// };
// --------------------------
// 创建函数，封装计算 2 + 3
function getSum() {
  var number = 2 + 3;
  return number;
}
console.log(getSum());
// --------------------------
// 计算任意两个数字相加的和
function add(number1, number2) {
  var result = number1 + number2;
  return result;
}
console.log("两个数字相加:", add(1, 2));
// --------------------------
// 创建函数getSum,计算1~任意数字之间所有整数的和
function getsumadd(number) {
  var i = 1;
  var sum = 0;
  do {
    sum += i;
    i++;
  } while (i <= number);
  console.log("1-",number,"整数的和:", sum);
}
getsumadd(number = 100)
// --------------------------

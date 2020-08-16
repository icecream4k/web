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
// 分别弹出两次提示框,要求用户输入商品的单价和数量,计算出总价,如果总价满600打9折;假设卡内余额有1000,如果足以支付,警示框弹出'pay success',否则警示框弹出'pay error'
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
// 根据订单的状态码打印对应的汉子状态;1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其他-无法跟踪
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
// 声明变量保存密码'123456',死循环弹出提示框,并且输入密码,如果输入正确结束循环
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
// 多个循环条件,只是最后一个起作用
for (var i = 1, j = 5; j > 1, i < 10; i++, j--) {
  console.log("i:", i, "j:", j);
}
// --------------------------
// 打印1-10之间所有在整数,不包括4
for (var i = 1; i <= 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log("1-10不包括4:", i);
}
// --------------------------
// 打印1-100之间所有的奇数;使用continue,如果遇到偶数就跳过
for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("奇数是:", i);
}
// --------------------------
// 打印1-100之间所有的整数,不包含所能被7整除或9整除的数字
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
// 计算1-100之间所有整数的和,当和大于4000的时候,提前结束循环,并且打印出此时总和是多少,以及当前循环到了哪个数字
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
// 创建函数,封装计算 2 + 3
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
  console.log("1-", number, "整数的和:", sum);
}
getsumadd((number = 100));
// --------------------------
// 创建函数getRun,计算任意两个年份之间闰年个数,调用多次
function getRun(startyear, endyear) {
  var parameter = 0;
  if (startyear < endyear) {
    for (startyear; startyear <= endyear; startyear++) {
      if (
        (startyear % 4 === 0 && startyear % 100 !== 0) ||
        startyear % 400 == 0
      ) {
        parameter += 1;
      }
    }
    return parameter;
  } else if (startyear > endyear) {
    for (startyear; startyear >= endyear; startyear--) {
      if (
        (startyear % 4 === 0 && startyear % 100 !== 0) ||
        startyear % 400 == 0
      ) {
        parameter += 1;
      }
    }
    return parameter;
  } else {
    if (
      (startyear % 4 === 0 && startyear % 100 !== 0) ||
      startyear % 400 == 0
    ) {
      parameter += 1;
    }
    return parameter;
  }
}
start = 2005;
end = 1999;
console.log(start, end, "两个年份之间的闰年年份是:", getRun(start, end));
// --------------------------
// 创建函数getMax,返回任意两个数字中的最大值
function getMax(firstnumber, endnumber) {
  // if(firstnumber>endnumber){
  //     return firstnumber
  // }else if(firstnumber<endnumber){
  //     return endnumber
  // }else{
  //     return '相等'
  // }
  // 三目运算符
  return firstnumber > endnumber ? firstnumber : endnumber;
}
console.log("比较两个数后的最大数是:", getMax(6, 8));
// --------------------------
// 创建函数getMax2,返回任意三个数字中的最大值
function getMax2(firstnumber, secondnumber, thirdnumber) {
  if (firstnumber > secondnumber) {
    if (secondnumber > thirdnumber) {
      return firstnumber;
    }
    return thirdnumber;
  }
  return firstnumber;
}
console.log(getMax2(3, 4, 6));
// --------------------------
// 全局作用域
var chengguan_a = "杭州市城管"; // 全局变量
function xihu() {
  var chengguan_b = "西湖区城管"; // 局部变量
  console.log(chengguan_a);
}
xihu();
function gongshu() {
  var chengguan_c = "拱墅区城管";
}
// console.log(chengguan_b) // 是找不到chengguan_b的,因为chengguan_b在xihu()函数内部,所以是局部变量
// --------------------------
// 声明全局变量n2
var n2;
function fn() {
  // 不推荐
  n1 = 2; // n1没有加var,就是全局变量,给全局变量重新赋值
  n2 = 5;
}
fn();
// 访问全局变量n1
console.log("n1:", n1, "n2:", n2);
// --------------------------
function fun() {
  var m1 = (m2 = m3 = 8);
}
fun();
// console.log('m1',m1); // m1局部
// console.log('m2',m2); // m2全局
// console.log('m3',m3); // m3全局
// --------------------------
a = 1; // 在console.log之前进行赋值
console.log(a); // 可以打印
var a; // 声明提升
// --------------------------
var n = 9;
function fun() {
  console.log(n);
  var n = 0;
}
fun();
// --------------------------
function fn1(n) {
  // 形参是一个局部变量
  // 赋值 var n = 5;
  // 函数体
  console.log(n);
}
fn1(5);
console.log(n);
// --------------------------
// 全局作用域下的函数
var n = 1;
function tn() {
  // 局部函数
  var n = 2;
  function tn1() {
    console.log("局部函数打印的n是:", n);
  }
  tn1();
}
tn();
// tn1(); // 在全局是调不到tn函数内部的tn函数的
// --------------------------
// 递归
var number = 0;
function ft() {
  alert("2333");
  number++;
  if (number === 3) {
    return;
  }
  ft();
}
// ft();
// --------------------------
// 使用递归计算1~n之间所有整数的和
function getSum_recursion(n) {
  // 跳出条件:当n为1到时候,返回1
  if (n === 1) {
    return 1;
  }
  // 前n的和,等价于n+前n-1项的和
  return n + getSum_recursion(n - 1);
}
console.log("递归之后的结果是:", getSum_recursion(5));
// --------------------------
// 匿名函数
// function(){
//     var i = 1;
// }
// 函数表达式创建
// 把匿名函数赋给了变量,此时的变来那个名称就是函数名称
var fun01 = function () {
  console.log("匿名函数内部打印:", 1);
  return 1;
};
// 调用
fun01();
console.log(fun01());
// --------------------------
// 使用函数表达式创建函数getSum,计算两个数字之间所有整数的和,并返回结果
var gs = function getSum(firstnumber, endnumber) {
  var sum = 0;
  for (firstnumber, endnumber; firstnumber <= endnumber; firstnumber++) {
    sum += firstnumber;
  }
  return sum;
};
console.log("函数内处理范围内的和:", gs(1, 100));
// --------------------------
// 匿名函数的自调用
(function () {
  let num = 1;
  console.log("匿名函数内部自调用:", num);
})();
// --------------------------
function gohome(a) {
  console.log("女朋友到家了");
  a();
}
function sendMsg() {
  console.log("我到家了,放心吧");
}
gohome(sendMsg);
// --------------------------
// 回调函数
function hua(a) {
  console.log("开始跑");
  console.log("跑到了终点");
  // 让ran开始跑
  a();
}
function ran() {
  console.log("我到了终点了,请放心吧");
}
hua(ran);
// --------------------------
function URIcode() {
  let uri = "https://www.jd.com/search?keyword=笔记本";
  // 编码为URI,就是将非英文字符编码
  let str = encodeURI(uri);
  console.log("用encode转码之前:", uri);
  console.log("用encode转码之后:", str);
  let str2 = decodeURI(str);
  console.log("将已经编码的URI进行解码:", str2);
}

URIcode();
// --------------------------
// 声明变量保存任意数据,检测该数据是否为数值,如果不是数值,打印'请提供一个数字'
(function () {
  let numbers = "411";
  if (isNaN(numbers)) {
    console.log("请提供一个数字");
  } else {
    console.log("全是数字");
  }
})();
// --------------------------
// 创建对象-对象字面量
(function () {
  let person = {
    name: "阿龙",
    // name 是属性名 '然哥' 是属性值
    gender: "男",
    age: 18,
    hairNumber: 999,
  };
  console.log("对象person:", person);
})();
// --------------------------
// 创建一个手机对象,包含有颜色,尺寸,品牌,产地;
(function () {
  let phone = {
    "made-in": "china",
    color: "red",
    size: "6.6",
    brand: "apple",
  };
  console.log("手机对象:", phone);
  // 访问对象中的属性
  console.log("手机对象中的color属性", phone.color);
  // 修改属性值
  phone.size = 5.9;
  console.log("修改完属性值的手机对象:", phone);
  // 添加新的属性
  phone.os = "ios";
  console.log("添加新的舒心的手机对象:", phone);
  // 属性名中含有特殊字符
  // console.log(phone.'made-in') // 报错
  console.log(phone["made-in"]); // 正确写法
})();
// --------------------------
// 创建图书对象,包含图书的编号,标题,价格,作者;打印图书作者,修改图书的价格,添加图书出版社;最终打印该对象
(function () {
  let book = {
    uid: 101,
    title: "JavaScript权威指南",
    price: 80,
    author: "淘宝前端团队",
  };
  console.log("图书对象:", book);
  console.log("图书的作者:", book.author);
  book.price = 90;
  console.log("修改了的图书价格:", book.price);
  book.press = "浙江出版社";
  console.log("最终修改的图书对象:", book);
})();
// --------------------------
// 使用内置构造函数创建对象
(function () {
  // new Object(); // 构造函数特点 -> 需要使用new来调用,返回一个对象
  let car = new Object();
  (car.color = "白色"), (car.brand = "五菱宏光");
  console.log(car);
})();
// --------------------------
// 创建城市对象,包含名称,肺炎人数,治愈人数,死亡人数
(function () {
  let city = new Object();
  city.name = "纽约";
  city.number_of_pneumonia_cases = 54543;
  city.number_of_patients_cured = 45521;
  city.death_toll = 3123;
  console.log(city);
})();
// --------------------------
// 创建保存用户数据的对象,包含有编号,用户名,密码,邮箱,手机,注册时间,性别,真实姓名
(function () {
  let user = new Object();
  user.id = 101;
  user.name = "han";
  user.password = "123456";
  user.email = "hanlong5716@163.com";
  user.phone = "132xxxxxxxx";
  user.registration_time = "2020.08.15";
  user.gender = "man";
  user.gender = "hanlong";
  console.log(user);
})();
// --------------------------
// 创建保存商品数据的对象,包含有编号,标题,价格,图像路径
(function () {
  let commodity = new Object();
  commodity.id = 001;
  commodity.title = "伊利";
  commodity.price = 24;
  commodity.img_address = "/usr/img";
  console.log(commodity);
})();
// --------------------------
// 创建函数,函数的参数是另一个函数,在函数中计算任意两个数字相加的和.最后在函数中调用传递的这个函数
(function () {
  function receive(x, fn, en) {
    let sum = fn + en;
    x(sum);
  }
  function result(value) {
    console.log("使用回调函数处理之后的值是:", value);
  }
  receive(result, 4, 6);
})();
// --------------------------
(function () {
  let person = {
    name: "han",
    age: 18,
    gender: "man",
  };
  // 依次访问每个,属于循环
  for (let key in person) {
    // key 代表对象中的每个属性名
    console.log("遍历的属性名:", key, "遍历的值:", person[key]);
  }
})();
// --------------------------
// 创建对象,保存一个学生的若干成绩,遍历所有的成绩,计算出总成绩
(function () {
  let student_achievement = {
    chinese: 85,
    math: 91,
    english: 74,
    literature_review: 170,
  };
  let total_score = 0;
  for (let key in student_achievement) {
    console.log("科目:", key, "成绩:", student_achievement[key]);
    total_score += student_achievement[key];
  }
  console.log("总成绩是:", total_score);
})();
// --------------------------
(function () {
  let car = {
    color: "white",
    brand: "五菱之光",
    madeIn: "china",
  };
  // 检测属性是否存在
  // 传统方式 true 不存在  false 存在
  console.log(car.color === undefined);
  // 使用方法检测
  // true 存在 false 不存在
  console.log(car.hasOwnProperty("color"));
  // 使用in关键字
  // true 存在 false 不存在
  console.log("madeIn" in car);
})();
// --------------------------
// 创建商品对象,包含商品的编号,名称,价格；判断是否存在产地,如果不存在则添加该属性；
// 判断是否存在价格,如果存在则将价格在原来的基础上加1000,最后打印该对象
(function () {
  let commodity = new Object();
  commodity.id = 101;
  commodity.name = "iphone";
  commodity.price = 6980;
  console.log("原commodity:", commodity);
  if ("made" in commodity) {
    console.log("commodity have made");
  } else {
    console.log("commodity not have made");
    console.log("loading...");
    commodity["made"] = "china";
    console.log("更变后的commodity:", commodity);
  }
  if ("price" in commodity) {
    console.log("存在price,在原有基础上增加1000");
    commodity.price += 1000;
    console.log("更变之后的commodity:", commodity);
  }
})();
// --------------------------
(function () {
  let person = {
    name: "han",
    age: 18,
    gender: "man",
    // 方法是个匿名函数
    play: function () {
      // 找当前所在的对象,和对象的变量名称无关
      // this 指代当前所在的对象
      console.log(this.name, "撸码");
    },
  };
  person.play();
})();
// --------------------------
// 创建一个圆对象,包含有半径和圆周率属性,添加计算圆的周长和面积两个方法.最后调用两个方法
(function () {
  let circular = {
    radius: 4,
    pi: 3.14,
    perimeter: function () {
      console.log("周长是:", 2 * this.pi * this.radius);
    },
    // c = 2πr
    area: function () {
      console.log("面积是:", this.pi * this.radius * this.radius);
    },
    // a = πr平方
  };
  circular.perimeter();
  circular.area();
})();
// --------------------------
(function () {
  // 原始类型数据的存储
  let a = 1;
  // 把a中的值赋值给了b,拷贝了一份给b
  let b = a;
  // 修改a,b不受影响
  a += 1;
  console.log(b);

  // 应用类型数据的存储
  let han = {
    color: "red",
    size: "xxl",
  };
  console.log("原来的泳衣", han);
  // 把对象的地址赋予了另一个变量
  let zhang = han;
  console.log("借过来的泳衣", zhang);
  zhang.color = "green";
  zhang.size = "xxxl";
  console.log("原来的泳衣,受到了影响:", han);
  zhang = null;
  han = null;
  // null 空,类型是对象object
  // null表示对象,不指向任何的堆内存空间
  // 如果堆内存中的对象不被任何的地址指向,则该数据就会销毁
  // 赋值为null,就不再指向
})();
// --------------------------
(function () {
  // 创建数组保存一组学生的姓名
  // 数组字面量 使用方式和python列表类似
  let student = ["xukun", "zhangshuyan"];
  console.log(student[0]);
  for (let i = 0; i < student.length; i++) {
    console.log("学生姓名:", student[i]);
  }
})();
// --------------------------
// 创建数组,包含有一组笔记本数据
(function () {
  let notebook = ["thinkpad", "macbook", "magicbook", "msi"];
  for (let value = 0; value < notebook.length; value++) {
    console.log("遍历出来的笔记本信息:", notebook[value]);
  }
})();
// 创建数组,包含一组城市名称
(function () {
  let city = ["hangzhou", "beijing", "shanghai"];
  city[3] = "roma"; // 添加值
  city[6] = "paris"; // 可以跳跃添加,但是中间的值就是undefined
  for (let city_index = 0; city_index < city.length; city_index++) {
    console.log("遍历之后的城市是:", city[city_index]);
  }
})();
// --------------------------
// 创建数组,包含有多个爱好,修改其中的一个爱好,单独添加一个新的爱好,打印数组
(function () {
  let hobby = ["playgame", "eatfood"];
  hobby[1] = "tour";
  hobby[hobby.length] = "read";
  console.log(hobby);
})();
// --------------------------
// 内置构造函数
(function () {
  let car = new Array("五菱宏光", "比亚");
  console.log(car, typeof car);
  let course = new Array(5);
  console.log(course);
})();
// --------------------------
(function () {
  // 创建数组,保存多个用户名
  let id = Array("han", "zhang", "liu", "fang");
  console.log("用户名:", id);
  // 创建数组,初始化数组元素个数为5,添加篮球场上5个位置
  let position = Array(5);
  position[0] = "Power_forward";
  position[1] = "Small_forward";
  position[2] = "Center_forward";
  position[3] = "point_guard";
  position[4] = "Point_guard";
  console.log("篮球场上5个位置:", position);
})();
// --------------------------
// 创建一个空数组,使用数组长度王数组中添加若干个课程名称
(function () {
  let curriculum = Array();
  curriculum[curriculum.length] = "chinese";
  curriculum[curriculum.length] = "math";
  curriculum[curriculum.length] = "english";
  console.log(curriculum);
})();
// --------------------------
// 创建数组,包含有多个商品的数据,其中每个数据包含有编号,名称,图片路径,价格
(function () {
  let laptop = [
    { lid: 3, title: "外星人", pic: "wai.png", price: 12888 },
    { lid: 5, title: "联想", pic: "lian.png", price: 3799 },
  ];
  console.log(laptop);
})();
// --------------------------
(function () {
  let person = [];
  person["name"] = "han";
  person["gender"] = "man";
  person["age"] = 18;
  console.log("原数组", person);
  for (let key in person) {
    console.log("下标:", key, "值:", person[key]);
  }
})();
// --------------------------
// 创建索引数组,包含有若干个成绩,计算出平均成绩是多少
(function () {
  let result = [];
  result["math"] = 86;
  result["chinese"] = 79;
  result["english"] = 89;
  let sum = 0;
  let number = 0;
  for (let key in result) {
    sum += result[key];
    number += 1;
  }
  console.log("平均数是:", sum / number);
  // 使用循环来计算总分
  let usum = 0;
  for (let key in result) {
    usum += result[key];
  }
  console.log("总分数是:", usum);
})();
// --------------------------
// 创建数组,包含对个姓名,要求把所有姓名为han的名字改为zhang
(function () {
  let name = ["han", "liu", "zhao", "wu", "sun"];
  for (let key in name) {
    if (name[key] === "han") {
      name[key] = "zhang";
    }
  }
  console.log(name);
})();
// --------------------------
(function () {
  let arr = [1, 345, 5643, 76, 87654, 987, 234, 0985, 43, 2, 1213, 2, 3];
  let max = arr[0]; // 保存最大值
  // 最大值已经保存了第一个元素,所以没必要自己再和自己比较一次
  for (let index = 1; index < arr.length; index++) {
    //   arr[index] 每个元素
    // 如果max小于任何一个元素,则把该元素赋值给max
    if (max < arr[index]) {
      max = arr[index];
    }
  }
  console.log(max);
})();
// --------------------------
// 将数组转为字符串
(function () {
  let arr = ["a", "b", "c"];
  console.log("使用API把数组转为字符串:", arr.toString()); // 'a,b,c'
  let num = 2;
  console.log(num.toString()); // '2'
  // 两个方法从属于不同类型的对象,一个是数组下的,一个是数字下的
  console.log("比较两个不同类型对象的转换:", arr.toString === num.toString); // false
  console.log("使用join来转换,并且可以设定分隔情况:", arr.join("-"));
})();
// --------------------------
(function () {
  //   拼接多个数组
  let arr2 = ["zhang", "yang"];
  let arr3 = ["zhou", "xu"];
  let arr4 = ["ran", "dong", "lu"];
  console.log(arr2.concat(arr3,arr4));
})();
// --------------------------
// 遍历数组,翻转数组中的元素;['a','b','c','d'] => ['d','c','b','a']
(function(){
    let arr = ['a','b','c','d'];
    let arr2 = [];
    for(let i=0;i<arr.length;i++){
        // 0 4  3
        // 1 4  2
        // 2 4  1
        // 3 4  0
        // 对饮下标的值 = 长度 -i -1
        xindex = arr[arr.length - i - 1];
        // 用循环中的i为下标,直接用xindex作为值,即可倒过来
        arr2[i] = xindex;
        // console.log(xindex)
    };
    console.log(arr2);
})();
// --------------------------
// 使用冒泡排序将数组中的数字实现从小到大排序
(function(){
    let arr = [7,6,3,8,5,1,2];
    for(let i=0;i<arr.length-1;i++){
        // 1 4 
        // 2 3
        // 3 2
        // 4 1
        // 内层循环来控制循环的次数
        // 从0开始循环 从第一个数开始往后比较
        for(let j=0;j<arr.length-i;j++){
            // 每次循环,如果当前的数大于后边的数,则位置互换
            // 当前元素就是arr[j]
            if(arr[j]>arr[j+1]){
                // js不像python可以a,b=b,a,所以需要用第三个变量来充当辅助参数来交换参数
                let auxiliary=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=auxiliary;
            }
            ;
        };
    };
    console.log(arr);
})();
// --------------------------
(function(){
    let arr = ['js','mysql','node.js','html','css','vue','react'];
    // 截取数组中的元素
    // 和python中的列表切片相同,注意的是,python是arr[1:4],js是arr.slice(1,4)
    console.log(arr.slice(0,3));
})();
// --------------------------
// 创建数组,包含有a~h,没一个字符是一个元素,分别截取出cd,f,最后要求拼接成一个新的数组
(function(){
    let arr = ['a','b','c','d','e','f','g','h'];
    let first_str = arr.slice(2,4);
    let end_str = arr.slice(4,5);
    console.log(first_str.concat(end_str));
})();
// --------------------------
// 删除数组元素
(function(){
    let arr = ['烤羊肉','火锅','东坡肉','肉夹馍','酸辣粉'];
    // splice(start,number) start 是下标,number是从下标开始往后删除的个数
    console.log('删除成功的数组:',arr.splice(3,4)); // 返回的是删除成功的元素
    console.log('处理之后的数组:',arr); // 处理之后的数组
})();
// --------------------------
// 按照位置插入元素
(function(){
    let arr = ['han','zhang'];
    // 如果splice以(index,0,'xx','xx') 的方式呈现,那么index则为插入的下标位置,'xx'则为内容
    arr.splice(arr.length,0,'liu','wang');
    console.log('插入元素之后的数组:',arr);
})();
// --------------------------
// 创建数组,包含a~h,每个字母是一个元素,删除de,替换f为m,在下标为1的位置插入z
(function(){
    let arr = ['a','b','c','d','e','f','g','h'];
    arr.splice(3,2); // 删除de
    arr.splice(3,1,'m'); // 替换f为m
    arr.splice(1,0,'z'); // 在下标为1的位置插入z
    console.log(arr);
})();
// --------------------------









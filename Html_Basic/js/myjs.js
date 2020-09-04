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
(function () {
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
  var start = 2005;
  var end = 1999;
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
})();
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
// 创建商品对象,包含商品的编号,名称,价格;判断是否存在产地,如果不存在则添加该属性;
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
    {
      lid: 3,
      title: "外星人",
      pic: "wai.png",
      price: 12888,
    },
    {
      lid: 5,
      title: "联想",
      pic: "lian.png",
      price: 3799,
    },
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
  let arr = [1, 345, 5643, 76, 87654, 987, 234, 85, 43, 2, 1213, 2, 3];
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
  console.log(arr2.concat(arr3, arr4));
})();
// --------------------------
// 遍历数组,翻转数组中的元素;['a','b','c','d'] => ['d','c','b','a']
(function () {
  let arr = ["a", "b", "c", "d"];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    // 0 4  3
    // 1 4  2
    // 2 4  1
    // 3 4  0
    // 对饮下标的值 = 长度 -i -1
    var xindex = arr[arr.length - i - 1];
    // 用循环中的i为下标,直接用xindex作为值,即可倒过来
    arr2[i] = xindex;
    // console.log(xindex)
  }
  console.log(arr2);
})();
// --------------------------
// 使用冒泡排序将数组中的数字实现从小到大排序
(function () {
  let arr = [7, 6, 3, 8, 5, 1, 2];
  for (let i = 0; i < arr.length - 1; i++) {
    // 1 4
    // 2 3
    // 3 2
    // 4 1
    // 内层循环来控制循环的次数
    // 从0开始循环 从第一个数开始往后比较
    for (let j = 0; j < arr.length - i; j++) {
      // 每次循环,如果当前的数大于后边的数,则位置互换
      // 当前元素就是arr[j]
      if (arr[j] > arr[j + 1]) {
        // js不像python可以a,b=b,a,所以需要用第三个变量来充当辅助参数来交换参数
        let auxiliary = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = auxiliary;
      }
    }
  }
  console.log(arr);
})();
// --------------------------
// test run
(function () {
  let test_arr = [
    3213.5,
    4564.4,
    3,
    45,
    3452,
    342,
    345,
    1,
    3,
    4,
    5,
    666,
    4,
    990,
    71,
  ];
  let aux_arr = [];
  for (let index = 0; index < test_arr.length - 1; index++) {
    for (let jindex = 0; jindex < test_arr.length - index; jindex++) {
      if (test_arr[jindex] > test_arr[jindex + 1]) {
        aux_arr = test_arr[jindex];
        test_arr[jindex] = test_arr[jindex + 1];
        test_arr[jindex + 1] = aux_arr;
      }
    }
  }
  console.log("test run:", test_arr);
})();
// --------------------------
(function () {
  let arr = ["js", "mysql", "node.js", "html", "css", "vue", "react"];
  // 截取数组中的元素
  // 和python中的列表切片相同,注意的是,python是arr[1:4],js是arr.slice(1,4)
  console.log(arr.slice(0, 3));
})();
// --------------------------
// 创建数组,包含有a~h,没一个字符是一个元素,分别截取出cd,f,最后要求拼接成一个新的数组
(function () {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let first_str = arr.slice(2, 4);
  let end_str = arr.slice(4, 5);
  console.log(first_str.concat(end_str));
})();
// --------------------------
// 删除数组元素
(function () {
  let arr = ["烤羊肉", "火锅", "东坡肉", "肉夹馍", "酸辣粉"];
  // splice(start,number) start 是下标,number是从下标开始往后删除的个数
  console.log("删除成功的数组:", arr.splice(3, 4)); // 返回的是删除成功的元素
  console.log("处理之后的数组:", arr); // 处理之后的数组
})();
// --------------------------
// 按照位置插入元素
(function () {
  let arr = ["han", "zhang"];
  // 如果splice以(index,0,'xx','xx') 的方式呈现,那么index则为插入的下标位置,'xx'则为内容
  arr.splice(arr.length, 0, "liu", "wang");
  console.log("插入元素之后的数组:", arr);
})();
// --------------------------
// 创建数组,包含a~h,每个字母是一个元素,删除de,替换f为m,在下标为1的位置插入z
(function () {
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
  arr.splice(3, 2); // 删除de
  arr.splice(3, 1, "m"); // 替换f为m
  arr.splice(1, 0, "z"); // 在下标为1的位置插入z
  console.log(arr);
})();
// --------------------------
// 翻转数组
(function () {
  let arr = [1, 2, 3, 4, 5];
  arr.reverse(); // 翻转数组
  console.log("翻转后的数组:", arr);
})();
// --------------------------
// 排序
(function () {
  let arr = [1, 2, 3, 6, 4, 2, 3, 6, 7, 4, 1, 234, 567, 6543, 23, 4];
  // 默认是按Unicode码排序
  // console.log(arr.sort());
  // 按照数字大小排序 -- 回调函数
  arr.sort(function (a, b) {
    // return a-b; // 从小到大
    return b - a; // 从大到小
  });
  console.log("排序之后的数组:", arr);
})();
// --------------------------
// 在数组末尾添加元素
(function () {
  let arr = ["锅包肉", "烤腰子", "羊肉泡馍"];
  console.log("返回数组的长度:", arr.push("荔枝肉", "菠萝古老肉"));
  console.log("更变之后的数组:", arr);
  // 删除数组末尾的一个元素
  console.log("删除数组末尾的元素:", arr.pop());
  console.log("", arr);
})();
// --------------------------
// 在数组的开头添加或删除元素
(function () {
  let arr = [1, 2, 3, 4, 5];
  // 在开头添加
  console.log("此时的数组长度:", arr.unshift(-1, 0));
  console.log("在开头添加了-1,0的数组:", arr);
  // 在开头删除
  arr.shift();
  console.log("删除开头一个元素之后的数组:", arr);
})();
// --------------------------
(function () {
  // 一组省份
  let arr = ["广东", "湖南", "浙江"];
  // 一组城市
  // let arr = ['广州','深圳','东莞','长沙','张家界','怀化','杭州','宁波','绍兴'];
  let arr2 = [
    ["广州", "深圳", "东莞"],
    ["长沙", "张家界", "怀化"],
    ["杭州", "宁波", "绍兴"],
  ];
  for (let key in arr) {
    var a = "";
    for (let ukey in arr2) {
      a += arr2[key][ukey];
    }
    console.log(arr[key], "的城市有:", a);
    delete a;
  }
})();
// --------------------------
(function () {
  let str1 = "han"; // 字面量
  // 包装对象
  let str2 = new String("han");
  console.log(str1, typeof str1);
  console.log(str2, typeof str2);
  // 包装与否使用起来没有任何区别
  console.log(str1 + "正在撸猫玩");
  console.log(str2 + "正在玩电脑");
  // String可以将任意的数据转为字符串型,强制转换
  let str3 = String(2);
  console.log("整型转为字符串之后:", str3, "类型是:", typeof str3);
  let str4 = String(["a", 2, "b"]);
  console.log("数组转为字符串之后:", str4, "类型是:", typeof str4);
})();
// --------------------------
(function () {
  let str = "a\nd";
  // 转义\n是换行
  console.log(str);
  // 将引号转义成普通字符
  let str2 = "It's a cat";
  console.log(str2);
  var str3 = "a\tb";
  // 转义\t生成一段空格
  console.log(str3);
})();
// --------------------------
(function () {
  // 转义之后再转义
  console.log("hello \\n world");
})();
// --------------------------
(function () {
  let str = "javascript";
  // 查看字符的个数
  console.log(str, "的字符串个数是:", str.length);
  // 通过下标访问字符,后者为使用API来访问
  console.log(str[2], str.charAt(2)); // -> v
})();
// --------------------------
// 使用遍历字符串,统计'javascript'字符a出现的次数
(function () {
  let str = "javascript";
  let number = 0;
  for (let index in str) {
    if (str[index] === "a") {
      number++;
    }
  }
  console.log("a出现的次数是:", number);
})();
// --------------------------
(function () {
  let str = "a";
  console.log(str, "的Unicode码是:", str.charCodeAt());
})();
// --------------------------
// 通过字符来找对饮的下标 -- 找字符(串)
(function () {
  let str = "家里的猫都快被撸的谢顶了";
  console.log(str.indexOf("猫")); // 反馈的是第一个字符的下标
  console.log(str.indexOf("狗")); // -1 的意思说明找不到
  // 查找满足条件的第一个
  console.log(str.indexOf("的")); // 2
  // 查找满足条件的最后一个
  console.log(str.lastIndexOf("的")); // 8
})();
// --------------------------
// 声明变量保存一个邮箱的字符串,如果邮箱中不含有@,则打印'非法的邮箱',否则打印'合法的邮箱'
(function () {
  let email = "han@qq.com";
  if (email.indexOf("@") !== -1) {
    console.log("合法的邮箱");
  } else {
    console.log("非法的邮箱");
  }
})();
// --------------------------
// 英文字母大小写转换
(function () {
  let str = "JavaScript";
  // 转大写
  console.log(str.toUpperCase());
  // 转小写
  console.log(str.toLowerCase());
})();
// --------------------------
(function () {
  let str = "javascript";
  // 截取字符串
  console.log("截取字符串之后:", str.slice(4));
  // 另一种截取方式,开始和结束下标不分大小
  console.log("另一种范围截取方式:", str.substring(7, 4));
  // 如果是负数,自动转为 0
  console.log("", str.substring(-3));
})();
// --------------------------
// 声明变量保存一个邮箱,分别截取邮箱的用户名和域名
(function () {
  let email = "han@qq.com";
  let number = email.indexOf("@");
  // console.log(number);
  let uid = email.slice(0, number);
  let domain_name = email.slice(number + 1);
  console.log("邮箱的用户名是:", uid, "域名是:", domain_name);
})();
// --------------------------
// 声明变量保存字符串为身份证号,分别截取出身份证号中的年月日,以及性别(倒数第2位),如果是奇数为男,偶数为女
(function () {
  let id_card = "340803200001012531";
  let gender = "";
  if (parseInt(id_card.slice(-1)) % 2 === 0) {
    gender = "女";
  } else {
    gender = "男";
  }
  console.log(
    "出生年月为:",
    id_card.substring(6, 10),
    "年",
    id_card.substring(10, 12),
    "月",
    id_card.substring(12, 14),
    "日",
    "性别为:",
    gender
  );
})();
// --------------------------
(function () {
  // 数组转字符串
  // toString join
  let arr = ["a", "b", "c"];
  let str = arr.join("-");
  console.log(str);
  // 字符串切割为数组
  let arr2 = str.split("-");
  console.log(arr2);
})();
// --------------------------
// 把一个邮箱切割成由用户名和域名组成的数组
(function () {
  let str = "han@qq.com";
  let arr = str.split("@");
  console.log("用户名:", arr[0], "域名:", arr[1]);
})();
// --------------------------
(function () {
  let str = "han有三大爱好,Han第一爱抽烟,HAN第二爱喝酒,haN第三爱烫头";
  // 查找 返回下标
  // 只能在这几个api下,这是正则表达式写法
  // i -> ignore 忽略大小写
  console.log(str.search(/han/i));
  // g -> global 全局的
  console.log(str.match(/han/gi));
  // 查找并替换
  console.log(
    str.replace(/han/gi, function (str) {
      str = "**";
      return str;
    })
  );
})();
// --------------------------
// 截取出一个文件的后缀名(code.web.png)
(function () {
  let str = "code.web.png";
  let suffix = str.lastIndexOf(".");
  console.log("文件的后缀名为:", str.slice(suffix));
})();
// --------------------------
// 将一句英文的每个单词首字母大写,其余字母小写
(function () {
  let english = "this is good day";
  let arr = english.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let first = arr[i].substr(0, 1).toUpperCase();
    let other = arr[i].substr(1).toLowerCase();
    arr[i] = first + other;
  }
  console.log(arr.join(" "));
})();
// 回调函数的方式
(function () {
  let str = "you can you up";
  str = str.replace(/\b[a-z]/gi, function (a) {
    return a.toUpperCase();
  });
  console.log(str);
})();
// --------------------------
(function () {
  // 圆周率
  console.log("圆周率:", Math.PI);
  // 绝对值
  console.log("绝对值:", Math.abs(1 - 9));
  // 取整 parseInt
  // 向上取整
  console.log("4.1向上取整:", Math.ceil(4.1));
  // 向下取整
  console.log("8.9向下取整:", Math.floor(8.9));
  // 四舍五入取整
  console.log("6.5四舍五入:", Math.round(6.5));
  // 获取一组数字的最大值
  console.log("最大值:", Math.max(1, 2, 4, 6, 8, 89, 9, 0));
  // 取最小值
  console.log("最小值:", Math.min(6, 3, 7, 6, 31, 3, 5, 7, 8, 99, 5, 4));
  // x的y次方/次幂
  console.log("5的2次方", Math.pow(5, 2));
  // 取随机
  console.log("取随机:", Math.random());
})();
// --------------------------
// 随机点名
// 把被点的名字放入到一个数组
(function () {
  let arr = ["han", "zhang", "liu", "wang", "li", "hu"];
  // 随机点名,随机获取0-6之间的一个整数
  let number = Math.random() * arr.length;
  console.log("随机点名:", arr[Math.floor(number)]);
})();
// --------------------------
// 随机获取a-h之间4个字母,把每次去到的字幕放入到一个新的数组push,最后打印新的数组
(function () {
  let letter = "abcdefgh";
  let arr = letter.split(""); // 把字符串分成数组
  let new_arr = [];
  for (let index = 1; index <= 4; index++) {
    let number = Math.floor(Math.random() * arr.length); // 向下取到 随机数 * 长度个数
    new_arr.push(arr[number]); // 在尾部添加
  }
  console.log(new_arr);
})();
// --------------------------
(function () {
  // 创建Date对象
  let d1 = new Date("2020/8/24 10:24:12");
  let d2 = new Date(2020, 2, 11, 11, 29, 30);
  let d3 = new Date(); // 当前时间
  // 存储距离计算机元年毫秒数
  let d4 = new Date(345100000);
  console.log(d1);
  console.log(d2);
  console.log(d3);
  console.log(d4);
})();
// --------------------------
(function () {
  let d = new Date();
  // 获取日期时间
  console.log("当前年份:", d.getFullYear()); // 年
  console.log("当前月份:", d.getMonth() + 1); // 月 范围是从0开始,到11结束,所以获取之后得+1
  console.log("当前日:", d.getDate()); // 日
  console.log("当前小时:", d.getHours()); // 小时
  console.log("当前星期:", d.getDay()); // 星期 范围是0开始,0是星期日,到6结束,6是星期六
})();
// --------------------------
// 创建当前系统时间的对象,拼接类似以下效果
(function () {
  let d = new Date();
  console.log(
    d.getFullYear(),
    "年",
    d.getMonth() + 1,
    "月",
    d.getDate(),
    "日",
    d.getHours(),
    ":",
    d.getMinutes(),
    ":",
    d.getSeconds(),
    "星期",
    d.getDay()
  );
})();
// --------------------------
(function () {
  let n1 = Number(true);
  console.log(n1, typeof n1);
  let n2 = new Number(true); // 对象
  console.log(n2, typeof n2);
  let n3 = 1; // 字面量
  console.log(n1 + 1, n2 + 1, n3 + 1);
})();
// --------------------------
(function () {
  let number = 144;
  // 在转为字符串同事设置进制
  console.log(number.toString(2));
  let number2 = 5 * 2 * 3.14;
  // 保留小数点后几位,并且转成字符串类型
  console.log(number2.toFixed(2));
  let price = 8499.0;
  console.log(price.toFixed(2));
})();
// --------------------------
(function () {
  let b1 = Boolean(0);
  let b2 = new Boolean(0);
  console.log(b1, b2);
  // !'' 转成了反向 true, !!'' 再次反向false
  console.log(!!"");
})();
// --------------------------
(function () {
  let num = -2;
  try {
    if (num <= 0) {
      throw "请提供一个正数"; // 收集错误信息
    }
  } catch (err) {
    // 错误信息被赋值给err
    console.log(err); // 打印错误信息
    num = 1;
  }
  console.log("异常中的值:", num);
})();
// --------------------------
// 双色球,红球在1-33之间随机取6个,不能重复,要从小到大排序;蓝球在1-16之间随机取1个,可以和之前的红球重复,放在红球后边
(function () {
  let arr = []; // 放置 1 - 33所有的整数
  // 循环产生1-33之间所有的整数,添加到数组arr中
  for (let i = 1; i <= 33; i++) {
    arr.push(i);
  }
  let arr2 = [];
  for (let i = 0; i < 6; i++) {
    // 随机下标
    let index = Math.floor(Math.random() * arr.length);
    arr2.push(arr[index]);
    // 获取到以后,把该元素从原数组中删除
    // splice
    arr.splice(index, 1);
  }
  // 从小到大排序
  arr2.sort(function (a, b) {
    return a - b;
  });
  arr2.push(Math.floor(Math.random() * 16 + 1)); // 随机蓝球
  console.log(arr2);
})();
// --------------------------
// 利用字符集简写定义车牌号规则
// 第一位 1位汉字
// 第二位 1位大写字母
// 第三位 . 有一个点
// 后五位 每一位:都是一位大写字母或数字
(function () {
  let phonenumber = "13211110000";
  let matching = "10";
  console.log(`匹配到的${matching}位置的下标是:`, phonenumber.search(matching));
  // [\u4e00-\u9fa5][A-Z]·[0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z][0-9A-Z]
})();
// --------------------------
(function () {
  // 请用户输入一条消息内容
  // 查找消息中是否包含敏感词卧槽
  // 如果包含敏感词
  // let msg = prompt('请输入消息内容:');
  let msg = "卧槽";
  let i = msg.indexOf("卧槽");
  if (i != !-1) {
    console.log(msg);
  } else {
    // 向页面中写代码片段
    document.write(`包含敏感词d,禁止发送`);
  }
});
(function () {
  // 请用户输入一条消息内容
  // 查找消息中是否包含敏感词卧槽
  // 如果包含敏感词
  // let msg = prompt('请输入消息内容:');
  let msg = "卧槽";
  let i = msg.search(/([我卧])|\s*([艹操槽]|cao)/);
  if (i != !-1) {
    console.log(msg);
  } else {
    // 向页面中写代码片段
    document.write(`包含敏感词d,禁止发送`);
  }
});
(function () {
  // 请用户输入一条消息内容
  // 查找消息中是否包含敏感词卧槽
  // 如果包含敏感词
  // let msg = prompt('请输入消息内容:');
  let msg = "卧槽";
  let arr = msg.match(/([我卧])|\s*([艹操槽草]|cao)/i);
  if (arr != null) {
    // 位置 x 发现敏感词 x
    document.write(`在位置${arr.index}发现敏感词"${arr[0]}"d,禁止发送`);
  } else {
    console.log(`没找到敏感词d,返回null`);
  }
});
(function () {
  let str =
    "老师说:请用小红 我的 朋友造句.小亮:小红是我的朋友.小然:朋友!小红是我的!";
  // 希望查找出str中所有以小字开头的人名
  // 因为汉字没有大小写之分d,所以不用加 i
  let arr = str.match(/小[\u4e00-\u9fa5]/g);
  console.log("小字开头的人名:", arr);
})();
// --------------------------
(function () {
  let str =
    "老师说:请用小红 我的 朋友造句.小亮:小红是我的朋友.小然:朋友!小红是我的!";
  // 还想显示共替换了多少处,先用match在替换前再找一次d,然后查找结果的元素个数d,也就是将来要替换的个数!
  let arr = str.match(/小[\u4e00-\u9fa5]/gi);
  // 希望替换str中所有以小字开头的人名为**
  let new_str = str.replace(/小[\u4e00-\u9fa5]/gi, function (st) {
    st = "**";
    return st;
  });
  console.log(new_str);
  // 如果match找到了敏感词d,才输出arr.length
  // 否则如果match没找到敏感词d,直接输出0处代替
  // if(arr!=null){
  //     console.log(`共替换了${arr.length}处`);
  // }else{
  //     console.log(`共替换了0处`);
  // };
  // 三目运算
  console.log(`共替换了${arr != null ? arr.length : 0}处`);
})();
// --------------------------
(function () {
  let str = "you can you up";
  let number = 1;
  str = str.replace(/\b[a-z]/gi, function (initials) {
    console.log(
      `调用了${number++}次回调函数,形参是${initials},处理之后是${initials.toUpperCase()}`
    );
    return initials.toUpperCase();
  });
  console.log(str);
})();
// --------------------------
(function () {
  // trimLeft() 可以去掉字符串开头的空字符
  function trimLeft(str) {
    // let str2 = str.replace(/^\s+/,'');
    return str.trimLeft();
  }
  // trimRight() 可以去掉字符串结尾的空字符
  function trimRight(str) {
    // let str2 = str.replace(/\s+$/,'');
    return str.trimRight();
  }
  // trim() 可以去掉字符串开头和结尾的空字符
  function trim(str) {
    // 因为/^\s+|\s+$/在字符串中匹配到两组敏感词d,一组是开头的空字符d,一组是结尾的空字符d,如果想把两组空字符都替换d,必须加g
    // let str2 = str.replace(/^\s+|\s+$/g,'');
    return str.trim();
  }
  let str = "   hello    world   ";
  console.log("去掉左边空格的字符串:", trimLeft(str));
  console.log("去掉右边空格的字符串:", trimRight(str));
  console.log("去掉两边空格的字符串:", trim(str));
  // 其实ES5和ES6标注那种,已经提供了线程的trim系列函数,不用自己定义
})();
// --------------------------
(function () {
  // 想把电子邮件切割成用户名和域名两部分
  let email = "hanlong@qq.com";
  // 按照@将字符串email一分为二
  let arr = email.split("@"); // 从@开始切成了两个数组
  let uname = arr[0];
  let domain = arr[1];
  console.log("切割之后的用户名和域名:", uname, domain);
  let str = "you can you up";
  let arr2 = str.split(" ");
  console.log("把英文切成了4个单词:", arr2);
  // 如果每个单词之间的空格个数不确定有几个
  let str2 = " jin tian tain      qi  zhen  hao   a ";
  // 去掉两端的空格
  str2 = str2.trim();
  // 按一个或多个空格切割str
  let arr3 = str2.split(/\s+/);
  console.log("处理一个或者多个空格之后:", arr3);
})();
// --------------------------
(function () {
  // 翻转字符串
  // let arr = ['h','e','l','l','o'];
  let str = "helloworld";
  let arr2 = str.split(""); // 打散为字符数组
  // reverse()是数组的翻转
  // console.log(arr.reverse());
  // console.log(str); // 'dlrowolleh'
  console.log("翻转前的数组:", arr2);
  arr2.reverse(); // 翻转处理
  console.log("翻转后的数组:", arr2);
  str = arr2.join(""); // 将翻转后的字符数组无缝拼接回字符串 join是无缝拼接字符串d,toString是用逗号做了字符串的分割
  str2 = console.log("使用join来进行转化后的字符串:", str);
})();
// --------------------------
(function () {
  // 假设从服务器端用ajax请求过来一个敏感词数组
  let arr = ["青天", "明月", "紫烟"]; // 将来数组里有什么词d,程序就要防住什么词
  // 我们不可能提前预知从服务器范湖id数组中包含哪些词
  console.log(arr.join("|"));
  // 请用户输入一条消息内容
  // var msg = prompt('请输入消息内容:')
  let msg = "日照香炉生紫烟";
  // 先定义正则表达式对象,自然也不可能提前预防
  // 错误的解决:将动态生成正则表达式的js语句d,直接放入//中
  // 原因:// 中是正则表达式的地盘 并不认识js语句 -> let reg = /arr.join("|")/;
  // 正确的做法:被迫使用new RegExp("正则")
  // 原因:new RegExp()参数刚好需要一个字符串d,而我们有很多种方法能拼出我们想要的任意字符串
  let reg = new RegExp(arr.join("|"));
  // let reg = /青天|明月/;
  // 用正则表达式对象查找消息内容中是否包含敏感词
  let i = msg.search(reg);
  let msgs = `包含敏感词:${msg}`;
  let reply = "不包含敏感词";
  console.log(i);
  console.log(`${i === -1 ? reply : msgs}`);
})();
// --------------------------
(function () {
  // 请用户输入一个密码d,密码要求必须是6位的数字
  let pwd = "abc123456";
  // 定义正则表达式,匹配六位数字
  let reg = /^\d{6}$/;
  // 用正则表达式去验证密码的格式d,是否符合要求
  let bool = reg.test(pwd);
  console.log(`${bool === true ? "格式正确" : "格式不正确"}`);
})();
// --------------------------
(function () {
  var str =
    "老师:请用小红 我的 朋友造句。小亮:小红是我的朋友。小韩说:朋友！小红是我的!";
  // 只找第一个敏感词的情况
  var reg = /小[\u4e00-\u9fa5]/g;
  // let arr = str.match(reg);
  // console.log('使用match来寻找到的结果:',arr);
  // 反复执行,知道arr==null结束,不然一直执行
  // do while:因为即使不确定字符串中有没有敏感词d,也必须至少查找一次时d,首选do while
  do {
    var arr2 = reg.exec(str);
    if (arr2 != null) {
      console.log(`在位置${arr2.index},发现敏感词${arr2[0]}`);
    }
  } while (arr2 != null);
})();
// --------------------------
(function () {
  function cook(greenstuff, age, noodle) {
    console.log(`炒${age}`);
    console.log(`炒${greenstuff}`);
    console.log(`${greenstuff}和${age}一起炒`);
    console.log(`煮${noodle}`);
    return `香喷喷的${greenstuff}${age}${noodle}`;
  }
  // 周一
  let bowl = cook("西红柿", "鸡蛋", "面");
  console.log("周一的菜:", bowl);
  // 周二 西红柿没了d,只有黄瓜d,鸡蛋没了d,只有辣条
  let bowl2 = cook("黄瓜", "辣条", "面");
  console.log("周二的菜:", bowl2);
})();
// --------------------------
// 函数创建方式一
(function () {
  function fun() {
    console.log("1");
  }
  fun(); // 2
  function fun() {
    console.log("2");
  }
  fun(); // 2
})();
// --------------------------
// 函数创建方式二
(function () {
  var fun = function () {
    console.log("1");
  };
  fun(); // 1
  var fun = function () {
    console.log("2");
  };
  fun(); // 2
})();
// --------------------------
// 函数创建方式三
(function () {
  var f1 = new Function("a", console.log("a"));
})();
// --------------------------
// 想定义一种付款函数d,支持三种支付方式:手机支付d,现金支付d,刷卡支付
(function () {
  // 都是支付
  function pay() {
    // arguments{ };
    if (arguments.length == 0) {
      console.log(`重载无参:手机支付`);
    } else if (arguments.length == 1) {
      console.log(`重载一个参数:现金支付d,现金是${arguments[0]}`);
    } else if (arguments.length == 2) {
      console.log(
        `重载两个参数:刷卡支付d,卡号是${arguments[0]},密码是${arguments[1]}`
      );
    }
  }
  pay();
  pay("18");
  pay(340803, 123457);
})();
// --------------------------
(function () {
  var start = new Date();
  console.log(`开始加载页面内容:${start.toLocaleString()}`);
  var end = new Date();
  console.log(`页面内容加载完成:${end.toLocaleString()}`);
  // 变量start和end,在弹窗提示后,就不再使用了,但是依旧在内存当中,占用着内存
})();
// --------------------------
(function () {
  var a = 10;

  function fun() {
    a = 100;
    a++;
    console.log("函数内部的a:", a);
  }
  fun();
  console.log("函数外部的a:", a);
})();
// --------------------------
(function () {
  // 定义一个函数替小孩保管零花钱
  // 小孩每花一笔钱,就从总钱数中减去花的钱,并且提示余额剩余多少
  // 问题:总钱数total 1000元保存在哪?
  // 定义外层函数包裹要保护的变量和内层函数
  function outer() {
    var total = 500;
    // 内层函数不要起函数名
    return function (money) {
      total -= money;
      console.log(`花了${money}元,还剩${total}元`);
    };
  }
  //   函数只有调用才会执行,才能获得返回结果
  // 反之,函数如果不执行,就不会执行,也不回获得返回结果
  // 花了100
  var pay = outer();

  pay(100);
  // 又花了100
  pay(100);
  // total = 0; // 万一凑巧被篡改了
  // 又花了100
  pay(100);

  var pay2 = outer();
  pay2(100);
})();
// --------------------------
// 使用闭包实现取号机功能

// 测试代码
(function () {
  function take_the_number() {
    var i = 0;
    return function () {
      i++;
      console.log(i);
    };
  }
  var getNum = take_the_number();
  getNum(); // 1
  getNum(); // 2
  // 如果用i记录当前号码,即使写 i = 0;也不会影响
  i = 0;
  getNum(); // 3
  getNum(); // 4
  getNum(); // 5
  getNum = null;
  //   console.log(getNum);
})();
// --------------------------
(function () {
  var student = {
    // js中只有两种作用域:全局作用域和函数作用域
    // 对象中的内容，既不是全局，也不是函数作用域
    // 对象给仅仅是一种结构复杂的特殊存储结构而已
    sname: "han",
    sage: 18,
    intrSelf: function () {
      console.log(`${this.sname}说:i'm ${this.sname},i'm ${this.sage}`);
    },
  };
  console.log(`han今年:${student.sage}`);
  student.intrSelf();
  student.sage++;
  console.log(`han今年:${student.sage}`);
  student.intrSelf();
  var intrSelf = student.intrSelf;
  intrSelf();
})();
// --------------------------
(function () {
  var han = new Object();
  console.log(han);
  han.sname = "hanlong";
  han.sage = 18;
  han.intr = function () {
    console.log(`i'm ${this.sname},i'm ${this.sage}`);
  };
  console.log(han.sname);
})();
// --------------------------
// (function () {
//   // 定义函数，可以克隆一个对象
//   function clone(old) {
//     // 先创建一个新的空对象
//     var obj = {
//     };
//         // 遍历久对象中的每个属性
//     for(var  in ){
//         // 每遍历一个属性，就为新对象添加同名的属性，值为旧对象中同名属性值
//         obj[]
//     };
//   };
//   var lilei = {
//     sname: "li lei",
//     sage: 18,
//   };
//   var lilei2 = clone(lilei);
//   console.log(lilei);
//   console.log(lilei2);
//   console.log(lilei == lilei2); // false
//   // 如果 == 左右都是对象，则 == 不再比较对象内容，而是比较两个对象的地址是否相同
//   // 如果返回true，说明克隆失败，因为地址是同一个对象，说明没有多出一个对象
//   // 如果返回false，说明成功，因为地址不同，说明是先后创建的两个对象
// })();
// --------------------------
(function () {
  // 冗余创建
  let han = {
    sname: "han",
    sage: 20,
    intr: function () {
      console.log(`i'm ${this.sname},i'm ${this.sage}`);
    },
  };
  let zhang = {
    sname: "zhang",
    sage: 21,
    intr: function () {
      console.log(`i'm ${this.sname},i'm ${this.sage}`);
    },
  };
  // 使用构造函数创建
  function student(sname, sage) {
    this.sname = sname;
    this.sage = sage;
    this.intr = function () {
      console.log(`i'm ${this.sname},i'm ${this.sage}`);
    };
  }

  var hanlong = new student("hanlong", 18);
  console.log("创建的hanlong对象:", hanlong);
  console.log(`${hanlong.sname}的年龄是${hanlong.sage}`);

  var hmm = new student("han meimei", 20);
  console.log("创建的hanmm对象:", hmm);
  console.log(`${hmm.sname}的年龄是${hmm.sage}`);
})();
// --------------------------
(function () {
  // 构造函数
  function student(sname, sage) {
    this.sname = sname;
    this.age = sage;
  }
  student.prototype.intr = function () {
    console.log(`i'm ${this.sname},i'm ${this.sage}`);
  };
  // 因为今后所有学生对象都要能自我介绍，
  // 所以应该在学生类型的构造函数的原型对象中强行添加一个intr()方法，
  // 供将来所有学生公用
  var hanlong = new student("hanlong", 18);
  console.log(hanlong);
  hanlong.intr(); // 判断原型函数里面的this，需要看调用时 . 前面指的是谁

  console.log(hanlong.__proto__ == student.prototype);
})();
// --------------------------
(function () {
  // 构造函数
  function student(sname, sage) {
    this.sname = sname;
    this.age = sage;
  }
  // 所有学生都来自初一二班，所以应该在原型对象中添加一个classname属性保存所有学生统一的班级
  student.prototype.className = "初一7班";

  var hanlong = new student("hanlong", 18);
  console.log(`${hanlong.sname}的班级是:${hanlong.className}`); // 读取hanlong的姓名和班级
  // hanlong想改名
  hanlong.sname = "hanlonglong";
  console.log(hanlong.sname);

  var hanmeimei = new student("hanmeimei", 20);
  console.log(`${hanmeimei.sname}的班级是:${hanlong.className}`); // 读取hanmeimei的姓名和班级
  // 第一年，输出两个人的班级
  console.log(
    "hanlong的班级:",
    hanlong.className,
    "hanmeimei的班级",
    hanmeimei.className
  );
  // 过了一年，两个人同时升级到初二7班
  // 错误做法
  hanlong.className = "六年级二7班";
  console.log(
    "hanlong的班级:",
    hanlong.className,
    "hanmeimei的班级",
    hanmeimei.className
  );
  // 又过了一年，大家一起升初三7班
  student.prototype.className = "初三7班";
  console.log(
    "hanlong的班级:",
    hanlong.className,
    "hanmeimei的班级",
    hanmeimei.className
  );
})();
// --------------------------
(function(){
    // 经常需要对各种数组内容求和
    // 应该自定义一个sum函数，添加到数组类型的原型对象中
    Array.prototype.sum = function(){
        // this - 将来调用这个sum()函数的 . 前的某个数组
        // 例如arr1.sum()，this 就是指的arr1
        // 对当前正在调用sum()函数的某个数组所有元素求和
        var result = 0;
        for(var i = 0;i<this.length;i++){
            // for in 循环，禁止用于遍历索引数组，只能遍历关联数组和对象，
            // 因为in不但遍历当前对象的每个属性，
            // 且还会沿着__proto__继续遍历父对象中的未隐藏的成员
            // 错误 - in 会把sum()函数本身的定义也遍历进来
            result+=this[i]
        };
        return result;
    };
    var arr1 = [1,2,3];
    var arr2 = [1,2,3,4,5];
    console.log(arr1.sum()); // 希望得到6
    console.log(arr2.sum()); // 希望得到15
})();




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
console.log("line 25-27>>> ", "x", x, "y", y);
// --------------------------
var eid = 3;
var ename = "tom";
var sex = 1;
var birthday = "1990-2-1";
var salary = 8000;
var deptId = 20;
console.log(
  "line 29-35>>> ",
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
console.log("line 37-39>>>", d);
// --------------------------
var f1 = 3.14;
console.log("line 41-42>>>", "f1的数据类型是:", typeof f1);
// --------------------------
var a = "韩";
console.log("line 44-45>>>", "韩的unicode编码是:", a.charCodeAt());
// --------------------------
var a = 1,
  b = true,
  c = "han";
result1 = a + b + c;
result2 = b + c + a;
result3 = c + a + b;
console.log(
  "line 61-66>>>",
  "a + b + c的结果是",
  result1,
  "类型是:",
  typeof result1
);
console.log(
  "line 61-66>>>",
  "b + c + a的结果是",
  result2,
  "类型是:",
  typeof result2
);
console.log(
  "line 61-66>>>",
  "c + a + b的结果是",
  result3,
  "类型是:",
  typeof result3
);
// --------------------------
// 假设已经从数据库中获取到了商品的标题和价格，把这些数据打印成一行
var title = "macbook pro";
var price = 15999;
console.log("line 72-73>>>", "商品名:", title, "价格:", price);

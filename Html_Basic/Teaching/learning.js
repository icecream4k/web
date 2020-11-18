// windows => win + r 
// 左下角 -> 运行 -> cmd{回车}
// 终端
// macos => command + 空格

// hello world
// system.out.println('hello world');
// print('hello world')
// console.log('hello world');

// 数据类型
// typeof -> 检测数据类型
// string - 字符串类型
// console.log(typeof '123');
// number - 数字类型
// console.log(123);
// console.log(typeof 123);
// booler - 布尔类型
// 真 - true
// 假 - false
// undefined

// 变量
// var 是声明(小广播)

// 我们有3个英雄,分别叫,赵云,李白,貂蝉
// 欢迎 xxx 来到王者峡谷
// var first_name = '赵云'; 
// console.log(nnameme); // 赵云
// var second_name = '李白'; 
// console.log(name); // 李白
// var third_name = '貂蝉'; 
// console.log('欢迎',first_name,'来到王者峡谷');
// console.log('欢迎',second_name,'来到王者峡谷');
// console.log('欢迎',third_name,'来到王者峡谷');

// 自己的名字 + 生日 + 性别 输出在一行 3分钟
// console.log('韩龙','0204','男');


// if(条件){执行语句};
// if (gender === '男') {
//     console.log('请去男厕所');
// };
// if (gender === '男') {
//     console.log('请去男厕所');
// } else if (gender === '女') {
//     console.log('请去女厕所');
// } else if (gender === '人妖') {
//     console.log('我也不知道你去那个厕所,你回泰国吧');
// }
// var gender = '人妖';
// if (gender === '男') {
//     console.log('请去男厕所');
// } else if (gender === '女') {
//     console.log('请去女厕所');
// } else { // 除开上面判断条件之外,其他所有的判断
//     console.log('程序出错!!')
// }

// 声明一个数字,如果这个数字比10小,那么就打印(这个数比10小)
// 如果这个数等于10,那么就打印(这个数字是10)
// 如果这个数字大于10,那么打印(这个数字比10大)
// var number = 10;
// if (number < 10) {
//     console.log('这个数比10小')
// } else if (number === 10) {
//     console.log('这个数是10')
// } else {
//     console.log('这个数比10大')
// }

// name = '安徽' => '合肥'
// 定义各省的省份名,例如:江西,安徽等
// 然后打印省会名称

// QQ签名
// 这家伙很懒,什么也没留下
// var msg = '';

// if (!msg) { // msg === ''
//     msg = '这家伙很懒,什么也没留下'
// }

// console.log(msg);

// 1.声明变量,保存一个年份
// 2.1 如果是闰年,则打印'闰年'
// 2.2 如果是平年,则打印'平年'
// 能被4整除,并且不能被100整除,或者能被400整除
// tips:  &&(and  ,  和)   ||(or  ,  或)
// 需要使用的技术 - if   else if   else 
// var year = 2020;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log('闰年');
// }else{
//     console.log('不是闰年');
// }


// a++   当程序执行道这一行的时候,a并没有自增,当程序执行完这一行的时候,a自增
// ++a   当程序执行到这一行的时候,a已经经过了一个自增的过程
// var number01 = 0;
// var number02 = 0;
// console.log('number01++ >>>',number01++);
// console.log('number01++ >>>',number01++);
// console.log('++number02 >>>',++number02);
// console.log('++number02 >>>',++number02);

// 三目运算符
// var gender = '男';
// 条件表达式 ? 表达式1 : 表达式2
// gender === '男' ? console.log('欢迎来到海澜之家') : console.log('欢迎来到zara');


// 根据今天是周几,来推荐吃的菜

// var day = 1234;
// switch (day) {
//     case 0:
//         console.log('拔丝地瓜');
//         break; // 终止
//     case 1:
//         console.log('肉末茄子');
//         break;
//     case 2:
//         console.log('蒜泥白肉');
//         break;
//     case 3:
//         console.log('西红柿炒鸡蛋');
//         break;
//     case 4:
//         console.log('辣椒炒肉');
//         break;
//     case 5:
//         console.log('炒粉干');
//         break;
//     case 6:
//         console.log('炖鱼头');
//         break;
//     default: // else
//         console.log('吃稀饭');
// }
// 根据订单的状态码,打印一下订单的状态: 1 - 等待付款  2 - 等待发货  3 - 运输中 4 - 派送中 5 - 已签收  6 - 已取消  其他 - 您的包裹已经丢失
// var number = 1234;
// switch (number) {
//     case 1:
//         console.log('等待付款');
//         break;
//     case 2:
//         console.log('等待发货');
//         break;
//     case 3:
//         console.log('运输中');
//         break;
//     case 4:
//         console.log('已签收');
//         break;
//     case 5:
//         console.log('派送中');
//         break;
//     case 6:
//         console.log('已取消');
//         break;
//     default: // else
//         console.log('您的包裹已经丢失');
// }


// 循环
// 循环打印 0 - 9
// var number = 0; // 起始值
// while (number < 90) {
//     // 循环体
//     console.log(number); // 0  1  2
//     number += 1; // 自增了1   1   2  3
//     // number++;
// }

// 打印 10 - 20 之间所有的整数
// var number = 10;
// while (number <= 20) {
//     console.log(number); // 10  11 12 ..... 19 20
//     number++; // 11 12 ...  20 21 
// }

// 计算 1 - 100 之间所有整数的和
// var number = 1;
// var s = 0; // 辅助参数
// while (number <= 100) { // 1 + 2 + 3 4 5 
//     s+=number // s-6  n-3  
//     number += 1; // 自增一个 number 的值
// }
// console.log(s);

// break   //  停止 - 停止循环/终止循环  吃到坏的瓜子 - 我就不吃了
// continue // 停止 - 停止本次循环/终止本次循环  吃到坏的瓜子,我这颗瓜子不吃了,然后继续吃

// var n = 0;
// while (n < 10) { // 4
//     if (n === 5) { // n-5
//         n++; // n-6
//         continue
//     } else {
//         console.log(n); // 0 1 2 3 4 6
//         n++;
//     }
// }
// console.log('循环已经结束');

// 用 continue 来实现 打印 1 - 500 之内所有的奇数
// var n = 1;
// while (n <= 500) {
//     if (n % 2 === 0) {
//         n++;
//         continue;
//     } else {
//         console.log(n);
//         n++;
//     }
// }


// 在系统里面,存储一个 账号 和一个 密码
// 账号 - lixiaoyao110
// 密码 - 111
// var id = 'lixiaoyao110';
// var pwd = '111';

// var uid = '';
// var upwd ;
// 循环的去判断账号和密码的正确性;
// 1,先判断账号,账号正确的了,再判断密码
// 2,你有3次错误的机会(账号和密码的共有)
// 10m  19:13
// for 

// 数组

// 1demo

// 函数 function(){}




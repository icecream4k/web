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
var number = 10;
if (number < 10) {
    console.log('这个数比10小')
} else if (number === 10) {
    console.log('这个数是10')
} else {
    console.log('这个数比10大')
}

// name = '安徽' => '合肥'
// 定义各省的省份名,例如:江西,安徽等
// 然后打印省会名称
// function palindRome(str){
//     var len = str.length;
//     var str1 = "";
//     for(var i=len-1; i>=0;i--){
//         str1+=str[i];
//     }
//     console.log(str1 == str)
// }
// palindRome("abcb");//true
//
// (() => {
//     function grilled_savory_crepe() {
//         if (arguments.length == 0) {
//             console.log('默认加薄脆和生菜');
//         } else if (arguments.length == 1) {
//             console.log(`默认加薄脆和生菜再加点${arguments[0]}`);
//         } else if (arguments.length == 2) {
//             console.log(`默认加薄脆和生菜再加点${arguments[0]}和${arguments[1]}`);
//         }
//     }
//     grilled_savory_crepe();
//     grilled_savory_crepe('萝卜丝');
//     grilled_savory_crepe('土豆丝', '里脊肉');
// })();


var students = [{
        id: 110,
        name: 'han',
        age: 11
    },
    {
        id: 111,
        name: 'zhang',
        age: 28
    },
    {
        id: 112,
        name: 'wu',
        age: 15
    },
    {
        id: 113,
        name: 'liu',
        age: 19
    },
]
var handleStudentsArray = [];
for (var i = 0; i < students.length; i++) {
    if (students[i]['age'] <= 18) {
        handleStudentsArray.push(new Object({
            'name': students[i]['name'],
            'age': students[i]['age']
        }))
    }
}
console.log(handleStudentsArray); 
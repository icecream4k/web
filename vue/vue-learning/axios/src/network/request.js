// 只要有一次引入的第三方框架依赖即可
import axios from 'axios'

// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         // 发送真正的网络请求
//         instance(config).then(res => {
//             // 回调发送成功的结果
//             resolve(res)
//         }).catch(err => {
//             // 回调失败的结果
//             reject(err)
//         })
//     })
// };

// 终极解决方案
export function request(config) {

    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        // timeout: 55000
    })
    // 2.axios拦截器
    // 2.1请求拦截
    instance.interceptors.request.use(config => {
        console.log('拦截器内容 : ',config);
        // 1.比如config中的一些信息不符合服务器的要求
        // 2.比如每次发送网络请求时会显示一个图标
        // 3.某些网络请求(比如登录[token]),是必须携带一些特殊的信息
        return config
    }, err => {
        console.log(err);
    }); // 拦截请求 

    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        // console.log('响应拦截内容res : ',res);
        // 处理完之后要return,不然使用时 res会显示不出内容
        return res.data
    },err =>{
        console.log('响应拦截内容err : ',err);
    }); // 拦截响应


    // 3.发送真正的网络请求
    return instance(config)
};
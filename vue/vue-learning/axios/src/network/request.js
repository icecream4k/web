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

        // 创建axios的实例
        const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })

        // 发送真正的网络请求
        return instance(config)
};
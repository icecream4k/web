import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
    state: {
        name: 'zhangsan',
        info: {
            name: 'hl',
            age: 18,
            gender: 'man'
        }
    },
    mutations: {
        moduleAupdateName(state, payload) {
            state.name = payload
        },
        moduleAupdateInfoName(state, payload) {
            state.info.name = payload
        }
    },
    actions: {
        moduleAupdateInfoName(context, payload) {
            // 在moduleA中的actions中,commit的话,会commit到自己的mutations
            return new Promise((res, rej) => {
                setTimeout(() => {
                    context.commit('moduleAupdateInfoName', payload)
                    res('AupdateName内部代码执行完毕')
                }, 1000);
            })

        }
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname2(state, getters) {
            return getters.fullname + `222`
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.conter
        }
    }
}

const moduleB = {
    state: {},
    mutation: {},
    actions: {},
    getters: {}
}

const store = new Vuex.Store({
    state: {
        // 保存状态
        conter: 1000,
        students: [{
                id: 110,
                name: 'han',
                age: 18
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
        ],
        info: {
            // 个人信息
            name: 'kobe',
            age: 40,
            height: 1.98
        }
    },
    mutations: {
        // mutations里面必须是同步方法,不然devtools不能很好地跟踪
        // 初始的加减方法
        // increment(state) {
        //     state.conter++
        // },
        // decrement(state) {
        //     state.conter--
        // },

        // 可以自定义传值的加减方法
        decrementCount(state, count) {
            state.conter -= count;
        },
        incrementCount(state, payload) {
            console.log(payload.count);
            state.conter += payload.count;
        },
        addStudent(state, stu) {
            state.students.push(stu);

        },
        updateInfo(state) {
            // state.info.name = 'codehl'
            // state.info['address'] = '洛杉矶';

            // 确实增加了address为洛杉矶,但是address并不在响应式系统里面
            // console.log(state.info.address);

            // 如果用Vue.set方法的话,那么就会变成响应式更新,下面数据发生变化的同时,界面也会发生变化
            // Vue.set(state.info,'address','洛杉矶')

            // 此时数据并不是响应式,虽然delete了age属性,但是页面并没有刷新
            // delete state.info.age;
            // console.log(state.info);

            // 如果用Vue.dalete方法,那么数据也会变成响应式,界面会发生变化
            // Vue.delete(state.info, 'age');


            // 此时的异步操作,并不能很好的跟踪数据
            // setTimeout(() => {
            //     state.info.name = 'codehl'
            // }, 1000);
            state.info.name = 'codehl'
            console.log(state.info.name);
        }
    },
    actions: {
        // 在这里来进行异步操作的
        // aupdateInfo的第二个参数可以接收传过来的参数,回调的函数和参数都可以
        // aupdateInfo(context,payload){
        //     setTimeout(() => {
        //         context.commit('updateInfo');
        //         console.log(payload.message); 
        //         payload.success()
        //     }, 1000);
        //     // console.log(state.info.name);
        // },

        // 优雅的接收参数的方式
        aupdateInfo(context, payload) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    context.commit('updateInfo');
                    console.log(payload);

                    res(`parameter value`)
                }, 1000);
            })
        }
    },
    getters: {
        // 处理数据
        powerCounter(state) {
            return state.conter * state.conter;
        },
        // ageOfTreatment(state) {
        // var arr = [];
        // arr.push(new Object({name:'han',age:18}))
        // arr.push(new Object({name:'wu',age:19}))
        // console.log(arr);

        //     let handleStudentsArray = []
        //     for (let i = 0; i < state.students.length; i++) {
        //         if (state.students[i]['age'] <= 18) {
        //             handleStudentsArray.push(new Object({
        //                 name: state.students[i]['name'],
        //                 age: state.students[i]['age']
        //             }))
        //         }

        //     }
        //     return handleStudentsArray
        // }


        more20stu(state) {
            // 获取年龄小于20岁的学生对象
            return state.students.filter(s => s.age <= 20)
        },
        more20stuLength(state, getters) {
            // 获取年龄小于20岁的学生个数
            // 可以根据传入的getters来获取getters里面的more20stu来直接得到长度
            return getters.more20stu.length
        },
        moerAgestu(state) {
            // 现在的age是传入的,而不是写死的
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules: {
        a: moduleA,
        b: moduleB
    }
})

// 3.导出store对象
export default store
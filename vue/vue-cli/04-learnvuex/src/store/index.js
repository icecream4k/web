import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
    state:{
        // 保存状态
        conter:1000
    },
    mutations:{

    },
    actions:{

    },
    getters:{

    },
    modules:{

    }
})

// 3.导出store对象
export default store
<template>
    <div class="home">
        <h1 class='heade_h1'><span>Mint</span><span>UI</span></h1>
        <h4>for <span>Vue.js</span></h4><br><br><br>
        <img alt="Vue logo" src="../assets/logo.png" /><br><br><br><br>
        <table>
            <tr>
                <td>
                    <button>
                        <router-link to="/">主页</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/header">头部</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/button">按钮</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/register">注册信息</router-link>
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button>
                        <router-link to="/field">注册</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/toast">提示框</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/checklist">多选按钮</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/radio">单选按钮</router-link>
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button>
                        <router-link to="/switch">开关按钮</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/navbar">导航栏</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/tabcontainer">标签容器</router-link>
                    </button>
                </td>
                <td>
                    <button>
                        <router-link to="/table">表格</router-link>
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button>
                        <router-link to="/tabbar">底部导航栏</router-link>
                    </button>
                </td>
                <td>
                    <button @click="onClick">
                        axios
                    </button>
                    {{sb}}
                </td>
                <td>

                </td>
                <td>

                </td>
            </tr>
        </table>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios'

export default {
    name: "Home",
    components: {
        HelloWorld
    },
    data(){
        return {
            sb:''
        }
    },
    methods:{
        onClick(){
            axios.defaults.baseURL = 'http://127.0.0.1:8000';

        // axios.get('/index').then(result => {
        // 	console.log(result.data);
        // })
        axios.get('/', {
            // params: {
            //     'appkey': 'uNIKUq+qSeRcshQufXsxk5khRF4AAAAADvkmRJ1HL4sAAAAAAAAAAA==',
            //     'json': { "phone": "13221069695" }
            // }
        }).then(result => {
            // console.log(result.data)
            console.log(result)
            this.sb=result.data        
            }) 
        }
    }
};
</script>
<style>
    table{
        width: 80%;
        margin: 0 auto;
    }
    .home>table>tr>td>button{
        width: 100%;
        height: 23px;
    }
    .heade_h1{
        font-size: 40px;
    }
    .heade_h1 :nth-child(1){
        color: #26a2ff;
    }
    .heade_h1 :nth-child(2){
        color: #1365a2;
    }
    /* -------------- */
    a{
        color:#1365a2;
    }
    h4>span{
        color: teal;
    }
</style>

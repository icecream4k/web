<template>
    <div id="app">
        <h2>------------APP内容------------</h2>
        <h2>{{ $store.state.conter }}</h2>
        <button @click="addCount(1)">+</button>
        <button @click="subtraction(1)">-</button>
        <button @click='addCount(5)'>+5</button>
        <button @click='addCount(10)'>+10</button>
        <button @click="addStudent">添加学生</button>
        <h3>------------APP内容:getters相关信息------------</h3>
        <h3>{{ $store.getters.powerCounter }}</h3>

        <h3>获取年龄小于18岁的学生对象 -->> {{ $store.getters.more20stu }}</h3>
        <h3>获取年龄小于18岁的学生对象的个数 -->> {{ $store.getters.more20stuLength }}</h3>
        <h3>获取年龄小于动态传入的岁数的学生对象{{$store.getters.moerAgestu(18)}}</h3>
        <h3>------------APP内容:info对象的内容是否是响应式------------</h3>
        <h2>{{$store.state.info}}</h2>
        <button @click="updateInfo">修改信息</button>
        <!-- <input type="button" value="获取" @click="changeValue"> -->
        <!-- <h3>{{$store.getters.ageOfTreatment}}</h3> -->
        <h2>------------Vuex内容------------</h2>
        <hello-vuex></hello-vuex>
    </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
    name: "App",
    data() {
        return {
            message: "我是app组件",
        };
    },
    components: {
        HelloVuex,
    },
    methods: {
        addition(count) {
            this.$store.commit("incrementCount",count);

        },
        subtraction(count) {
            this.$store.commit("decrementCount",count);
        },
        addCount(count){
            // 1.普通的提交封装
            // this.$store.commit('incrementCount',count);

            // 2.特殊的提交封装
            this.$store.commit({
                type:'incrementCount',
                count
            })
        },
        addStudent(){
            const stu = {id:114,name:'alan',age:21}
            this.$store.commit('addStudent',stu)
        },
        updateInfo(){
            this.$store.commit('updateInfo')
        }
        // changeValue(){
        //     this.$store.commit("doAgeOfTreatment");
        // }
    }
    // computed: {
    //     more20stu() {
    //         return this.$store.state.students.filter((s => s.age <= 20);
    //     },
    // },
};
</script>

<style>
</style>

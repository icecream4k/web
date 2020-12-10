<template>
    <div id="app">
        <h2>------------APP内容:modulesA中的内容------------</h2>
        <h2>{{$store.state.a.name}}</h2>    
        <input type="button" value="更改名字" @click="updateName">
        <h2>getters.fullname的内容 -->> {{$store.getters.fullname}}</h2>
        <h2>getters.fullname2的内容 -->> {{$store.getters.fullname2}}</h2>
        <h2>getters.fullname3的内容 -->> {{$store.getters.fullname3}}</h2>
        <h2>在modulesA中进行异步处理操作 --->> {{$store.state.a.info}}</h2>
        <input type="button" value="异步更改名字" @click="modulesAupdateInfoName">
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
        <button @click="updateInfo">更新信息</button>
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
            // 如果用actions的话,那么就不能用commit了,因为commit提交的是mutation,dispatch提交的是actions
            // 同样的,可以在dispatch后面的一个参数传递参数,包括函数和对象,都可以传递
            // this.$store.dispatch('aupdateInfo',{
            //     message:'我是携带的信息',
            //     success:()=>{
            //         console.log(`函数内部已经完成了`);
            //     }
            // })


            this.$store.dispatch(`aupdateInfo`,`我是携带的信息`).then(res=>{
                console.log(`actions内部实现了提交`);
                console.log(res);
            })

        },
        updateName(){
            this.$store.commit('moduleAupdateName','lisi')
        },
        modulesAupdateInfoName(){
            this.$store.dispatch(`moduleAupdateInfoName`,'wangwu').then(res=>{
                console.log(res);
            })
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

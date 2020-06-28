<template>
    <div>
        <!-- :options属性必须存在 -->
        <p>{{loves}}</p>
        <mt-checklist title="爱好" 
            align="right" 
            :options="options" 
            v-model="loves">
        </mt-checklist>
        <mt-button type='primary' @click='handler'>全选</mt-button>
    </div>
</template>
<script>
export default {
    methods:{
        handler(){
            // 清空之前存储的选项
            this.loves=[];
            this.options.forEach((item)=>{
                this.loves.push(item.value);
            });
        }
    },
    data() {
        return {
            // 存储选定的爱好
            loves: [],
            // 存储可选择的爱好
            options: [
                {
                    label: "学习",
                    value: "study"
                },
                {
                    label: "打游戏",
                    value: "game"
                },
                {
                    label: "打球",
                    value: "ball"
                },
                {
                    label: "吃",
                    value: "eat"
                }
            ]
        };
    }
};
</script>
<style>
.mint-checkbox-core {
    background-color: #42b983 !important;
    border-color: #35495e !important;
}
</style>
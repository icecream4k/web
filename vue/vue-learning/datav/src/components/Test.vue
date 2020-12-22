<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <dv-digital-flop :config="config" style="width:100px;height:50px;" class="td" />
        <input type="button" value="更变" @click="changevalue">
    </div>
</template>
<script>
    export default {
        name: 'Test',
        data() {
            return {
                tnumber:1,
                config:{number: [100],
                    content: `{nt}个`},
                config1: {
                    number: [100],
                    content: `{nt}个`
                },
                config2: {
                    number: [999],
                    content: `{nt}个`
                }
            }
        },
        methods: {
            changevalue() {
                if (this.tnumber%2===0) {
                    this.config = this.config1;
                    this.tnumber += 1
                } else{
                    this.config = this.config2;
                    this.tnumber += 1
                }
                // this.config1=this.config2;
                // console.log(this.config1);
            }
        },
        

    };
</script>
<style lang='less'>
    @import '../../styles/overall.less';

    .td {
        background-color: @tebgc;
        width: 500px;
        height: 500px;
    }
</style>
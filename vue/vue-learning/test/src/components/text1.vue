<template>
    <div class="test1">
        <input type="button" value="显示模态" @click="showD">
        <div v-show="show" class="d1">
            <div class="d2">
                <span @click="noShowD">close</span>
                <p>这里是模态对话框的内容,点击close取消模态</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'test1',
        data() {
            return {
                show: false
            }
        },
        methods: {
            showD() {
                this.show = true
            },
            noShowD() {
                this.show = false
            }
        },
    };
</script>
<style lang='less'>
    .d1 {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;
        background-color: rgba(31, 31, 31, 0.7);

        .d2 {
            width: 400px;
            height: 400px;
            border-radius: 5%;
            margin: 10% auto 0 auto;
            background-color: whitesmoke;
            
            span {
                cursor: pointer;
                transition: all 0.3s linear;
                &:hover {
                    color: crimson;
                }
            }
        }
    }
</style>
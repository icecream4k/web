<template>
    <div class="v-for-button">
        <div class="circle" v-for="(item,index) in words" v-bind:key="item.id">
            <!-- 循环内容 -->
            <p>msg {{item['msg']}}</p>
            <p>index {{index}}</p>
            <button class="btn" :class="{ red:changeRed == index}" @click="dothat(item.msg)">{{item.value}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                changeRed: -1,
                words: [{
                        id: 1,
                        value: '松木',
                        msg: '1'

                    },
                    {
                        id: 2,
                        value: '沉香',
                        msg: '2'
                    },
                    {
                        id: 3,
                        value: '连翘',
                        msg: '3'
                    },
                    {
                        id: 4,
                        value: '重楼',
                        msg: '4'
                    },
                    {
                        id: 5,
                        value: '龙葵',
                        msg: '5'
                    },

                ],
                atest: '原始的a'
            }
        },
        computed: {

        },
        methods: {
            checked(index) {
                this.changeRed = index;
            },
            dothat(msg) {
                console.log(msg);
            },
            han() {
                console.log(this.atest);
                console.log(this.btest);
            }
        },
        mounted() {
            this.han()
        },
    }
</script>

<style lang="less">
    .v-for-button {
        width: 95%;
        margin: 0 auto;
        margin-top: 5px;
    }

    .circle {
        width: 30%;
        margin-left: 8px;

        .btn {
            margin-top: 10px;
            background-color: white;
            border: 1px solid #C1C1C1;
            height: 40px;
            width: 100%;
            color: #202020;
            border-radius: 3px;
        }

        .red {
            margin-top: 10px;
            background-color: #FDF0EF;
            border: 1px solid #D04442;
            height: 40px;
            width: 100%;
            color: #D04442;
            border-radius: 3px;
        }
    }
</style>
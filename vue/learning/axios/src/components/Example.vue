<template>
    <div class="Example">
        <h2>实例</h2>
        <h3>{{result}}</h3>
    </div>
</template>
<script>
    export default {
        name: 'Example',
        data() {
            return {
                result:'',
            }
        },
        methods: {
            getValue() {
                // 可以创建实例,并且可以创建多个实例,每个实例有自己独立的配置
                const instance1 = this.$axios.create({
                    baseURL: 'http://123.207.32.32:8000',
                    timeout: 5500,
                });

                // 直接用不同的实例来进行请求
                instance1({
                    url: '/home/multidata'
                }).then(res => console.log(res));

                // 类似于创建了一个类,然后用不同的参数来进行使用一样的类似思想
                instance1({
                    url: '/home/data',
                    params: {
                        type: 'pop',
                        page: 1
                    }
                }).then(res => console.log(res))
            }
        },
        mounted() {
            this.getValue()
        },
        created() {
            this.$axios({
                url: 'http://123.207.32.32:8000/home/multidata'
            }).then(res => this.result = res)
        },
    };
</script>
<style lang='less'>
    .Example {
        height: 100%;
        width: 100%;
        background-color: skyblue;
    }
</style>
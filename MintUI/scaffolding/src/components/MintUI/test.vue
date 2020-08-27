<template>
    <div>
        <mt-header title="axios demo" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/button" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
        </mt-header>
        <span>axios返回的后端参数:</span>
        <h1>{{test}}</h1>
    </div>
</template>
<style scoped>
h1 {
    font-size: 50px;
}
</style>
<script>
import axios from "axios";
export default {
    name: "test",
    data() {
        return {
            test: ""
        };
    },
    mounted() {
        axios.defaults.baseURL = "http://127.0.0.1:8000";
        // axios.get('/index').then(result => {
        // 	console.log(result.data);
        // })
        axios
            .get("/", {
                // params: {
                //     'appkey': 'uNIKUq+qSeRcshQufXsxk5khRF4AAAAADvkmRJ1HL4sAAAAAAAAAAA==',
                //     'json': { "phone": "13221069695" }
                // }
            })
            .then(result => {
                console.log(result);
                this.test = result.data;
            });
    }
};
</script>
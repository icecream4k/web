<template>
    <div>
        <h1>{{sb}}</h1>
    </div>
</template>
<style scoped>
    h1{
        font-size: 50px;
    }
</style>
<script>
import axios from 'axios'
export default {
    name:'test',
    data(){
        return {
            sb:'',
        }
    },
    mounted(){
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
</script>
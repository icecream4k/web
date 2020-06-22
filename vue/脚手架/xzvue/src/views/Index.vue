<template>
    <div>
        <h1>这是首页</h1>
    </div>
</template>
<script >
export default {}
import axios from '../../static/utils/axios.min.js'

axios.defaults.baseURL='http://wrongmaker.top/';
axios.get('/json.php',
    {params:
        {
            'appkey':'uNIKUq+qSeRcshQufXsxk5khRF4AAAAADvkmRJ1HL4sAAAAAAAAAAA==',
            'json':'{"phone":"13758835575"}'
        }}).then(result=>{
							console.log(result.data)
                        })
// http://wrongmaker.top/json.php?appkey=uNIKUq+qSeRcshQufXsxk5khRF4AAAAADvkmRJ1HL4sAAAAAAAAAAA==&json={"phone":"13758835575"}
</script>

import Vue from 'vue'
// 过滤电影名和影院名称
Vue.filter('strFilter',(oldVal,type)=>{
  if(type=="loca"){
    return oldVal.length>20 ? oldVal.substr(0,20)+"..." : oldVal 
  }else if(type=="cName"){
    return oldVal.length>8 ? oldVal.substr(0,8)+"..." : oldVal
  }
})
// 过滤用户名
Vue.filter('unameFilter',(oldVal)=>{
  return oldVal.substr(0,3)+"****"+oldVal.slice(-4)
})
// webp格式支持，则过滤图片地址，后缀名改为webp
// Vue.filter('urlFilter',(oldUrl)=>{
//   const isSupportWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
//   if(isSupportWebp){
//     oldUrl=oldUrl.replace(/\.(jpg|png)$/ig,".webp")
//     return oldUrl  
//   }else{
//     return oldUrl
//   }
// })


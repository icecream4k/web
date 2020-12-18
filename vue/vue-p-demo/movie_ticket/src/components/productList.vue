<template>
  <div>
    <!-- 循环渲染食品数据 -->
    <div v-for="(item,i) of arr" :key="i" class="pop_item">
      <div><img :src="baseUrl+item.fpic" alt /></div>
      <div class="item_details">
        <span v-text="item.fName"></span>
        <div>
           <span class="sale">促销价：</span><span class="salePrice" v-text="`${item.price}元`"></span>
        </div>
        <span v-text="item.sale" class="olderPrice"></span>
        <div class="saleCount">
          <button :data-tab="item.tid" :data-index="i" :data-fid="item.fid"  v-show="count[item.tid-1].fdata[i]>0" @click="dec" class="btnDec">—</button>
          <span v-show="count[item.tid-1].fdata[i]>0" v-text="count[item.tid-1].fdata[i]"></span>
          <button :data-tab="item.tid" :data-index="i" :data-fid="item.fid" class="add"  @click="inc">+</button>
        </div>
      </div>
    <div style="display:none">{{total}}</div>
    </div>
  </div>
</template>
<script>

import {baseUrl} from "../common.js"
export default {
 
  data() {
    return {
      sum: 0,
      newSum:0,
      n:1,
      Count: 0,
      item: {},
      baseUrl
    };
  },
  props: {
    arr: { default: Array },
    count: { default: Array },
    changeTab: { type: Function},
    divNone: { default: Object}
  },
  computed:{
    total(){
       var totalPrice=0;
        // this.$emit("total", this.sum);
        this.$store.getters.getProductionItem.forEach((elem)=>{
          totalPrice+=elem.count*elem.Price
        })
        // console.log(this.$store.getters.getProductionItem);
        this.$emit("getTotal",totalPrice)
       
        // return totalPrice
    }
      
  },
  methods: {
    // 食品增加按钮方法
    inc(e) {
      this.divNone.none = false;
      var tid = e.target.dataset.tab;
      // console.log(tid);
      var index = e.target.dataset.index;
      // console.log(index);
      // console.log(this.arr);
      this.changeTab(tid);
      // if(tid==){}
      // 找到当前面板的当前的小食类进行累加
      for (var j = 0; j < 4; j++) {
        if (tid == this.count[j].fid) {
          // console.log(tid == this.count[j].fid); //true
          if (this.count[j].fdata.length == 0) {
            for (var x = 0; x < this.arr.length; x++) {
              this.count[j].fdata.push(0);
            }
          }
          this.count[j].fdata[index]++;
        }
      }
      // 同时向vuex中把小食信息传入
      this.item.Price = this.arr[index].price;
      // console.log(this.item.Price)
      this.item.fname = this.arr[index].fName;
      // console.log( this.item.fname)
      this.item.count = this.count[tid - 1].fdata[index];
      // console.log(this.item.count)
      this.item.fid = this.arr[index].fid;
      // this.$emit("getCount", this.$store.getters.getProductionItem);
      // console.log(this.arr[index].price);
      var Price = parseInt(this.arr[index].price);
      var Count = parseInt(this.count[tid - 1].fdata[index]);
      var Count = parseInt(this.count[tid - 1].fdata[index]);
    //  console.log(this.$store.getters.getProductionItem.length)
      (() => {
        // 要用箭头函数 保持内外this指向一致
        // 每一次都需要需要克隆一个新的对象
        if (Count == 1) {
          function clone(obj) {
            //定义函数克隆一个对象
            var newObj = {}; //先创建空对象,新的对象地址
            for (var key in obj) {
              //遍历原对象每个属性
              //每遍历一个属性，就要在新对象中添加同名属性，值等于原对象中同名属性的值
              newObj[key] = obj[key];
              //newObj.key=obj.key;
              // newObj["key"]=obj["key"]
            }
            return newObj;
          }
          var newObj = clone(this.item);
          // console.log(newObj);
          this.$store.dispatch("getCount",newObj);
        }
        // 向vuex中传入小食信息时，如果数量大于1 做一个判断 仅仅改变信息中的count即可
        else if(Count>1){
            var fid=this.arr[index].fid;
            this.$store.dispatch("getChange", fid);
        }
        // 
        // console.log(this.$store.getters.getProductionItem);
        
      })();
      // 子组件向父组件传值
      // this.$emit("total", this.sum);
      // console.log(this.sum);
    },
    // 按钮减少方法
    dec(e) {
      var tid = e.target.dataset.tab;
      // console.log(tid);
      var index = e.target.dataset.index;
      // console.log(index);
      this.changeTab(tid);
      for (var j = 0; j < 4; j++) {
        if (tid == this.count[j].fid) {
          this.count[j].fdata[index]--;
        }
      }
      // console.log(this.arr[index].price);
      var Price = parseInt(this.arr[index].price);
      var Count = parseInt(this.count[tid - 1].fdata[index]);
      // console.log(Count);
     
      // 向vuex中传入小食信息
      if(Count>=1){
          var fid=this.arr[index].fid;
          this.$store.dispatch("getdecCount",fid);
      }else{
          var fid=this.arr[index].fid;
          // this.divNone.none = true;
        this.$store.dispatch("getDelete",fid);
        // this.$store.commit("delete")
      }
    }
  },
};
</script>
<style scoped>
.pop_item {
  margin-top:1.2rem;
  padding-bottom: 1.2rem;
  display: flex;
  justify-content: space-between;
  border-bottom:1px solid #e5e5e5;
}
.pop_item>div:first-child>img{
  width: 7rem;
  padding-left:1.5rem;
}
.item_details {
  display: flex;
  flex-direction: column;
  margin-right:  2.2rem;
  margin-top: 0.0833rem;
  align-items: flex-end;
}
.item_details > span:nth-child(1) {
  color:#000;
  font-size: 1.2rem;
  padding-bottom: 0.6666rem;
}
.sale{
  font-size: 1.1rem;
  color: #C63B2D;
}
.salePrice{
  font-size:1.25rem;
  color:#C63B2D;
}
.olderPrice{
  padding-top: 0.5rem;
  padding-bottom:.5rem;
  font-size:1.1rem;
  text-decoration: line-through;
  color:#aaa;
}
.saleCount{
  margin-top:.5rem;
}
.saleCount button {
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  line-height:1.2rem;
  text-align:center;
  background: #C63B2D;
  margin-top:-0.5rem;
  color:#fff;
}
.btnDec{
  font-size:1rem;
}
.add{
  font-size:1.4rem;
}
.saleCount>span {
  /* display: inline-block; */
  font-size: 1.3333rem;
  margin-left:.5rem;
  margin-right:.5rem;
}
</style>




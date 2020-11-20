<template>
  <canvas ref="code" @click="randomCode">
    
  </canvas>
</template>

<script>
export default {
  data(){
    return {
      options:{
        txt:"1234",
        height:30,
        width:60
      }
    }
  },
  methods:{
    writeAuthCode(){
      let canvas = this.$refs.code;
      canvas.width=this.options.width;
      canvas.height=this.options.height;
      // 创建一个canvas对象
      let ctx = canvas.getContext('2d');
      ctx.textBaseline = "middle";
      // 这个范围的颜色作背景看起来清晰一些
      ctx.fillStyle = this.randomColor(180, 255);
      ctx.fillRect(0, 0, this.options.width, this.options.height);
      for (let i = 0; i < this.options.txt.length; i++) {
          // 让每个字都不一样
          let txt = this.options.txt.charAt(i);
          ctx.font = '20px SimHei';
          // 随机生成字体颜色
          ctx.fillStyle = this.randomColor(50, 160); 
          let x = this.options.width / (this.options.txt.length+1) * (i+0.5);
          let y = this.options.height / 2;
          let deg = this.randomNum(-45, 45);
          //设置旋转角度和坐标原点
          ctx.translate(x, y);
          ctx.rotate(deg * Math.PI / 180);
          ctx.fillText(txt, 0, 0);
          //恢复旋转角度和坐标原点
          ctx.rotate(-deg * Math.PI / 180);
          ctx.translate(-x, -y);
      }
      //1~4条随机干扰线随机出现
      for (let i = 0; i < this.randomNum(1,4); i++) {
          ctx.strokeStyle = this.randomColor(40, 180);
          ctx.beginPath();
          ctx.moveTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
          ctx.lineTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
          ctx.stroke();
      }
      //绘制干扰点
      for (let i = 0; i < this.options.width / 6; i++) {
          ctx.fillStyle = this.randomColor(0, 255);
          ctx.beginPath();
          ctx.arc(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
          ctx.fill();
      }
      
      // function randomNum(min, max) {
      //     return Math.floor(Math.random() * (max - min) + min);
      // }
      
      // function randomColor(min, max) {
      //     let r = randomNum(min, max);
      //     let g = randomNum(min, max);
      //     let b = randomNum(min, max);
      //     return "rgb(" + r + "," + g + "," + b + ")";
      // }
      

    },
    //随机颜色
    randomColor(min, max){
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    //随机数字
    randomNum(min, max){
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 生成随机验证码
    randomCode(){
      var num = 0;
      for (var i = 1, res = ''; i <= 4; i++) {
        // 通过匹配unicode码
          switch (parseInt(Math.random() * 3) + 1) {
              case 1:
                  num = parseInt(Math.random() * 26) + 65;
                  break;
              case 2:
                  num = parseInt(Math.random() * 26) + 97;
                  break;
              case 3:
                  num = parseInt(Math.random() * 10) + 48;
          }
          // 字符，+拼接为字符串
          res+= String.fromCharCode(num);
      }
      //将随机生成的验证码放入options中
      this.options.txt=res;
      // 调用背景生成函数writeAuthCode，传入参数options
      this.writeAuthCode(this.options);
    }
  },
  mounted(){
    this.randomCode()
    // console.log(this.options.txt)
  },
  watch:{
    'options.txt'(){
      this.$emit("getCode",this.options.txt)
      // console.log(this.options.txt)
    }
  }
}
</script>


<style scoped lang="stylus">
 
</style>

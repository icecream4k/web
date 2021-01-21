<template>
    <div id="app">
        <canvas id="stars"></canvas>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Index",
        data() {
            return {
                context: null,
                arr: new Array(),
                starCount: 800,
                rains: new Array(),
                rainCount: 1,
                Star: () => {
                    this.x = windowWidth * Math.random(); //横坐标
                    this.y = 5000 * Math.random(); //纵坐标
                    this.text = "."; //文本
                    this.color = "white"; //颜色
                    //产生随机颜色
                    this.getColor = function() {
                        var _r = Math.random();
                        if (_r < 0.5) {
                            this.color = "#333";
                        } else {
                            this.color = "white";
                        }
                    }
                    //初始化
                    this.init = function() {
                        this.getColor();
                    }
                    //绘制
                    this.draw = function() {
                        context.fillStyle = this.color;
                        context.fillText(this.text, this.x, this.y);
                    }
                },
                MeteorRain: function() {
                    this.x = -1;
                    this.y = -1;
                    this.length = -1; //长度
                    this.angle = 30; //倾斜角度
                    this.width = -1; //宽度
                    this.height = -1; //高度
                    this.speed = 1; //速度
                    this.offset_x = -1; //横轴移动偏移量
                    this.offset_y = -1; //纵轴移动偏移量
                    this.alpha = 1; //透明度
                    this.color1 = ""; //流星的色彩
                    this.color2 = ""; //流星的色彩
                    /****************初始化函数********************/
                    this.init = function() //初始化
                    {
                        this.getPos();
                        this.alpha = 1; //透明度
                        this.getRandomColor();
                        //最小长度，最大长度
                        var x = Math.random() * 80 + 50;
                        this.length = Math.ceil(x);
                        //         x = Math.random()*10+30;
                        this.angle = 35; //流星倾斜角
                        x = Math.random() + 0.5;
                        this.speed = Math.ceil(x); //流星的速度
                        var cos = Math.cos(this.angle * 3.14 / 180);
                        var sin = Math.sin(this.angle * 3.14 / 180);
                        this.width = this.length * cos; //流星所占宽度
                        this.height = this.length * sin; //流星所占高度
                        this.offset_x = this.speed * cos;
                        this.offset_y = this.speed * sin;
                    }
                    /**************获取随机颜色函数*****************/
                    this.getRandomColor = function() {
                        var a = Math.ceil(255 - 240 * Math.random());
                        //中段颜色
                        this.color1 = "rgba(" + a + "," + a + "," + a + ",1)";
                        //结束颜色
                        this.color2 = "black";
                    }
                    /***************重新计算流星坐标的函数******************/
                    this.countPos = function() //
                    {
                        //往左下移动,x减少，y增加
                        this.x = this.x - this.offset_x;
                        this.y = this.y + this.offset_y;
                    }
                    /*****************获取随机坐标的函数*****************/
                    this.getPos = function() //
                    {
                        //横坐标200--1200
                        this.x = Math.random() * window.innerWidth; //窗口高度
                        //纵坐标小于600
                        this.y = Math.random() * window.innerHeight; //窗口宽度
                    }
                    /****绘制流星***************************/
                    this.draw = function() //绘制一个流星的函数
                    {
                        context.save();
                        context.beginPath();
                        context.lineWidth = 1; //宽度
                        context.globalAlpha = this.alpha; //设置透明度
                        //创建横向渐变颜色,起点坐标至终点坐标
                        var line = context.createLinearGradient(this.x, this.y,
                            this.x + this.width,
                            this.y - this.height);
                        //分段设置颜色
                        line.addColorStop(0, "white");
                        line.addColorStop(0.3, this.color1);
                        line.addColorStop(0.6, this.color2);
                        context.strokeStyle = line;
                        //起点
                        context.moveTo(this.x, this.y);
                        //终点
                        context.lineTo(this.x + this.width, this.y - this.height);
                        context.closePath();
                        context.stroke();
                        context.restore();
                    }
                    this.move = function() {
                        //清空流星像素
                        var x = this.x + this.width - this.offset_x;
                        var y = this.y - this.height;
                        context.clearRect(x - 3, y - 3, this.offset_x + 5, this.offset_y + 5);
                        this.countPos();
                        //透明度增加
                        this.alpha -= 0.002;
                        //重绘
                        this.draw();
                    }
                }

            }
        },
        methods: {
            init() {
                //获取canvas
                let stars = document.getElementById("stars");
                windowWidth = window.innerWidth; //当前的窗口的高度
                stars.width = windowWidth;
                stars.height = window.innerHeight;
                //获取context
                context = stars.getContext("2d");
            },
            playStars() {
                for (var n = 0; n < starCount; n++) {
                    arr[n].getColor();
                    arr[n].draw();
                }

                setTimeout("playStars()", 100);
            }
        }
    }
</script>
<style lang="less">
    @import "./assets/less/App.less";
</style>
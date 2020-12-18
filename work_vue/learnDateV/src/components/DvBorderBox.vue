<template>
    <div class="dv-border-box-1">
        <router-link to="/home" tag="button">首页</router-link>

        <ul>
            <li>
                <table width="400px">
                    <tr>
                        <td>
                            <p>
                                <b>属性</b>
                            </p>
                        </td>
                        <td>
                            <p>
                                <b>说明</b>
                            </p>
                        </td>
                        <td>
                            <p>
                                <b>类型</b>
                            </p>
                        </td>
                        <td>
                            <p>
                                <b>可选值</b>
                            </p>
                        </td>
                        <td>
                            <p>
                                <b>默认值</b>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>自定义颜色</td>
                        <td>String []</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>backgroundColor</td>
                        <td>背景色</td>
                        <td>String</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>dur</td>
                        <td>单词动画时长(秒)</td>
                        <td>Number</td>
                        <td>-</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>边框标题</td>
                        <td>String</td>
                        <td>-</td>
                        <td>''</td>
                    </tr>
                    <tr>
                        <td>titleWidth</td>
                        <td>标题宽度</td>
                        <td>Number</td>
                        <td>-</td>
                        <td>250</td>
                    </tr>
                </table>
            </li>
            <li>
                <p>边框1(BUG)</p>
                <div class="background_box">
                    <!-- <dv-border-box-1>
                        </dv-border-box-1> -->
                </div>
            </li>
            <li>
                <p>边框2</p>
                <div class="background_box">
                    <dv-border-box-2> </dv-border-box-2>
                </div>
            </li>
            <li>
                <p>边框3</p>
                <div class="background_box">
                    <dv-border-box-3> </dv-border-box-3>
                </div>
            </li>
            <li>
                <p>边框4</p>
                <div class="background_box">
                    <dv-border-box-4> </dv-border-box-4>
                </div>
            </li>
            <li>
                <p>边框5</p>
                <div class="background_box">
                    <dv-border-box-5> </dv-border-box-5>
                </div>
            </li>
            <li>
                <p>边框6</p>
                <div class="background_box">
                    <dv-border-box-6> </dv-border-box-6>
                </div>
            </li>
            <li>
                <p>边框7</p>
                <div class="background_box">
                    <dv-border-box-7> </dv-border-box-7>
                </div>
            </li>
            <li>
                <p>边框8</p>
                <div class="background_box">
                    <dv-border-box-8></dv-border-box-8>
                </div>
            </li>
            <li>
                <p>边框8[特殊配置]</p>
                <div class="background_box">
                    <dv-border-box-8 :reverse="true"></dv-border-box-8>
                </div>
            </li>
            <li>
                <p>边框9</p>
                <div class="background_box">
                    <dv-border-box-9></dv-border-box-9>
                </div>
            </li>
            <li>
                <p>边框10</p>
                <div class="background_box">
                    <dv-border-box-10></dv-border-box-10>
                </div>
            </li>
            <li>
                <p>边框11</p>
                <div class="background_box">
                    <dv-border-box-11
                        title="标签文本显示区域"
                    ></dv-border-box-11>
                </div>
            </li>
            <li>
                <p>边框12</p>
                <div class="background_box">
                    <dv-border-box-12></dv-border-box-12>
                </div>
            </li>
            <li>
                <p>边框13</p>
                <div class="background_box">
                    <dv-border-box-13></dv-border-box-13>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "dv-border-box",
};
</script>
<style>
</style>
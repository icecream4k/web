<template>
    <div>
        <router-link to="/home" tag="button">首页</router-link>
        <div>
            <ul>
                <li>
                    <table>
                        <tr>
                            <td>
                                <p><b>属性</b></p>
                            </td>
                            <td>
                                <p><b>说明</b></p>
                            </td>
                            <td>
                                <p><b>类型</b></p>
                            </td>
                            <td>
                                <p><b>可选值</b></p>
                            </td>
                            <td>
                                <p><b>默认值</b></p>
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
                            <td>dur</td>
                            <td>单词动画时长(秒)</td>
                            <td>Number</td>
                            <td>-</td>
                            <td>3</td>
                        </tr>
                    </table>
                </li>
                <li>
                    <p>装饰1</p>
                    <div class="background_box">
                        <dv-decoration-1 style="width: 200px; height: 50px" />
                    </div>
                </li>
                <li>
                    <p>装饰2</p>
                    <div class="background_box">
                        <dv-decoration-2 style="width: 200px; height: 5px" />
                    </div>
                </li>
                <li>
                    <p>装饰2-1</p>
                    <div class="background_box">
                        <dv-decoration-2 :reverse="true" style="width: 5px; height: 150px" />
                    </div>
                </li>
                <li>
                    <p>装饰3</p>
                    <div class="background_box">
                        <dv-decoration-3 style="width: 250px; height: 30px" />
                    </div>
                </li>
                <li>
                    <p>装饰4</p>
                    <div class="background_box">
                        <dv-decoration-4 style="width: 5px; height: 150px" />
                    </div>
                </li>
                <li>
                    <p>装饰4-1</p>
                    <div class="background_box">
                        <dv-decoration-4 :reverse="true" style="width: 250px; height: 5px" />
                    </div>
                </li>
                <li>
                    <p>装饰5</p>
                    <div class="background_box">
                        <dv-decoration-5 style="width: 300px; height: 40px" />
                    </div>
                </li>
                <li>
                    <p>装饰6</p>
                    <div class="background_box">
                        <dv-decoration-6 style="width: 300px; height: 30px" />
                    </div>
                </li>
                <li>
                    <p>装饰7</p>
                    <div class="background_box">
                        <dv-decoration-7 style="width: 150px; height: 30px">
                            <span style="color: white">样式字体</span>
                        </dv-decoration-7>
                    </div>
                </li>
                <li>
                    <p>装饰8</p>
                    <div class="background_box">
                        <dv-decoration-8 style="width: 300px; height: 50px" />
                    </div>
                </li>
                <li>
                    <p>装饰8-1</p>
                    <div class="background_box">
                        <dv-decoration-8 :reverse="true" style="width: 300px; height: 50px" />
                    </div>
                </li>
                <li>
                    <p>装饰9</p>
                    <div class="background_box">
                        <dv-decoration-9 style="width: 150px; height: 150px">
                            <span style="color: white"><b>66%</b></span>
                        </dv-decoration-9>
                    </div>
                </li>
                <li>
                    <p>装饰10</p>
                    <div class="background_box">
                        <dv-decoration-10 style="width: 90%; height: 5px" />
                    </div>
                </li>
                <li>
                    <p>装饰11</p>
                    <div class="background_box">
                        <dv-decoration-11 style="width: 200px; height: 60px"><span style="color: white"><b>样板文字</b></span></dv-decoration-11>
                    </div>
                </li>
                <li>
                    <table>
                        <tr>
                            <td>
                                <p><b>属性</b></p>
                            </td>
                            <td>
                                <p><b>说明</b></p>
                            </td>
                            <td>
                                <p><b>类型</b></p>
                            </td>
                            <td>
                                <p><b>可选值</b></p>
                            </td>
                            <td>
                                <p><b>默认值</b></p>
                            </td>
                        </tr>
                        <tr>
                            <td>scanDur</td>
                            <td>扫描动画时长(秒)</td>
                            <td>Number</td>
                            <td>-</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>haloDur</td>
                            <td>光晕动画时长(秒)</td>
                            <td>Number</td>
                            <td>-</td>
                            <td>2</td>
                        </tr>
                    </table>
                    <p>装饰12</p>
                    <div class="background_box">
                        <dv-decoration-12 style="width:150px;height:150px;" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Decorate"
    };
</script>
<style scoped>
</style>
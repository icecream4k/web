<template>
    <div>
        <h1 class="home_title">dataV</h1>
            <div class="home_d">
                <router-link to='test' tag="button">测试页</router-link>
                <router-link to='full_screen_container' tag="button">全屏容器</router-link>
                <router-link to='loading_demo' tag="button">loading加载</router-link>
                <router-link to='dvborderbox' tag="button">边框特效</router-link>
                <router-link to="decorate" tag="button">装饰</router-link><br><br>
                <router-link to="dynamic_ring_graph" tag="button">动态环形图表</router-link>
                <router-link to="capsule_column" tag="button">胶囊柱图</router-link>
                <router-link to="water_level_chart" tag="button">水位图</router-link>
                <router-link to="progress_pool" tag="button">进度池</router-link>
                <router-link to="flying_line_diagram" tag="button">飞线图</router-link><br><br>
                <router-link to="cone_column_chart" tag='button'>锥形柱图</router-link>
                <router-link to="digital_flipper" tag="button">数字翻牌器</router-link>
                <router-link to="Ranking_rotation_table" tag="button">轮播表</router-link>
            </div>
    </div>
</template>
<script>
    export default {
        name: 'Home'
    };
</script>
<style lang='less'>
    .home_title {
        text-align: center;
        color: #17d0c2;
    }

    .home_d {
        position: absolute;
        left: 50%;
        top: 15%;
        margin-top: -50px;
        margin-left: -175px;
    }
</style>
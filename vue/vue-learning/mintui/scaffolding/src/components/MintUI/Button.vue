
<template>
    <div>
        <mt-header title="button demo" fixed>
            <router-link to='/' slot="left">
                <mt-button icon='back'></mt-button>
            </router-link>
            <router-link to='/button' slot="right">
                <mt-button icon='more'></mt-button>
            </router-link>
        </mt-header>
        <p>
            <mt-button type="default" size="small">默认</mt-button>
        </p>
        <p>
            <mt-button type="primary" size="normal" icon="more" disabled>主要[被disabled禁用]</mt-button>
        </p>
        <router-link to="/">
            <p>
                <mt-button type="danger" size="large" icon="back">危险</mt-button>
            </p>
        </router-link>
        <p>
            <mt-button type="primary" size="normal">
                <img src="../../assets/shuaxin.png" alt slot="icon" />
                重新加载
            </mt-button>
        </p>
        <p>
            <mt-button type="primary" size="normal" class="iconfont icon-delete">自定义图标</mt-button>
        </p>
    </div>
</template>
<script>
import "../../assets/font_rdkgeqhf1k/iconfont.css";
export default {};
</script>
<template>
    <div class="index" id="index">
        <div class="integratedContainer">
            <!-- 首页上方导航内容 -->
            <div class="pageHeader">
                <Header />
            </div>
            <dv-decoration-10 class="indexDec"  style="width:100%;height:5px;" />
            <!-- 主体内容 -->
            <div class="pageMain">
                <Main />
            </div>
            <!-- 页脚 -->
            <div class="pageFooter">
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/header/Header";
    import Main from "../components/main/Main";
    import Footer from "../components/footer/Footer";
    export default {
        name: "index",
        components: {
            Header,
            Main,
            Footer
        }
    }
</script>

<style lang='less'>
    .pageMain {
        margin-top: 2vh;
    }

    .indexDec {
        position: absolute;
        left: 0;
    }
</style>
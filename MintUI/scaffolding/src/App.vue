<template>
    <div id="app">
        <div id="nav">
            <br />
            <br />
            <br />
            <br />
            <br />
            <router-link to="/">Home</router-link>|
            <router-link to="/header">头部</router-link>|
            <router-link to="/button">按钮</router-link> |
            <router-link to='/register'>注册信息</router-link> |
            <router-link to="/field">注册</router-link> |
            <router-link to="/toast">提示框</router-link>
            <br />
            <br />
            
            <router-link to="/checklist">多选按钮</router-link> |
            <router-link to="/radio">单选按钮</router-link> |
            <router-link to="/switch">开关按钮</router-link> |
            <router-link to="/navbar">导航栏</router-link> |
            <router-link to="/tabcontainer">tabcontainer</router-link>

        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>

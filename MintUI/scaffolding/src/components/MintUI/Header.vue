<template>
    <div>
        <mt-header title="Header demo" fixed>
            <router-link to='/' slot="left">
                <mt-button icon='back'></mt-button>
            </router-link>
            <router-link to='/button' slot="right">
                <mt-button icon='more'></mt-button>
            </router-link>
        </mt-header>
        <div class='header_div'>
            <span>this mode in top↑↑↑↑</span>
        </div>
    </div>
</template>
<style>
    .header_div{
        margin-top:200px;
    }
</style>
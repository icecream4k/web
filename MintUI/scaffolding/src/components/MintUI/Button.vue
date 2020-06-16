<template>
    <div>
        <p><mt-button type='default' size='small'>默认</mt-button></p>
        <p><mt-button type='primary' size='normal' icon='more' disabled>主要[被disabled禁用]</mt-button></p>
        <router-link to='/'><p><mt-button type='danger' size='large' icon='back'>危险</mt-button></p></router-link>
    </div>
</template>
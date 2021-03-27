// 组件名：因为将来组件名会成为HTML中的标签名，又因为HTML不区分大小写，所以当组件名包含多个单词时，不要用驼峰命名法，应该用 - 来分隔每个单词，而且全小写
Vue.component('hl-hr', {
    template: `
    <div class='test-hr'>
        <br>
        <hr style='color: black;size: 2px;'>
        <br>
    </div>
    `,
    data() { //相当于以前的data
        return {}
    },
    methods: {

    }
})
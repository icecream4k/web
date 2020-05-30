Vue.component("todo",{
  template:`<div class="todo">
    <h1>待办事项列表</h1>
    <todo-add></todo-add>
    <todo-list :tasks="tasks"></todo-list>
  </div>`,
  data(){
    return {
      tasks:["吃饭","睡觉","打亮亮"]
    }
  },
  components:{ todoAdd, todoList }
})
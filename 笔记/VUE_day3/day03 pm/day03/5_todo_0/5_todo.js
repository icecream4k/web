Vue.component("todo",{
  template:`<div class="todo">
    <h1>待办事项列表</h1>
    <todo-add></todo-add>
    <todo-list></todo-list>
  </div>`,
  components:{ todoAdd, todoList }
})
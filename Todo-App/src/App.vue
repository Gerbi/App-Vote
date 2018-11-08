<template>
<div class="container" id="app">
  <div class="row">
    <div class="col-md-5 col-sm-6">
      <div class="card" style="border:none">
        <div class="card-header">
          <h4 align="center">Todos</h4>
        </div>
        <div class="card-body">
          <AddTodo @add-todo="addTodo"/>
          <hr>
          <TodoListView :todos="unFinishedTodos" @completed-todo="completedTodo"/>
          
        </div>
        <div class="card-footer">
          <strong>
            <span>{{unFinishedTodos.length}}</span> Items Left
          </strong>
        </div>
      </div>
      <br>

      
    </div>
    <div class="col-md-7 col-sm-6">
        <FinishedTodo :todos="finishedTodos" @delete-todo="deleteTodo"/>
        
    </div>
  </div>

</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoListView from './components/TodoListView.vue';
import AddTodo from './components/AddTodo.vue';
import FinishedTodo from './components/FinishedTodo.vue';
import {todos} from './seed.js'
export default {
  name: 'app',
  data(){
    return {
      todos: todos 
    }
  },
  
  components: {
    TodoListView,
    AddTodo,
    FinishedTodo
  },
  methods:{
    addTodo(event){
      this.todos.push(event);
    },
    completedTodo(event){
      const index = this.todos.findIndex(todo => todo.id === event.id);
      this.todos[index].completed = true
    },
    deleteTodo(event){
      const index = this.todos.findIndex(todo => todo.id === event.id);
      this.todos.splice(index, 1);
    }
  },
  computed:{
        finishedTodos(){
          return this.todos.filter(todo => todo.completed === true)

        },
        unFinishedTodos(){
          return this.todos.filter(todo => todo.completed === false)
            
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

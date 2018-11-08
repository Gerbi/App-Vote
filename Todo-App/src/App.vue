<template>
<div class="container" id="app">
  <div class="row">
    <div class="col-md-5 col-sm-6">
      <div class="card" style="border:none">
        <div class="card-header">
          <h4 align="center">Todos</h4>
        </div>
        <div class="card-body">
          <AddTodo/>
          <hr>
          <TodoListView :todos="unFinishedTodos"/>
          
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
      <div class="card" style="border:none">
        <div class="card-header">
          <h4 align="center">Done</h4>
          
        </div>
      <FinishedTodo :todos="finishedTodos"/>
      <div class="card-footer">
        <div class="row">
                    <div class="col-auto mr-auto">
                       <h4>Items</h4>
                    </div>
                    <div class="col-auto">
                    <h4><span class="badge badge-success">{{finishedTodos.length}}</span></h4>
                    </div>
                    
                </div>
      </div>
      </div>
        
        
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
import EventBus from './EventBus.js';
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
  created (){
    EventBus.$on('add-todo', event =>this.addTodo(event));
    EventBus.$on('completed-todo', event =>this.completedTodo(event));
    EventBus.$on('delete-todo', event =>this.deleteTodo(event));
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

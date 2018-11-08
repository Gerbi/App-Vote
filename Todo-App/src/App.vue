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
          <TodoListView :todos="todos"/>
          

          <div class="card">
            <div class="card-body">Items LEft</div>
          </div>
  
        </div>
      </div>
      <br>

      
    </div>
    <div class="col-md-7 col-sm-6">
        <FinishedTodo/>
        
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

<template>
    <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="todo in todos" :key="todo.id">
              <div class="custom-control custom-checkbox">
                  <label class="custom-control-label">
                <input type="checkbox" class="custom-control-input" @click="finishedTodo(todo.id)"/>{{todo.title}}</label>
              </div>
              
            </li>
            
          </ul>
</template>
<script>
import EventBus from '../EventBus.js'
export default {
    name: 'TodoListView',
    props:{
        todos:{
            type: Array,
            required: true
        }
    },
    methods:{
        finishedTodo(todoId){
            EventBus.$emit('completed-todo',{id: todoId})
        }
    }
}
    
</script>

<template>
    <div class="card" style="border:none">
        <div class="card-header">
          <h4 align="center">Done</h4>
          </div>
        <div class="card-body">
            <ul class="nav flex-column">
                <li class="list-group-item" v-for="todo in todos" :key="todo.id">{{todo.title}}
                <button class="btn" @click="removeTodo(todo.id)">
            <i class="fa fa-trash"></i>
            </button>
            </li>
            </ul>
          
        </div>
      </div>
</template>
<script>
    export default {
        name: 'FinishedTodo',
        props:{
            todos:{
                type: Array,

            }
        },
        methods:{
            removeTodo(todoId){
                this.$emit('delete-todo', {id: todoId})
            }
        }
    }
</script>
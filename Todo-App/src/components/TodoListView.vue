<template>
    <ul class="nav flex-column" style="border:none">
            <li class="list-group-item" v-for="todo in todos" :key="todo.id" 
            style="border:none; border-bottom:solid; padding:2px; ">
              <div class="checkbox">
                  <label>
                <input type="checkbox" class="checkbox-custom"@click="finishedTodo(todo.id)"/>{{todo.title}}</label>
              </div>
            </li>
            
          </ul>
</template>
<script>
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
            this.$emit('completed-todo',{id: todoId})
        }
    }
}
    
</script>

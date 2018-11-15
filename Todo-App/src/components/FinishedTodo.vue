<template>
    
        
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="todo in todos" :key="todo.id">
                    
                <div class="row">
                    <div class="col-auto mr-auto">
                        {{todo.title}}
                    </div>
                    <div class="col-auto">
                    <button class="btn" @click="removeTodo(todo.id)">
            <i class="fa fa-trash "></i>
            </button>
                    </div>
                    
                </div>
                
            </li>
            </ul>
          
        </div>
     
</template>
<script>

    export default {
        name: 'FinishedTodo',
        props:{
            todos:{
                type: Array,
                required:true

            }
        },
        methods:{
            removeTodo(todoId){
                this.$store.dispatch('deleteTodo', {id: todoId});
                }
        }
    }
</script>
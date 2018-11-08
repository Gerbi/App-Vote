<template>
    <input type="text" class="form-control" placeholder="Add Todo" v-model="title" @keyup.enter="saveTodo(title)"/>
</template>
<script>
export default {
    name: 'AddTodo',
    data(){
        return {
            title: ''
        }
    },
    methods:{
        saveTodo(title){
            this.$emit('add-todo',{title, id: Date.now().toString(), completed:false})

        }
    }
    
}
    
</script>
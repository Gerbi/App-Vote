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
            this.$store.dispatch('addTodo',{id:Date.now().toString(), completed:false, title})
        }
    }
    
}
    
</script>
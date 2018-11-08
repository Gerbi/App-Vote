<template>
    <ul class="nav flex-column">
            <li class="nav-item" v-for="todo in todos" :key="todo.id">
              <div class="checkbox">
                  <label>
                <input type="checkbox" class="checkbox-custom"/>{{todo.title}}</label>
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
    }
}
    
</script>

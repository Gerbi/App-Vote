<template>
<div class="col-md-4">
    
    <div class="card">
        <div class="card-body" @click="setActiveCol(col.id)"
            style="cursor:pointer">
            <h3 align="center">{{col.name}}</h3>
            <Task v-for="task in col.tasks" :task="task" :key="task.id" :colId="col.id" />
        </div>
    </div><br>
</div>
    
</template>


<script>
import Task from './Task.vue';
import {store} from '../store.js';
export default {
    name: 'BoardColumn',
    props:['col'],
    components:{
        Task
    },
    methods: {
        setActiveCol(colId){
            store.setActiveCol(colId)
        }
    }
}
    
</script>
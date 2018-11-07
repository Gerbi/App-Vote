<template>
<div>
  <div class="card" style="padding:10px; background-color: #F5F5F5">
      <h3 align="center">{{task.title}}</h3>
      <template v-if="task.edit">
        <input type="text" class="form-control" :placeholder="task.title" v-model="newTitle"/>
        <button class="btn btn-success" style="margin-top: 5px" @click="updateTask(colId, task.id, newTitle)">Save </button>
        
      </template>
      <template v-else>
        <p align="center">
          <button type="button" class="btn btn-primary btn-sm" @click="editTask(colId, task.id)">Edit</button>
          <span style="margin:2px"></span>
          <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(colId, task.id)">Delete</button>
        </p>
      </template>
      
  </div><br>
</div>
</template>

<script>
import {store} from '../store.js';
    export default {
        name: 'Task',
        props: ['task', 'colId'],
        data(){
          return {
            newTitle: ''
          }

        },
        methods: {
          editTask(colId, taskId){
            store.editTask(colId, taskId);
          },
          updateTask(colId, taskId, taskTitle){
            store.updateTask(colId, taskId, taskTitle)
          },
          deleteTask(colId, taskId){
            store.deleteTask(colId, taskId);
          }
        }
    }
</script>


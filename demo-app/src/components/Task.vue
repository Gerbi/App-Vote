<template>
<div>
<div class="card" style="padding:10px; background-color: #F5F5F5">
      <h3 align="center">{{task.title}}</h3>
      
</div><br><p align="center">
        <button type="button" class="btn btn-primary btn-sm">Edit</button>
        <button type="button" class="btn btn-danger btn-sm">Delete</button>
      </p><br>
</div>


</template>

<script>
    export default {
        name: 'Task',
        props: ['task']
    }
</script>


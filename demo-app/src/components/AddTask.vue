<template>
<div class="row justify-content-md-center">
<div class="col-md-5">
    <div class="card">
        <div class="card-body">
            <h3 align="center">New {{getColTitle}}</h3><br> 
            <p align="center">
                
                <input class="form-control form-control-sm" type="text" placeholder="Add Task">
            </p>
        
        </div>
            <button class="btn btn-primary">Save</button>
    </div>
</div>
</div>

    
</template>

<script>
import {store} from '../store.js';
export default {
    name: 'AddTask',
    computed: {
        getColTitle(){
           return store.getActiveColumn().name;
        }
    }
}
    
</script>

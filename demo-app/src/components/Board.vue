<template>
    <div class="container">
        <h3 align="center">Tasks Board</h3><hr>
        <div class="row justify-content-md-center">
            
                <!-- <BoardColumn name="Todo"/>
                <BoardColumn name="InProgress"/>
                <BoardColumn name="Done"/> -->
            
                <BoardColumn v-for="col in sharedState.Seed" :key="col.id" :col="col"/>
            
        </div>
        
    </div>
</template>

<script>

import BoardColumn from './BoardColumn.vue';
import {store} from '../store.js'
export default {
  name: 'Board',
  data(){
      return {
          sharedState: store.state
      }
  },
  components: {
      BoardColumn
  }
}
</script>

<style>
.btn {
    margin: 2px;
}
</style>



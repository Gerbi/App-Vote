<template>
    <div id="app" class="container">
        <Board/>
        <hr/>
        <AddTask/>
        
        <br>
    </div>
</template>

<script>
import Board from './components/Board.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'app',
  components:{
      Board,
      AddTask
  }
}
</script>


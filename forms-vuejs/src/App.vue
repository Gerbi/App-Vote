<template>
  <div class="container"><br>
    <FormValidations/>
  </div>
</template>

<script>
import BasicForm from './components/BasicForm.vue'
import FormValidations from './components/FormValidations.vue'
export default {
  name: 'app',
  components: {
    BasicForm,
      FormValidations
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

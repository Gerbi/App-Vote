<template>
  <div class="container"><br>
    <CustomValidations/>
  </div>
</template>

<script>
import BasicForm from './components/BasicForm'
import CustomValidations from "./components/CustomValidations";

export default {
  name: 'app',
  components: {
      CustomValidations,
    BasicForm
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

<template>
  <div>
    <Navbar/>
    <main role="main" class="container">
      <!-- Render Router del contenido-->
      <router-view></router-view>
      
    </main>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
      Navbar
  }
}
</script>
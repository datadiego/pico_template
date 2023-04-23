<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Post from './components/Post.vue'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container">
  <main>
  <Navbar />
  <!-- <Header /> -->
  <RouterView />
  </main> 
  </div>
  <Footer />
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>

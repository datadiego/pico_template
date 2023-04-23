<template>

    <div class="container">
    <hgroup>
        <h1>{{ post.title }}</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
    </hgroup>
        <figure>
        <img src="../assets/mountains.jpg">
        <figcaption>
            Image example
          </figcaption>
        </figure>
        <p>{{ post.body }}</p>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const post = ref({
    title: 'Title post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
})
</script>

<style scoped>

</style>
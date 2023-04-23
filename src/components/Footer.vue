<template>
    <footer>
        <h2>Footer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Footer',
    setup() {
        return {
        }
    }
})
</script>

<style scoped>

footer{
    margin: 0;
    padding: 0;
    background-color: #000;
}
h2{
    margin: 0;
    padding: 0;
    margin-left: 20px;
}
p{
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    margin-left: 20px;
    color: #fff;
}
</style>
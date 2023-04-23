<template>
    <div>
        <nav>
        <h1 class="invertido">*cleardata404</h1>
            <router-link to="/">MAIN//</router-link>
            <router-link to="/digital">DIGITAL//</router-link>
            <router-link to="/generative">GENERATIVE//</router-link>
            <router-link to="/machine">HARDWARE//</router-link>
            <router-link to="/ai">AI//</router-link>
            <router-link to="/about">ABOUT//</router-link>
        </nav>

    </div>
</template>

<script>

export default {
  name: "Navbar",
};
</script>

<style scoped>
h1{
    margin: 0;
    display: inline;
    color: #000;
    background-color: white;
    margin-right: 1rem;
    padding: 0;
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 0;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0;
    padding-bottom: 0;
}



nav{
    font-size: 1.4rem;
    display: inline;
    margin: 0;
}

a{
    display: inline;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin: 0;
    padding: 0;
    
}

a:hover{
    color: #e23472;
    
}






</style>
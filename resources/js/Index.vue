<template>
<div>
    <nav class="navbar bg-white border-bottom navbar-light">
        <router-link class="navbar-brand mr-auto" :to = "{name: '/'}">숙제</router-link>
        <router-link class="btn nav-button" :to = "{name: 'register'}">register</router-link>
        <router-link class="btn nav-button" :to="{name: 'login'}">login</router-link>
    </nav>
    <div class="contatiner mt-4 mb-4 pr-4 pl-4"><router-view></router-view>
    </div>
</div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>

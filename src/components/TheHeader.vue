<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/servicos">Servicos</router-link> |
            <router-link to="/products">Produtos</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style>
.header-title {
    background-color: #41b883;
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
}

.header-description {
    background-color: #00AAAA;
    font-size: 2rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
}
</style>
<template>
    <header>
        <h1 class="header-title">
            <slot name="titulo" />
        </h1>
        <h3 class="header-description">
            <slot name="descricao" />
        </h3>
        <p>
            <slot />
        </p>
    </header>
</template>

<script>
export default {

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
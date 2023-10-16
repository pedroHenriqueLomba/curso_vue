<template>
    <div>
        <h1>{{ product.name }}</h1>
        <p>{{ product.price }}</p>
        <button @click="addProduct()" type="button">Adicionar</button>
    </div>
</template>

<script>
export default {
    name: 'AppProduct',
    props: {
        product: Object
    },

    methods: {
        addProduct() {
            this.$store.commit('addProduct', this.product);
        }
    }
}
</script>

<style>

</style>
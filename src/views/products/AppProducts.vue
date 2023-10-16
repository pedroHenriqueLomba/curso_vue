<template>
    <AppProduct 
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"
    />
</template>

<script>
import AppProduct from './AppProduct.vue';

export default {
    name: 'AppProducts',

    components: { AppProduct },
}
</script>

<style>

</style>

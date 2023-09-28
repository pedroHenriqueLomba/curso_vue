<template>
    <header>
        
    </header>
</template>

<script>
export default {
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    onBeforeMount(){
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    onBeforeUnmount(){
        console.log('beforeUnmount');
    },
    unmounted(){
        console.log('unmounted');
    }
}
</script>

<style>

</style>
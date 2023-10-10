<template>
    <button @click="redirecionaParaHome()">
        Teste
    </button>
</template>

<script>
export default {
    name: 'ServicosView',
    methods: {
        redirecionaParaHome() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
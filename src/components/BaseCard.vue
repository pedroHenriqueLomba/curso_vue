<template>
    <div class="card">
        <div>
            <input type="text" v-model="nome">
        </div>
        <div>
            <p>{{ nome }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            nome: ''
        }
    },
    watch: {
        nome: function () {
            console.log(this)
        }
    }
}

</script>

<style scoped>
    .card {
        background-color: #aabbcc;
        border: 1px solid #aabbcc;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }
</style>
<template>
    <div 
    v-show="showAlert"
    :class="['modal', 'modal-' + type]">
        <div>
            Seu formulário foi enviado com sucesso
        </div>
        <button id="button" @click="esconde()">
            X
        </button>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'error'
        }
    },

    methods: {
        esconde() {
            this.showAlert = false;
        }
    },

    data: () => {
        return {
            showAlert: true
        }
    },
}
</script>

<style scoped>
.modal {
    padding: 10px;
    width: 50%;
    display: flex;
    justify-content: space-between;
}

.modal-success {
    background-color: green;
    color: #fff;
}

.modal-error {
    background-color: red;
    color: #fff;
}
</style>
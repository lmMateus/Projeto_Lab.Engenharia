<template>
    <div class="container-model-card" v-if="mostrarModal">
        <div class="card-datalhes">
            <span class="modal-fechar" @click="fecharModal">&times;</span>
            <div class="modal-corpo">
                <p>{{ msgModal }}</p>
                <a class="btn btn-success m-3 " @click="fecharModal">Confirmar</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['msgModal', 'mostrarModal'],
    emits: ['fechar'],
    methods: {
        fecharModal() {
            this.$emit('fechar');
            document.body.classList.remove('modal-open');
        },     
        refreshPage() {
            window.location.reload();
        }
    },
};
</script>

<style scoped>
.container-model-card {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}


.card-datalhes {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 0.5rem;
    width: 80%;
}

@media (min-width: 701px) {
    .card-datalhes {
        max-width: 700px;
    }
}

.modal-fechar {
    color: #aaa;
    float: right;
    font-size: 2.5rem;
    margin-top: -20px;
    font-weight: bold;
    cursor: pointer;
}
</style>

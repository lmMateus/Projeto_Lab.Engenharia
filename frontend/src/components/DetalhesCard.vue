<template>
    <div class="container-model-card" v-if="mostrarModal">
        <div class="card-datalhes">
            <span class="modal-fechar" @click="fecharModal">&times;</span>
            <div class="modal-corpo">
                <h5 class="titulo">{{ tituloSelecionado.tipo_titulo }}</h5>
                <div class="list_container">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="rotulo">Valor nominal: </span>{{
                            formatarDinheiro(tituloSelecionado.valor_nominal) }}</li>
                        <li class="list-group-item"><span class="rotulo">Valor de oferta: </span>{{
                            formatarDinheiro(tituloSelecionado.valor_oferta) }}</li>
                        <li class="list-group-item"><span class="rotulo">Data de cadastro: </span>{{
                            formatarData(tituloSelecionado.data_cadastro) }}</li>
                        <li class="list-group-item"><span class="rotulo">Data de emissão: </span>{{
                            formatarData(tituloSelecionado.data_emissao) }}</li>
                        <li class="list-group-item"><span class="rotulo">Data de vencimento: </span>{{
                            formatarData(tituloSelecionado.data_vencimento) }}</li>
                        <li class="list-group-item"><span class="rotulo">Assinatura do credor: </span>{{
                            formatarAssinatura(tituloSelecionado.assinatura_credor) }}</li>
                        <li class="list-group-item"><span class="rotulo">Tipo credor: </span>{{
                            credor.tipo_perfil }}</li>
                        <li class="list-group-item"><span class="rotulo">E-mail do credor: </span>{{
                            credor.email }}</li>
                        <!-- CONDIÇÃO PJ -->
                        <template class="credor_pj" v-if="credor.tipo_perfil == 'Pessoa Jurídica'">
                            <li class="list-group-item"><span class="rotulo">Razão social: </span>{{
                                credor_pj.razao_social }}</li>
                            <li class="list-group-item"><span class="rotulo">Capital social: </span>{{
                                formatarDinheiro(credor_pj.capital_social) }}</li>
                            <li class="list-group-item"><span class="rotulo">CNPJ: </span>{{
                                formatarCNPJ(credor_pj.cnpj) }}</li>
                            <li class="list-group-item"><span class="rotulo">Ramo de atividade: </span>{{
                                credor_pj.ramo_atividade }}</li>
                            <li class="list-group-item"><span class="rotulo">Porte da empresa: </span>{{
                                credor_pj.porte_empresa }}</li>
                            <li class="list-group-item"><span class="rotulo">Natureza Jurídica: </span>{{
                                credor_pj.natureza_juridica }}</li>
                            <li class="list-group-item"><span class="rotulo">Telefone: </span>{{
                                credor_pj.telefone }}</li>
                        </template>
                        <!-- CONDIÇÃO PF -->
                        <template class="credor_pf" v-if="credor.tipo_perfil == 'Pessoa Física'">
                            <li class="list-group-item"><span class="rotulo">Nome do credor: </span>{{
                                credor_pf.nome }}</li>
                            <li class="list-group-item"><span class="rotulo">CPF: </span>{{
                                formatarCPF(credor_pf.cpf) }}</li>
                            <li class="list-group-item"><span class="rotulo">Telefone: </span>{{
                                credor_pf.telefone }}</li>
                        </template>
                    </ul>
                </div>
                <a class="btn btn-success m-3 confirmarAntecipacao" @click="confirmarAntecipacao">Confirmar</a>
            </div>
        </div>
    </div>
</template>
  
<script>
import moment from 'moment';
import axios from 'axios';


export default {
    props: [
        'mostrarModal',
        'tituloSelecionado',
        'credor',
        'credor_pf',
        'credor_pj',
    ],
    emits: ['fechar'],
    methods: {
        fecharModal() {
            this.$emit('fechar');
            document.body.classList.remove('modal-open');
        },
        formatarDinheiro(valor) {
            return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },
        formatarCNPJ(cnpj) {
            let cnpjLimpo = cnpj.replace(/[^\d]/g, '');
            return cnpjLimpo.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
        },
        formatarCPF(cpf) {
            let cpfLimpo = cpf.replace(/[^\d]/g, '');
            // Truncar os primeiros dígitos, exibindo apenas os últimos
            let cpfTruncado = '***.' + cpfLimpo.substring(3, 6) + '.' + cpfLimpo.substring(6, 9) + '-**';
            return cpfTruncado;
        },
        formatarData(data) {
            // Adicione lógica para formatar a data conforme necessário
            return new Date(data).toLocaleDateString('pt-BR');
        },
        formatarAssinatura(assinatura) {
            return assinatura ? "Possui asinatura" : "Sem assinatura";
        },
        obterDataFormatada() {
            // Usa o moment.js para obter a data formatada
            return moment().format('YYYY-MM-DD');
        },
        obterAssinatura() {
            const assinatura = window.confirm("Deseja confirmar assinatura?")
            return assinatura;
        },
        async setStatusTitulo() {
            try {
                const response = await axios.post("http://localhost:5174/titulos/status", {
                    cod_titulo: this.tituloSelecionado.cod_titulo,
                    status_titulo: "Antecipado", // Definir o codigo aqui
                });
            } catch (err) {
                console.log(err);
            }
        },

        async confirmarAntecipacao() {
            try {
                const assinatura = this.obterAssinatura()
                const dados = JSON.parse(sessionStorage.getItem("perfil"))
                const response = await axios.post("http://localhost:5174/titulos", {
                    cod_titulo: this.tituloSelecionado.cod_titulo,
                    cod_perfil_investidor: dados.cod_perfil, // Definir o codigo aqui
                    data_antecipacao: this.obterDataFormatada(),
                    assinatura_investidor: assinatura,
                });
                await this.setStatusTitulo();
                alert("Antecipação realizada com sucesso!")
                this.fecharModal();
                this.refreshPage();

            } catch (err) {
                console.log(err);
            }
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

.rotulo {
    font-weight: bold;
}


.list-group-item {
    border: none;
    font-size: 1.1rem;
    text-indent: 1rem;
    padding: 0.4rem;
    background: #fAfAfA;
}


.confirmarAntecipacao {
    margin: 0 auto;
    display: block;
    padding: 0.8rem;
    font-size: 1rem;
}

.titulo {
    font-size: 3rem;
    margin: 0 0 1rem 0;
    text-indent: -0.2rem;
    padding: 0;
}

.list_container {
    margin: 0 0 1.2rem 0;
    border: 1px solid #0000002e;
    padding: 1rem 0.8rem;
    border-radius: 0.5rem;
    background: #fAfAfA;
}
</style>
  
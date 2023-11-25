<template>
    <div class="container mt-5">
        <div>
        </div>
        <div class="row">
            <div v-for="titulo in titulos" :key="titulo.codigo_titulo" class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{ titulo.tipo_titulo }}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <strong>Status:</strong>
                                <span :class="formataStatus(titulo.status_titulo)">{{ titulo.status_titulo }}</span>
                            </li>
                            <li class="list-group-item"><strong>Valor Nominal:</strong> {{
                                formatarDinheiro(titulo.valor_nominal) }}</li>
                            <li class="list-group-item"><strong>Valor Oferta:</strong> {{
                                formatarDinheiro(titulo.valor_oferta) }}</li>
                            <li class="list-group-item"><strong>Data de Vencimento:</strong> {{
                                formatarData(titulo.data_vencimento) }}</li>
                        </ul>
                        <a class="btn btn-primary m-3" @click="abrirModal(titulo)">Antecipar</a>

                    </div>
                </div>
            </div>
        </div>
        <DetalhesCard :mostrarModal="mostrarModal" @fechar="fecharModal" :tituloSelecionado="tituloSelecionado"
            :credor="credor" :credor_pf="credor_pf" :credor_pj="credor_pj" />
    </div>
</template>
  
<script>

import axios from "axios";
import DetalhesCard from "./DetalhesCard.vue";

export default {
    components: {
        DetalhesCard,
    },


    data() {
        return {
            titulos: [],
            mostrarModal: false,
            tituloSelecionado: null,
            credor: {
                cod_perfil: "",
                tipo_perfil: "",
                tipo_persona: "",
                email: "",
            },
            credor_pf: {
                nome: "",
                cod_perfil: "",
                cpf: "",
                telefone: "",
            },
            credor_pj: {
                cod_perfil: "",
                razao_social: "",
                capital_social: "",
                nome_fantasia: "",
                tipo_empresa: "",
                cnpj: "",
                ramo_atividade: "",
                razao_social: "",
                natureza_juridica: "",
                porte_empresa: "",
                telefone: "",
            },
        };
    },
    created() {
        this.getTitulos();
    },
    methods: {
        async getTitulos() {
            try {
                const response = await axios.get("http://localhost:5174/titulos");
                this.titulos = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async getCredor() {
            try {
                const response = await axios.get(`http://localhost:5174/perfil/id/${this.tituloSelecionado.cod_perfil_credor}`);
                this.credor.cod_perfil = response.data.cod_perfil;
                this.credor.tipo_perfil = response.data.tipo_perfil;
                this.credor.tipo_persona = response.data.tipo_persona;
                this.credor.email = response.data.email;
                console.log(this.credor)
            } catch (err) {
                console.log(err);
            }
        },

        async getCredorPF() {
            try {
                const response = await axios.get(`http://localhost:5174/pessoafisica/id/${this.credor.cod_perfil}`);
                this.credor_pf.cod_perfil = response.data.cod_perfil;
                this.credor_pf.nome = response.data.nome;
                this.credor_pf.cpf = response.data.cpf;
                this.credor_pf.telefone = response.data.telefone;
            } catch (err) {
                console.log(err);
            }
        },

        async getCredorPJ() {
            try {
                const response = await axios.get(`http://localhost:5174/pessoajuridica/id/${this.credor.cod_perfil}`);
                this.credor_pj.cod_perfil = response.data.cod_perfil;
                this.credor_pj.cnpj = response.data.cnpj;
                this.credor_pj.ramo_atividade = response.data.ramo_atividade;
                this.credor_pj.tipo_empresa = response.data.tipo_empresa;
                this.credor_pj.razao_social = response.data.razao_social;
                this.credor_pj.nome_fantasia = response.data.nome_fantasia;
                this.credor_pj.natureza_juridica = response.data.natureza_juridica;
                this.credor_pj.porte_empresa = response.data.porte_empresa;
                this.credor_pj.capital_social = response.data.capital_social;
                this.credor_pj.telefone = response.data.telefone;
            } catch (err) {
                console.log(err);
            }
        },

        formatarDinheiro(valor) {
            return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },
        formatarData(data) {
            // Adicione lógica para formatar a data conforme necessário
            return new Date(data).toLocaleDateString('pt-BR');
        },
        formataStatus(status) {
            return {
                'text-ofertado': status.toLowerCase() === 'ofertado',
                'text-antecipado': status.toLowerCase() === 'antecipado',
            }
        },

        async abrirModal(titulo) {
            this.tituloSelecionado = titulo;
            await this.getCredor()
            switch (this.credor.tipo_perfil.toLocaleLowerCase()) {
                case "pessoa física":
                    await this.getCredorPF();
                    break;
                case "pessoa jurídica":
                    await this.getCredorPJ();
                    break
            }
            this.mostrarModal = true;
            document.body.classList.add('modal-open');
        },

        fecharModal() {
            this.mostrarModal = false;
        },
    },
};
</script>
  
<style scoped>
.bg-my {
    background-color: rgb(145, 145, 145);
}

h5 {
    font-size: 2rem;
    text-indent: 10px;
    font-weight: bold;
    text-transform: capitalize
}

.text-ofertado {
    color: rgb(18, 177, 18);
    text-transform: capitalize;
    padding-left: 10px;
    font-weight: bold;
}

.text-antecipado {
    color: rgb(206, 13, 13);
    text-transform: capitalize;
    padding-left: 10px;
    font-weight: bold;
}

.modal-open {
    overflow: hidden;
}
</style>
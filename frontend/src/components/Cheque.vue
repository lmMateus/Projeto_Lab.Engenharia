<template>
    <div class="container mt-4" :is="verificacao">
        <form @submit.prevent="cadastrarTitulo">
            <!-- Número do Cheque  -->
            <div class="form-row row mb-3">
                <div class="form-group col-md-6">
                    <label for="numeroCheque"><b>Número do Cheque</b></label>
                    <input type="number" class="form-control" v-model="form.numero_cheque" id="numeroCheque"
                        placeholder="Digite o número do cheque" />
                </div>
            </div>

            <!-- Valor de Oferta e Data de Cadastro -->
            <div class="form-row row mb-3">
                <div class="form-group col-md-6">
                    <label for="valorNominal"><b>Valor Nominal</b></label>
                    <input type="text" class="form-control" v-model="form.valor_nominal" id="valorNominal"
                        placeholder="Digite o valor nominal" />
                </div>
                <div class="form-group col-md-6">
                    <label for="valorOferta"><b>Valor de Oferta</b></label>
                    <input type="text" class="form-control" v-model="form.valor_oferta" id="valorOferta"
                        placeholder="Digite o valor de oferta" />
                </div>
            </div>

            <!-- Data de Emissão e Data de Vencimento -->
            <div class="form-row row mb-3">
                <div class="form-group col-md-6">
                    <label for="dataEmissao"><b>Data de Emissão</b></label>
                    <input type="date" class="form-control" v-model="form.data_emissao" id="dataEmissao" />
                </div>
                <div class="form-group col-md-6">
                    <label for="dataVencimento"><b>Data de Vencimento</b></label>
                    <input type="date" class="form-control" v-model="form.data_vencimento" id="dataVencimento" />
                </div>
            </div>

            <!-- Dados do Cheque -->
            <div class="form-row row mb-3">
                <div class="form-group col-md-6">
                    <label for="nomeBanco"><b>Nome do Banco</b></label>
                    <input type="text" class="form-control" v-model="form.nome_banco" id="nomeBanco"
                        placeholder="Digite o nome do banco" />
                </div>
                <div class="form-group col-md-6">
                    <label for="numeroBanco"><b>Número do Banco</b></label>
                    <input type="number" class="form-control" v-model="form.numero_banco" id="numeroBanco"
                        placeholder="Digite o número do banco" />
                </div>

            </div>


            <!-- Dados do Cheque -->
            <div class="form-row row mb-3">

                <div class="form-group col-md-6">
                    <label for="nomeEmissor"><b>Nome do Emissor</b></label>
                    <input type="text" class="form-control" v-model="form.nome_emissor" id="nomeEmissor"
                        placeholder="Digite o nome do emissor" />
                </div>
                <div class="form-group col-md-6">
                    <label for="docEmissor"><b>Documento do Emissor</b></label>
                    <input type="text" class="form-control" v-model="form.doc_emissor" id="docEmissor"
                        placeholder="Digite o documento do emissor" />
                </div>
            </div>


            <!-- Dados do Cheque -->
            <div class="form-row row mb-3">
                <div class="form-group col-md-6">
                    <label for="nomeBeneficiario"><b>Nome do Beneficiario</b></label>
                    <input type="text" class="form-control" v-model="form.nome_beneficiario" id="nomeBeneficiario"
                        placeholder="Digite o nome do beneficiario" />
                </div>
                <div class="form-group col-md-6">
                    <label for="docBeneficiarior"><b>Documento do Beneficiario</b></label>
                    <input type="text" class="form-control" v-model="form.doc_beneficiario" id="docBeneficiario"
                        placeholder="Digite o documento do beneficiario" />
                </div>
            </div>

            <!-- Assinatura do Credor -->
            <div class="form-row row mb-3">
                <div class="form-group col-md-6">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="form.assinatura_credor"
                            id="assinaturaCredor" />
                        <label class="form-check-label" for="assinaturaCredor">
                            <b>Assinatura do Credor</b>
                        </label>
                    </div>
                </div>
            </div>



            <button type="submit" class="btn btn-primary col-md-2 mt-2">Ofertar</button>



        </form>
    </div>
</template>
  
  
<script>

import moment from 'moment';
import axios from 'axios';

export default {
    data() {
        return {
            titulos: [],
            form: {
                cod_titulo: "",
                cod_perfil_credor: "",
                tipo_titulo: "",
                status_titulo: "",
                valor_nominal: "",
                valor_oferta: "",
                data_cadastro: "",
                data_emissao: "",
                data_vencimento: "",
                assinatura_credor: "",
                nome_banco: "",
                numero_banco: "",
                nome_emissor: "",
                doc_emissor: "",
                nome_beneficiario: "",
                doc_beneficiario: "",
                numero_cheque: "",
            },
            dados: null,
        };
    },
    async created() {
       await this.getTitulos()
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

        getLastCodTitulo(){
            let cod = 0;
            this.titulos.forEach((titulo) => {
                if(titulo["cod_titulo"] > cod) cod = titulo["cod_titulo"];
            })
            return cod + 1
        },
        
        async cadastrarTituloCheque(){
            try {
                if (!this.validarCampos()) return;
                const response = await axios.post("http://localhost:5174/gerencia-titulos/add/cheque", {
                    cod_titulo: this.form.cod_titulo,
                    nome_banco: this.form.nome_banco,
                    numero_banco: this.form.numero_banco,
                    nome_emissor: this.form.nome_emissor,
                    doc_emissor: this.form.doc_emissor,
                    nome_beneficiario: this.form.nome_beneficiario,
                    doc_beneficiario: this.form.doc_beneficiario,
                    numero_cheque: this.form.numero_cheque,
                });
            } catch (err) {
                console.log(err);
            }
        },

        async cadastrarTitulo() {
            try {
                if (!this.validarCampos()) return;
                this.form.cod_titulo = this.getLastCodTitulo();
                this.form.cod_perfil_credor = this.dados.cod_perfil;
                this.form.tipo_titulo = "Cheque";
                this.form.status_titulo = "Ofertado";
                this.form.data_cadastro = this.obterDataFormatada();
                const response = await axios.post("http://localhost:5174/gerencia-titulos/add", {
                    cod_titulo: this.form.cod_titulo,
                    cod_perfil_credor: this.form.cod_perfil_credor,
                    tipo_titulo: this.form.tipo_titulo,
                    status_titulo: this.form.status_titulo,
                    valor_nominal: this.formatarDinheiro(this.form.valor_nominal),
                    valor_oferta: this.formatarDinheiro(this.form.valor_oferta),
                    data_cadastro: this.form.data_cadastro,
                    data_emissao: this.form.data_emissao,
                    data_vencimento: this.form.data_vencimento,
                    assinatura_credor: this.form.assinatura_credor,
                });
                await this.cadastrarTituloCheque();
                alert("Oferta realizada com sucesso!")
                this.refreshPage();
            } catch (err) {
                console.log(err);
            }
        },
        obterDataFormatada() {
            return moment().format('YYYY-MM-DD');
        },
        validarCampos() {
            // Verifica se todos os campos estão preenchidos
            if (
                this.form.numero_cheque &&
                this.form.valor_nominal &&
                this.form.valor_oferta &&
                this.form.data_emissao &&
                this.form.data_vencimento &&
                this.form.nome_banco &&
                this.form.numero_banco &&
                this.form.nome_emissor &&
                this.form.doc_emissor &&
                this.form.nome_beneficiario &&
                this.form.doc_beneficiario &&
                this.form.assinatura_credor
            ) {
                return true;
            } else {
                // Caso contrário, exibe uma mensagem de erro ou realiza outra ação desejada
                alert("Por favor, preencha todos os campos.");
                return false;
            }
        },
        refreshPage() {
            window.location.reload();
        },
        formatarDinheiro(valor) {
            const valorNumerico = parseFloat(valor.replace(/[^\d,.-]/g, "").replace(",", "."));
            return valorNumerico
        },
    },
    computed: {
        verificacao() {
            const datas = JSON.parse(sessionStorage.getItem("perfil"));
            if (datas == null) this.$router.push('/acesse');
            this.dados = datas;
        },
    },
};
</script>
  
<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="container-fluid p-2 align-items-center">
          <div class="d-flex justify-content-around">
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
              style="width: 2rem; height: 2rem; color: white; background-color: #393E46" data-bs-toggle="collapse"
              data-bs-target="#company1" aria-expanded="true" aria-controls="company1" @click="steps(1)">
              ✓
            </button>
            <span class="bg-my w-25 rounded mt-auto mb-auto me-1 ms-1" style="height: 0.2rem"></span>
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
              style="width: 2rem; height: 2rem; color: white; background-color: #393E46" data-bs-toggle="collapse"
              data-bs-target="#company2" aria-expanded="true" aria-controls="company2" @click="steps(2)">
              ✓
            </button>
            <span class="bg-my w-25 rounded mt-auto mb-auto me-1 ms-1" style="height: 0.2rem"></span>
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
              style="width: 2rem; height: 2rem; color: white; background-color: #393E46" data-bs-toggle="collapse"
              data-bs-target="#company3" aria-expanded="false" aria-controls="company3" @click="steps(3)">
              ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="p-3" style="background-color: #4e6786;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">

        <div :class="classeNormal">
          <div class="card" style="border-radius: 1rem;">
            <div class="row  g-0">
              <form class="ps-3 pe-2 pt-4 pb-5" action="">
                <div v-if="campoVazioAlerta" class="alert alert-danger mt-3" role="alert">
                  Preencha todos os campos!
                </div>
                <div v-if="emailExiste" class="alert alert-danger mt-3" role="alert">
                  Esse e-mail já foi cadastrado!
                </div>
                <div v-if="docExiste" class="alert alert-danger mt-3" role="alert">
                  Esse CNPJ já foi cadastrado!
                </div>
                <h3><b>Dados Cadastrais</b></h3>

                <div class="form-row row mb-3">
                  <div class="form-group col-md-4">
                    <label for=""><b>CNPJ</b></label>
                    <input type="text" class="form-control" id="cnpj" v-mask="'##.###.###/####-##'" @blur="consultarCNPJ"
                      v-model="pj.cnpj" @focus="limpaCamposG">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Fundação</b></label>
                    <input type="text" class="form-control" id="fundacao" v-mask="'##/##/####'" v-model="pj.fundacao">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Tipo</b></label>
                    <input type="text" class="form-control" id="tipo" v-model="pj.tipo">
                  </div>
                </div>
                <div class="form-row row mb-3">
                  <div class="form-group col-md-12">
                    <label for=""><b>Razão Social</b></label>
                    <input type="text" class="form-control" id="razao_social" v-model="pj.razao_social">
                  </div>
                </div>
                <div class="form-row row mb-3">
                  <div class="form-group col-md-6">
                    <label for=""><b>Nome Fantasia</b></label>
                    <input type="text" class="form-control" id="nome_fantasia" v-model="pj.nome_fantasia">
                  </div>
                  <div class="form-group col-md-6">
                    <label for=""><b>Capital Social</b></label>
                    <input type="text" class="form-control" id="capital_social" v-model="pj.capital_social">
                  </div>
                </div>
                <div class="form-row row mb-3">
                  <div class="form-group col-md-12">
                    <label for=""><b>Ramo de atividade</b></label>
                    <input type="text" class="form-control" id="atividade" v-model="pj.atividade">
                  </div>
                </div>
                <div class="form-row row">
                  <div class="form-group col-md-4">
                    <label for=""><b>Porte</b></label>
                    <input type="text" class="form-control" id="porte" v-model="pj.porte">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Natureza jurídica</b></label>
                    <input type="text" class="form-control" id="natureza_juridica" v-model="pj.natureza_juridica">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Telefone</b></label>
                    <input type="text" class="form-control" id="telefone" v-model="pj.telefone"
                      v-mask="['(##) ####-####', '(##) #####-####']">
                  </div>
                </div>
                <div class="form-row row">
                  <div class="form-group col-md-8">
                    <label for=""><b>E-mail</b></label>
                    <input type="email" class="form-control" id="email" v-model="login.email">
                  </div>
                </div>

                <div class="form-row row">
                  <div v-if="senhaInvalida" class="alert alert-danger mt-3" role="alert">
                    Senha inválida!
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Senha</b></label>
                    <input type="password" class="form-control" id="senha" v-model="login.senha">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Repitir Senha</b></label>
                    <input type="password" class="form-control" id="rSenha" v-model="login.repetirSenha">
                  </div>
                  <div class="form-check col-md-4">
                    <input type="checkbox" class="form-check-input" id="checkBox" v-model="checkbox">
                    <label for="" class="form-check-label"><b>Dados Desatualizados?</b></label>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
        <div :class="classeNormal">
          <div class="card" style="border-radius: 1rem;">
            <div class="row  g-0">
              <form class="ps-3 pe-2 pt-4 pb-5" action="">
                <h3><b> Endereço</b></h3>
                <div class="form-row row mb-3">
                  <div class="form-group col-md-6">
                    <label for=""><b>CEP</b></label>
                    <input type="text" class="form-control" id="cep" v-mask="'#####-###'" v-model="endereco.cep"
                      @blur="consultarCEP" @focus="limpaCampos">
                  </div>
                  <div class="form-group col-md-6">
                    <label for=""><b>Cidade</b></label>
                    <input type="text" class="form-control" id="cidade" v-model="endereco.cidade">
                  </div>
                </div>

                <div class="form-row row mb-3">
                  <div class="form-group col-md-6">
                    <label for=""><b>Rua</b></label>
                    <input type="text" class="form-control" id="rua" v-model="endereco.rua">
                  </div>
                  <div class="form-group col-md-6">
                    <label for=""><b>Estado</b></label>
                    <select class="form-control" id="estado" v-model="endereco.estado">
                      <option v-for="estado in estados" :key="estado.sigla" :value="estado.nome">{{ estado.nome }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-row row mb-3">
                  <div class="form-group col-md-2">
                    <label for=""><b>Número</b></label>
                    <input type="text" class="form-control" id="numero" v-model="endereco.numero">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Bairro</b></label>
                    <input type="text" class="form-control" id="bairro" v-model="endereco.bairro">
                  </div>
                </div>
                <div class="form-row row">
                  <div class="form-group  gap-2 col-4 mx-auto mt-4">
                    <button class="btn btn-secondary" @click="cadastrar" type="button">Cadastrar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
  <MsgSucesso :mostrarModal="mostrarModal" @fechar="fecharModal" :msgModal="msgModal" />
</template>

<script>
//@ts-ignore
import { mask } from 'vue-the-mask'
import axios from 'axios';
import MsgSucesso from "./MsgSucesso.vue";
export default {
  directives: { mask },
  props: {
    perfil: String,
    persona: String,
  },
  emits: ['escolhaPerfilPersona', 'setEtapa', 'fechar'],
  data() {
    return {
      step: null,
      classeNormal: '',
      campoVazioAlerta: false, //Ativa uma div quando os campos estiverem vazios
      senhaInvalida: false,    //ativa uma div quando as senha estiverem invalidas
      emailExiste: false,      //ativa uma div quando o email já existir no banco
      docExiste: false,        //ativa uma div quando o Cpj já existir no banco
      showModal: false, //ativa uma div quando o cadastro for bem sucedido
      getPerfil: null,            //armazena o email, se existir no banco
      getPJ: null,              //armazena o cpj, se existir no banco
      checkbox: false,
      dadosCnpj: '',
      cnpj: '',
      pj: {
        cnpj: '',
        fundacao: '',
        tipo: '',
        razao_social: '',
        nome_fantasia: '',
        capital_social: '',
        atividade: '',
        porte: '',
        natureza_juridica: '',
        telefone: '',
      },
      login: {
        email: '',
        senha: '',
        repetirSenha: '',
      },
      cep: '',
      endereco: {
        cep: '',
        cidade: '',
        rua: '',
        estado: '',
        bairro: '',
        numero: '',
      },
      estados: [
        { nome: 'Acre', sigla: 'AC' },
        { nome: 'Alagoas', sigla: 'AL' },
        { nome: 'Amapá', sigla: 'AP' },
        { nome: 'Amazonas', sigla: 'AM' },
        { nome: 'Bahia', sigla: 'BA' },
        { nome: 'Ceará', sigla: 'CE' },
        { nome: 'Distrito Federal', sigla: 'DF' },
        { nome: 'Espírito Santo', sigla: 'ES' },
        { nome: 'Goiás', sigla: 'GO' },
        { nome: 'Maranhão', sigla: 'MA' },
        { nome: 'Mato Grosso', sigla: 'MT' },
        { nome: 'Mato Grosso do Sul', sigla: 'MS' },
        { nome: 'Minas Gerais', sigla: 'MG' },
        { nome: 'Pará', sigla: 'PA' },
        { nome: 'Paraíba', sigla: 'PB' },
        { nome: 'Paraná', sigla: 'PR' },
        { nome: 'Pernambuco', sigla: 'PE' },
        { nome: 'Piauí', sigla: 'PI' },
        { nome: 'Rio de Janeiro', sigla: 'RJ' },
        { nome: 'Rio Grande do Norte', sigla: 'RN' },
        { nome: 'Rio Grande do Sul', sigla: 'RS' },
        { nome: 'Rondônia', sigla: 'RO' },
        { nome: 'Roraima', sigla: 'RR' },
        { nome: 'Santa Catarina', sigla: 'SC' },
        { nome: 'São Paulo', sigla: 'SP' },
        { nome: 'Sergipe', sigla: 'SE' },
        { nome: 'Tocantins', sigla: 'TO' },
      ],
    };
  },
  mounted() {
    window.addEventListener('resize', this.atualizarClasse);

    this.atualizarClasse();
  },
  
  components: {
    MsgSucesso,
  },
  methods: {
    async abrirModal(msg) {
      this.msgModal = msg
      this.mostrarModal = true;
      document.body.classList.add('modal-open');
    },

    fecharModal() {
      this.mostrarModal = false;
      this.$router.push('/acesse')
    },
    atualizarClasse() {
      // Obtenha a largura da tela
      const larguraDaTela = window.innerWidth;

      // Determine a classe com base na largura da tela
      this.classeNormal = larguraDaTela < 950 ? 'col col-12 pt-3' : 'col col-md-6 pt-3';
    },
    async cadastrar() {
      this.campoVazioAlerta = false;
      this.senhaInvalida = false;
      this.docExiste = false;
      this.emailExiste = false;
      this.showModal = false;
      if (this.campoVazio()) {
        this.campoVazioAlerta = true;
        return;
      }
      if (this.confereSenha()) {
        this.senhaInvalida = true;
        return;
      }
      this.getPJ = await this.getPJByCNPJ()
      this.cnpj = this.removerMascaraCNPJ(this.pj.cnpj)
      if (this.getPJ.cnpj == this.cnpj) {
        this.docExiste = true;
        this.limpaCamposG();
        return;
      }
      this.getPerfil = await this.getPerfilByEmail()
      if (this.getPerfil.email == this.login.email) {
        this.emailExiste = true;
        this.login.email = "";
        return;
      }
      try {
        const response = await axios.post('http://127.0.0.1:5174/createPerfil', {
          email: this.login.email,
          senha: this.login.senha,
          tipo_perfil: this.perfil,
          tipo_persona: this.persona
        });
      } catch (err) {
        console.log(err);
      }      
      this.getPerfil = await this.getPerfilByEmail()
      this.cnpj = this.removerMascaraCNPJ(this.pj.cnpj)
      const partes = this.pj.fundacao.split('/');
      const dataSQL = `${partes[2]}-${partes[1]}-${partes[0]}`
      try {
        const response = await axios.post('http://127.0.0.1:5174/createPJ', {
          cod_perfil: this.getPerfil.cod_perfil,
          cnpj: this.cnpj,
          ramo_atividade: this.pj.atividade,
          capital_social: this.pj.capital_social,
          tipo_empresa: this.pj.tipo,
          razao_social: this.pj.razao_social,
          nome_fantasia: this.pj.nome_fantasia,
          natureza_juridica: this.pj.natureza_juridica,
          porte_empresa: this.pj.porte,
          data_fundacao: dataSQL,
          dados_desatualizados: this.checkbox,
          telefone: this.pj.telefone,
          cep: this.endereco.cep,
          rua: this.endereco.rua,
          numero: this.endereco.numero,
          bairro: this.endereco.bairro,
          cidade: this.endereco.cidade,
          estado: this.endereco.estado,
        })
      } catch (err) {
        console.log(err);
      }
      await this.abrirModal('Você foi cadastrado com sucesso!')
    },
    async getPerfilByEmail() {
      try {
        const response = await axios.get(`http://127.0.0.1:5174/perfil/${this.login.email}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getPJByCNPJ() {
      this.cnpj = this.removerMascaraCNPJ(this.pj.cnpj)
      try {
        const response = await axios.get(`http://127.0.0.1:5174/pessoajuridica/${this.cnpj}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    confereSenha() {
      if (this.login.senha != this.login.repetirSenha) {
        return true;
      }
      return false;
    },
    campoVazio() {
      for (const propriedade in this.pj) {
        if (this.pj.hasOwnProperty(propriedade)) {
          if (!this.pj[propriedade]) {
            console.log(`${propriedade} está vazio`);
            return true;
          }
        }
      }
      for (const propriedade in this.login) {
        if (this.login.hasOwnProperty(propriedade)) {
          if (!this.login[propriedade]) {
            console.log(`${propriedade} está vazio`);
            return true;
          }
        }
      }
      for (const propriedade in this.endereco) {
        if (this.endereco.hasOwnProperty(propriedade)) {
          if (!this.endereco[propriedade]) {
            console.log(`${propriedade} está vazio`);
            return true;
          }
        }
      }
      return false;
    },
    consultarCNPJ() {
      const cnpj = this.removerMascaraCNPJ(this.pj.cnpj)
      const url = `https://publica.cnpj.ws/cnpj/${cnpj}`;

      fetch(url)
        .then(response => response.json())
        .then(dado => {
          this.dadosCnpj = dado;
          this.preencheDadosCNPJ();
        })
        .catch(error => {
          console.log('Ocorreu um erro: ', error);
        });
    },
    preencheDadosCNPJ() {
      if (this.dadosCnpj.status == 400) {
        console.log("CNPJ não cadastrado na base de dados!")
      } else if (this.dadosCnpj.status == 429) {
        console.log("Excedido o limite máximo de 3 consultas por minuto!")
      } else {
        console.log("teste");
        this.pj = {
          cnpj: this.pj.cnpj,
          fundacao: this.dadosCnpj.estabelecimento.data_inicio_atividade,
          tipo: this.dadosCnpj.estabelecimento.tipo,
          razao_social: this.dadosCnpj.razao_social,
          nome_fantasia: this.dadosCnpj.estabelecimento.nome_fantasia,
          capital_social: this.dadosCnpj.capital_social,
          atividade: this.dadosCnpj.estabelecimento.atividade_principal.descricao,
          porte: this.dadosCnpj.porte.descricao,
          natureza_juridica: this.dadosCnpj.natureza_juridica.descricao,
          email: this.dadosCnpj.estabelecimento.email,
        }
        const estadoEncontrado = this.estados.find(estado => estado.sigla == this.dadosCnpj.estabelecimento.estado.sigla)
        this.endereco = {
          cep: this.dadosCnpj.estabelecimento.cep,
          cidade: this.dadosCnpj.estabelecimento.cidade.nome,
          rua: this.dadosCnpj.estabelecimento.logradouro,
          estado: estadoEncontrado.nome,
          bairro: this.dadosCnpj.estabelecimento.bairro,
          numero: this.dadosCnpj.estabelecimento.numero
        }
      }
    },
    removerMascaraCNPJ(cnpj) {
      return cnpj.replace(/[^\d]/g, '');
    },
    consultarCEP() {
      if(this.endereco.cep == null) {
        return
      }
      const cep = this.removerMascaraCEP(this.endereco.cep);
      const url = `https://viacep.com.br/ws/${cep}/json/`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const estadoEncontrado = this.estados.find(estado => estado.sigla == data.uf)
          console.log(estadoEncontrado)
          this.endereco = {
            cep: data.cep,
            cidade: data.localidade,
            rua: data.logradouro,
            bairro: data.bairro,
            estado: estadoEncontrado.nome
          }
        })
        .catch(error => {
          console.log('Ocorreu um erro: ', error);
        });
    },
    limpaCampos() {
      this.endereco = {
        cidade: '',
        rua: '',
        bairro: '',
        estado: '',
        numero: '',
      }
    },
    limpaCamposG() {
      this.pj = {
        cnpj: '',
        fundacao: '',
        tipo: '',
        razao_social: '',
        nome_fantasia: '',
        capital_social: '',
        atividade: '',
        porte: '',
        natureza_juridica: '',
        telefone: '',
      }

      this.login = {
        email: '',
        senha: '',
        repetirSenha: '',
      }


      this.endereco = {
        cidade: '',
        rua: '',
        bairro: '',
        estado: '',
        numero: '',
      }
    },
    removerMascaraCEP(cepa) {
      return cepa.replace(/\D/g, '')
    },
    steps(etapa) {
      this.step = etapa;
      this.$emit("setEtapa", this.step);
    },
  },
  beforeUnmount() {
    // Remova o ouvinte de redimensionamento quando o componente for destruído
    window.removeEventListener('resize', this.atualizarClasse);
  }
};
</script>

<style scoped>
.bg-my {
  background-color: rgb(145, 145, 145);
}
</style>
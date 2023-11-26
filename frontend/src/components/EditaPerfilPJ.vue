<template>
  <section class="p-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100 ">


        <button class="btn botao-colorido mt-4" @click="infoExibe"><b>Minhas informações</b></button>
        <div v-if="abaInfo">
          <div :class="classeNormal">
            <div class="card" style="border-radius: 1rem;">
              <div class="row  g-0">
                <form class="ps-3 pe-2 pt-4 pb-5" action="">
                  <div v-if="infoVazioAlerta" class="alert alert-danger mt-3" role="alert">
                    Preencha todos os campos!
                  </div>
                  <div v-if="docExiste" class="alert alert-danger mt-3" role="alert">
                    Esse CNPJ já foi cadastrado!
                  </div>
                  <h3><b>Dados Cadastrais</b></h3>

                  <div class="form-row row mb-3">
                    <div class="form-group col-md-4">
                      <label for=""><b>CNPJ</b></label>
                      <input type="text" class="form-control" id="cnpj" v-mask="'##.###.###/####-##'"
                        @blur="consultarCNPJ" v-model="pj.cnpj">
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
                  </div>
                  <div class="form-row row d-flex justify-content-center align-items-center">
                    <div class="form-group  col-md-1 mx-auto mt-4">
                      <button class="btn btn-secondary" @click="salvarInfoConta" type="button">Salvar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div :class="classeNormal">
            <button class="btn botao-colorido-endereco mt-1 mb-2" @click="enderecoExibe"><b>Alterar endereço</b></button>
            <div v-if="abaEndereco">
              <div class="card" style="border-radius: 1rem;">
                <div class="row  g-0">
                  <form class="ps-3 pe-2 pt-4 pb-5" action="">
                    <div v-if="enderecoVazioAlerta" class="alert alert-danger mt-3" role="alert">
                      Preencha todos os campos!
                    </div>
                    <h5><b> Endereço</b></h5>
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
                      <div class="form-group col-md-4">
                        <label for=""><b>Bairro</b></label>
                        <input type="text" class="form-control" id="bairro" v-model="endereco.bairro">
                      </div>
                      <div class="form-group col-md-2">
                        <label for=""><b>Número</b></label>
                        <input type="text" class="form-control" id="numero" v-model="endereco.numero">
                      </div>
                    </div>
                    <div class="form-row row d-flex justify-content-center align-items-center">
                      <div class="form-group gap-2 col-md-1 mx-auto mt-4">
                        <button class="btn btn-secondary" @click="salvarEndereco" type="button">Salvar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="btn botao-colorido mt-3 mb-2 " @click="dadosContaExibe"><b>Dados da Conta</b></button>
        <div v-if="abaDadosConta">
          <div :class="classeNormal">
            <div class="card" style="border-radius: 1rem;">
              <div class="row  g-0">
                <form class="ps-3 pe-2 pt-4" action="">
                  <div v-if="dadosVazioAlerta" class="alert alert-danger" role="alert">
                    Preencha todos os campos!
                  </div>
                  <div v-if="emailExiste" class="alert alert-danger" role="alert">
                    Esse e-mail já foi cadastrado!
                  </div>
                  <div class="form-row row d-flex justify-content-center align-items-center mb-3">
                    <div class="form-group col-md-4">
                      <label for=""><b>E-mail</b></label>
                      <input type="email" class="form-control" id="email" v-model="login.email">
                    </div>
                    <div class="form-group col-md-4">
                      <label for=""><b>Telefone</b></label>
                      <input type="text" class="form-control" id="cpf" v-mask="['(##) ####-####', '(##) #####-####']"
                        v-model="pj.telefone">
                    </div>
                    <div class="form-row row d-flex justify-content-center align-items-center">
                      <div class="form-group  col-md-1 mx-auto mt-4">
                        <button class="btn btn-secondary" @click="salvarDadosConta" type="button">Salvar</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <button class="btn botao-colorido mt-3" @click="segurancaExibe"><b>Segurança</b></button>
        <div v-if="abaSeguranca">
          <div :class="classeNormal">
            <div class="card" style="border-radius: 1rem;">
              <div class="row g-0">
                <form class="ps-3 pe-2 pt-4 pb-5" action="">
                  <div v-if="senhaVazioAlerta" class="alert alert-danger" role="alert">
                    Preencha todos os campos!
                  </div>
                  <div v-if="senhaInvalida" class="alert alert-danger mt-3" role="alert">
                    As senha novas devem ser iguais!
                  </div>
                  <div v-if="senhaAntigaIncorreta" class="alert alert-danger mt-3" role="alert">
                    Senha antiga incorreta!
                  </div>
                  <div class="form-row row row d-flex justify-content-center align-items-center mb-3">
                    <div class="form-group col-md-6">
                      <label for=""><b>Senha Antiga</b></label>
                      <input type="password" class="form-control" id="senhaAntiga" v-model="login.senhaAntiga">
                    </div>
                  </div>
                  <div class="form-row row row d-flex justify-content-center align-items-center mb-3">
                    <div class="form-group col-md-6">
                      <label for=""><b>Nova Senha</b></label>
                      <input type="password" class="form-control" id="senha" v-model="login.senha">
                    </div>
                  </div>
                  <div class="form-row row d-flex justify-content-center align-items-center mb-3">
                    <div class="form-group col-md-6">
                      <label for=""><b>Repetir Senha</b></label>
                      <input type="password" class="form-control" id="rSenha" v-model="login.repetirSenha">
                    </div>
                  </div>
                  <div class="form-row row d-flex justify-content-center align-items-center">
                    <div class="form-group  col-md-1 mx-auto mt-4">
                      <button class="btn btn-secondary" @click="salvarSenha" type="button">Salvar</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <button class="btn botao-colorido mt-4 mb-2 " @click="excluirContaExibe"><b>Excluir conta</b></button>
        <div v-if="abaExcluirConta">
          <div :class="classeNormal">
            <div class="card" style="border-radius: 1rem;">
              <div class="row  g-0">
                <form class="ps-3 pe-2 pt-4" action="">
                  <div class="form-row row d-flex justify-content-center align-items-center mb-3">
                    <div class="form-group col-md-6">
                      <p><b>Deseja realmente excluir sua conta?</b></p>
                      <p>Saiba que todo dado relaciona movimentação de títulos feita pela sua conta será
                        armazenada para fins de segurança!
                      </p>
                    </div>
                    <div class="form-row row d-flex justify-content-center align-items-center">
                      <div class="form-group  col-md-3 mx-auto mt-4">
                        <button class="btn btn-secondary" @click="deletarConta" type="button">Excluir conta</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MsgSucesso :mostrarModal="mostrarModal" @fechar="fecharModal" :msgModal="msgModal" />
</template>

<script>
import axios from "axios";
import { mask } from 'vue-the-mask'
import MsgSucesso from "./MsgSucesso.vue";
export default {
  directives: { mask },
  data() {
    return {
      mostrarModal: false,
      msgModal: '',
      abaInfo: false,
      abaDadosConta: false,
      abaSeguranca: false,
      abaEndereco: false,
      abaExcluirConta: false,
      step: null,
      classeNormal: '',        //Ajusta a classe dos elementos 

      docExiste: false,
      infoVazioAlerta: false,
      enderecoVazioAlerta: false, //Ativa uma div quando os campos estiverem vazios
      dadosVazioAlerta: false,
      senhaVazioAlerta: false,
      senhaAntigaIncorreta: false,
      senhaInvalida: false,    //ativa uma div quando as senha estiverem invalidas
      emailExiste: false,      //ativa uma div quando o email já existir no banco

      getPJ: null,              //armazena o cpf, se existir no banco
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
        senhaAntiga: '',
      },
      cep: '', // API de CEP
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
  emits: ['fechar'],
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
      this.abaInfo = false
      this.abaDadosConta = false
      this.abaSeguranca = false
      this.abaEndereco = false
      this.abaExcluirConta = false
    },



    excluirContaExibe() {
      if (this.abaExcluirConta) {
        this.abaExcluirConta = false;
      } else {
        this.abaExcluirConta = true;
      }
    },
    async infoExibe() {
      this.infoVazioAlerta = false;
      if (this.abaInfo) {
        this.abaInfo = false;
      } else {
        this.getPJ = await this.getPJById();
        const dataFormatada = new Date(this.getPJ.data_fundacao).toLocaleDateString('pt-BR');
        let cnpjz = this.formataCNPJ(this.getPJ.cnpj)
        this.pj = {
          cnpj: cnpjz,
          fundacao: dataFormatada,
          tipo: this.getPJ.tipo_empresa,
          razao_social: this.getPJ.razao_social,
          nome_fantasia: this.getPJ.nome_fantasia,
          capital_social: this.getPJ.capital_social,
          atividade: this.getPJ.ramo_atividade,
          porte: this.getPJ.porte_empresa,
          natureza_juridica: this.getPJ.natureza_juridica,
        }
        this.abaInfo = true;
      }
    },
    async enderecoExibe() {
      this.enderecoVazioAlerta = false;
      if (this.abaEndereco) {
        this.abaEndereco = false;
      } else {
        this.getPJ = await this.getPJById();
        this.abaEndereco = true;
        this.endereco = {
          cep: this.getPJ.cep,
          cidade: this.getPJ.cidade,
          rua: this.getPJ.rua,
          estado: this.getPJ.estado,
          bairro: this.getPJ.bairro,
          numero: this.getPJ.numero,
        }
      }
    },
    async dadosContaExibe() {
      this.emailExiste = false;
      this.dadosVazioAlerta = false;
      if (this.abaDadosConta) {
        this.abaDadosConta = false;
      } else {
        const perfil = await this.getPerfilByID();
        this.getPJ = await this.getPJById();
        this.login.email = perfil.email
        this.pj.telefone = this.getPJ.telefone
        this.abaDadosConta = true;
      }
    },

    segurancaExibe() {
      this.senhaVazioAlerta = false;
      this.senhaInvalida = false;
      this.senhaAntigaIncorreta = false;
      this.login.senhaAntiga = ''
      this.login.senha = ''
      this.login.repetirSenha = ''
      if (this.abaSeguranca) {
        this.abaSeguranca = false;
      } else {
        this.abaSeguranca = true;
      }
    },

    async salvarInfoConta() {
      this.infoVazioAlerta = false;
      if (this.infoVazio()) {
        this.infoVazioAlerta = true;
        return
      }

      const cnpjs = this.removerMascaraCNPJ(this.pj.cnpj)
      const perfil = await this.getPerfilByID();
      const partes = this.pj.fundacao.split('/');
      const dataSQL = `${partes[2]}-${partes[1]}-${partes[0]}`
      try {
        const response = await axios.put(`http://127.0.0.1:5174/update-dados-pj/${perfil.cod_perfil}`, {
          cnpj: cnpjs,
          ramo_atividade: this.pj.atividade,
          capital_social: this.pj.capital_social,
          tipo_empresa: this.pj.tipo,
          razao_social: this.pj.razao_social,
          nome_fantasia: this.pj.nome_fantasia,
          natureza_juridica: this.pj.natureza_juridica,
          porte_empresa: this.pj.porte,
          data_fundacao: dataSQL
        })
      } catch (err) {
        console.log(err);
      }
      await this.abrirModal('Dados alterados com sucesso!')

    },
    async salvarEndereco() {
      this.enderecoVazioAlerta = false;
      if (this.enderecoVazio()) {
        this.enderecoVazioAlerta = true;
        return;
      }

      //try update endereco
      const perfil = await this.getPerfilByID();
      try {
        const response = await axios.put(`http://127.0.0.1:5174/update-endereco-pj/${perfil.cod_perfil}`, {
          cep: this.endereco.cep,
          cidade: this.endereco.cidade,
          rua: this.endereco.rua,
          estado: this.endereco.estado,
          bairro: this.endereco.bairro,
          numero: this.endereco.numero,
        })
      } catch (err) {
        console.log(err);
      }
      await this.abrirModal('Endereço alterado com sucesso!')
    },

    async salvarDadosConta() {
      this.emailExiste = false;
      this.dadosVazioAlerta = false;
      if (this.dadosVazio()) {
        this.dadosVazioAlerta = true;
        return;
      }

      const getPerfil = await this.getPerfilByEmail()
      const pjt = await this.getPJById()
      if (getPerfil.email == this.login.email && pjt.telefone == this.pj.telefone) {
        this.emailExiste = true;
        this.login.email = "";
        return;
      }

      //update
      let perfil = await this.getPerfilByID();
      try {
        const response = await axios.put(`http://127.0.0.1:5174/update-email-perfil/${perfil.cod_perfil}`, {
          email: this.login.email
        })
      } catch (err) {
        console.log(err);
      }
      perfil = await this.getPerfilByID();
      sessionStorage.clear();
      const objecto = JSON.stringify(perfil)
      sessionStorage.setItem('perfil', objecto)
      try {
        const response = await axios.put(`http://127.0.0.1:5174/update-tel-pj/${perfil.cod_perfil}`, {
          telefone: this.pj.telefone
        })
      } catch (err) {
        console.log(err);
      }
      await this.abrirModal('Dados alterados com sucesso!')
    },

    async salvarSenha() {
      this.senhaVazioAlerta = false;
      this.senhaInvalida = false;
      this.senhaAntigaIncorreta = false

      if (this.senhaVazio()) {
        this.senhaVazioAlerta = true;
        return;
      }

      const perfil = await this.getPerfilByID();
      if (this.login.senhaAntiga != perfil.senha) {
        this.senhaAntigaIncorreta = true;
        return;
      }
      if (this.confereSenha()) {
        this.senhaInvalida = true;
        return;
      }
      //try update senha
      try {
        const response = await axios.put(`http://127.0.0.1:5174/update-senha-perfil/${perfil.cod_perfil}`, {
          senha: this.login.senha,
        })
      } catch (err) {
        console.log(err);
      }
      this.abrirModal('Senha alterada com sucesso!')
    },

    async deletarConta() {
      try {
        const response = await axios.delete(`http://127.0.0.1:5174/delete-perfil/${dados.cod_perfil}`)
      } catch (err) {
        console.log(err);
      }
      sessionStorage.clear()
      await this.abrirModal('Conta excluida com sucesso!')
      this.$router.push('/')
    },


    async getPJById() {
      const dados = JSON.parse(sessionStorage.getItem("perfil"))
      try {
        const response = await axios.get(`http://127.0.0.1:5174/pessoajuridica/id/${dados.cod_perfil}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getPerfilByEmail() {
      const perfil = await this.getPerfilByID();
      try {
        const response = await axios.get(`http://127.0.0.1:5174/perfil/${perfil.email}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getPerfilByID() {
      const dados = JSON.parse(sessionStorage.getItem("perfil"))
      try {
        const response = await axios.get(`http://127.0.0.1:5174/perfil/id/${dados.cod_perfil}`);
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

    infoVazio() {
      for (const propriedade in this.pj) {
        if (this.pj.hasOwnProperty(propriedade)) {
          if (!this.pj[propriedade]) {
            console.log(`${propriedade} está vazio`);
            return true;
          }
        }
      }
      return false;
    },
    dadosVazio() {
      if (this.login.email == "" || this.pj.telefone == "") {
        return true
      }
      return false
    },

    enderecoVazio() {
      for (const propriedade in this.endereco) {
        if (this.endereco.hasOwnProperty(propriedade)) {
          if (!this.endereco[propriedade] || this.endereco.cep == undefined) {
            console.log(`${propriedade} está vazio`);
            return true;
          }
        }
      }
      return false;
    },

    senhaVazio() {
      if (this.login.senhaAntiga == "" ||
        this.login.senha == "" || this.login.repetirSenha == "") {
        return true
      }
      return false
    },

    consultarCNPJ() {
      const tam = String(this.pj.cnpj).length;
      if (tam < 14) {
        return
      }
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
    removerMascaraCNPJ(cnpj) {
      return cnpj.replace(/[^\d]/g, '');
    },
    consultarCEP() {
      if (this.endereco.cep == null) {
        return
      }
      const cep = this.removeMascaraCEP(this.endereco.cep);
      const url = `https://viacep.com.br/ws/${cep}/json/`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const estadoEncontrado = this.estados.find(estado => estado.sigla == data.uf)
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
        numero: ''
      }
    },
    removeMascaraCEP(cepa) {
      return cepa.replace(/\D/g, '')
    },
    formataCNPJ(cnpj) {
      const cnpjLimpo = cnpj.replace(/[^\d]/g, ''); // Remove todos os caracteres não numéricos
      return cnpjLimpo.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5');
    },
    atualizarClasse() {
      const larguraDaTela = window.innerWidth;
      // this.classeNormal = larguraDaTela < 950 ? ' col-12 pt-3' : 'col col-md-6 pt-3';
      this.classeNormal = larguraDaTela < 970 ? ' col-12 pt-3 justify-content-center align-items-center' : 'mx-auto col-md-8 pt-3 justify-content-center align-items-center';
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

.botao-colorido {
  background-color: #88bee0;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
}

.botao-colorido:hover {
  background-color: #268fd0;
  color: white;
  font-size: 21px;
}

.botao-colorido-endereco {
  background-color: #fff;
  color: #88bee0;
  ;
  padding: 10px 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.botao-colorido-endereco:hover {
  background-color: #96c1dc;
  color: white;
  font-size: 17px;
}

.modal-open {
  overflow: hidden;
}
</style>
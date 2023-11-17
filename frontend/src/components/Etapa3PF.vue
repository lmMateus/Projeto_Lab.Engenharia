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
  <div>
    <h2>Etapa 3: PF</h2>
    <p>Perfil Escolhido: {{ perfil }}</p>
    <p>Persona Escolhida: {{ persona }}</p>
    <button @click="concluirCadastro">Concluir Cadastro</button>
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
                <h3><b>Dados Cadastrais</b></h3>

                <div class="form-row row mb-3">
                  <div class="form-group col-md-8">
                    <label for=""><b>Nome completo</b></label>
                    <input type="text" class="form-control" id="nome" v-model="dc.nome">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Nascimento</b></label>
                    <input type="text" class="form-control" id="nascimento" v-mask="'##/##/####'" v-model="dc.nascimento">
                  </div>
                </div>

                <div class="form-row row mb-3">
                  <div class="form-group col-md-4">
                    <label for=""><b>CPF</b></label>
                    <input type="text" class="form-control" id="cpf" v-mask="'###.###.###-##'" v-model="dc.cpf">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>RG</b></label>
                    <input type="text" class="form-control" id="rg" v-mask="'##.###.###-X'" v-model="dc.rg">
                  </div>
                  <div class="form-group col-md-4">
                    <label for=""><b>Telefone</b></label>
                    <input type="text" class="form-control" id="telefone" v-mask="['(##) ####-####', '(##) #####-####']"
                      v-model="dc.telefone">
                  </div>
                </div>

                <div class="form-row row mb-3">
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
                    <label for=""><b>Repetir Senha</b></label>
                    <input type="password" class="form-control" id="rSenha" v-model="login.repetirSenha">
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
                  <div class="form-group col-md-4">
                    <label for=""><b>Bairro</b></label>
                    <input type="text" class="form-control" id="bairro" v-model="endereco.bairro">
                  </div>
                  <div class="form-group col-md-2">
                    <label for=""><b>Número</b></label>
                    <input type="text" class="form-control" id="numero" v-model="endereco.numero">
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
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  directives: { mask },
  props: {
    perfil: String,
    persona: String,
  },
  data() {
    return {
      personaSelecionada: null,
      step: null,
      classeNormal: '',
      campoVazioAlerta: false,
      senhaInvalida: false,
      dc: {
        nome: '',
        nascimento: '',
        cpf: '',
        rg: '',
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
  methods: {
    cadastrar() {
      if (this.campoVazio()) {
        this.campoVazioAlerta =true;
        return;
      }
      if(this.confereSenha()){
        this.senhaInvalida = true; 
        return;
      }
      
    },  
    confereSenha(){
      this.senhaInvalida = false;
      if (this.login.senha != this.login.repetirSenha){
        return true;
      }
      return false;    },
    
    campoVazio() {
      this.campoVazioAlerta = false; 
      for (const propriedade in this.dc) {
        if (this.dc.hasOwnProperty(propriedade)) {
          if (!this.dc[propriedade]) {
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
    atualizarClasse() {
      // Obtenha a largura da tela
      const larguraDaTela = window.innerWidth;

      // Determine a classe com base na largura da tela
      this.classeNormal = larguraDaTela < 950 ? 'col col-12 pt-3' : 'col col-md-6 pt-3';
    },
    consultarCEP() {
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
    }
  },
  beforeUnmount() {
    // Remova o ouvinte de redimensionamento quando o componente for destruído
    window.removeEventListener('resize', this.atualizarClasse);
  }
};
</script>

<style>
.bg-my {
  background-color: rgb(145, 145, 145);
}
</style>
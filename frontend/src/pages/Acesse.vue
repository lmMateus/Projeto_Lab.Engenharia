<script setup>
</script>
<!--  -->
<template>
  <nav class="navbar navbar-expand-lg bg_color">
    <div class="container-fluid">
      <router-link class="navbar-brand navLink" to="/">NapierCapital</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <router-link class="nav-link link_hover link_w" aria-current="page" to="/quemsomos">Quem somos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link_hover link_w" aria-current="page" to="/acesse">Acesse</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section class="vh-100 tamanho" style="background-color: #4e6786;">
    <div class="container tamanho h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-8">
          <div class="card tamanho" style="border-radius: 1rem;">
            <div class="row  g-0">
              <div class="col-md-6 col-lg-5 tamanho d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <!-- <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                      <span class="h1 fw-bold mb-0">Logo</span>
                    </div> -->
                    <div class="d-flex justify-content-center">
                      <div>
                        <p style="color: #393f81"> Ainda não é cadastrado?
                          <router-link class="active color_link" aria-current="page" to="/cadastro">Cadastre-se</router-link>
                        </p>
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <div v-if="dadosInvalidos" class="alert alert-danger mt-3" role="alert">
                        E-mail ou senha inválidos!
                      </div>
                      <div v-if="campoVazio" class="alert alert-danger mt-3" role="alert">
                        Preencha e-mail e senha!
                      </div>
                      <input type="email" id="email" class="form-control form-control-lg" placeholder="E-mail"
                        v-model="login.email" />
                    </div>
                    <div class="form-outline">
                      <input type="password" id="senha" class="form-control form-control-lg" placeholder="Senha"
                        v-model="login.senha" @keyup.enter="logar" />
                    </div>
                    <!-- <router-link class="nav-link active mb-2 color_link" to="/recuperacaosenha">Esqueceu a
                      senha?</router-link> -->
                    <div class="pt-1">
                      <button class="btn btn-dark btn-lg  w-100 mb-5 mt-3" type="button"
                        @click="logar">Login</button>
                    </div>
                      <router-link class="nav-link active color_link" to="/termosdeuso">Termos de
                        uso.</router-link>
                      <router-link class="nav-link active color_link" to="/politicadeprivacidade">Política
                        de
                        privacidade.</router-link>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="d-flex justify-content-center">
    <div>
      <p>©2023</p>
    </div>
  </div>
</template>



<script>
import axios from 'axios'; // ou o caminho relativo correto
export default {
  data() {
    return {
      dadosInvalidos: false, // ativa div quando campos estiverem errado
      campoVazio: false, // ativa div quando camp
      login: {
        email: '',
        senha: ''
      },
      dados: '',
    }
  },
  methods: {
    logar() {
      this.dadosInvalidos = false;
      this.campoVazio = false;

      if (this.cVazio()) {
        this.campoVazio = true;
        return;
      }

      this.dados = this.getPerfil()
      this.dados.then(result => {
        if (result == "") {
          this.dadosInvalidos = true;
          return;
        } else {
          if (result.senha === this.login.senha) {
            this.$router.push('/mp')
          } else {
            this.dadosInvalidos = true;
            return;
          }
        }
      })
    },
    cVazio() {
      if (this.login.email == "" || this.login.senha == "") {
        return true;
      }
      return false;
    },
    async getPerfil() {
      try {
        const response = await axios.get(`http://127.0.0.1:5174/perfil/${this.login.email}`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>
<!--  -->
<style scoped>
.tamanho {
  max-height: 800px;
}

.bg_color {
  background-color: #393E46;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.navLink {
  color: rgb(255, 255, 255)
}

.color_link {
  color: #393f81;
}

.link_w {
  color: white
}

.color_link:hover {
  color: #c27c43;
}

.link_hover:hover {
  color: yellow
}

img {
  height: 100%;
  width: auto;
  height: 100%;
}
</style>



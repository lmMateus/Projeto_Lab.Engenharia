<template scoped>
  <nav class="navbar navbar-expand-lg bg_color">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">NapierCapital</router-link>
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

  <div v-if="start" class="container-fluid text-center mt-5 p-5 div_rec rounded-4">
    <p style="font-size: 20px; color:white">Digite o e-mail cadastrado!</p>
    <form>
      <input type="email" class="form-control" id="email" v-model="email" @keyup.enter="enviaCod">
      <button class="btn btn-light mt-3" @click="enviaCod" type="button">Enviar</button>
    </form>
  </div>


  <div v-if="end" class="container-fluid text-center mt-5 p-5 div_rec rounded-4">
    <p style="font-size: 20px; color:white">Verifique a caixa de entrada do e-mail informado!</p>
    <p class="" style="font-size: 20px; color:white">Digite o codigo informado no e-mail!</p>
    <form class="form d-flex  align-items-center justify-content-center">
      <input type="email" class="form-control tam" id="codgido" v-model="email" @keyup.enter="authCodigo">
    </form>
    <button class="btn btn-light mt-3" @click="authCodigo" type="button">Enviar</button>
  </div>
</template>
<script>
import axios from 'axios'
// import nodemailer from "nodemailer"
export default {
  data() {
    return {
      start: true,
      end: false,
      email: null,
      myEmail: {
        service: 'gmail',
        auth: {
          user: "napiercapital.auth@gmail.com",
          pass: "@Napier123",
        }
      },
      emailRec: {
        from: 'napiercapitel.auth@gmail.com',
        to: null,
        subject: 'Código de recuperação de senha!',
        text: null,
      }
    }
  },
  methods: {
    async enviaCod() {
      let emei = "cptmateus@gmail.com"
      try {
        const response = await axios.get(`http://127.0.0.1:5174/envia-cod/${emei}/teste`)
      } catch (err) {
        console.log(err);
      }
    },
    authCodigo() {
      console.log("teste")
    },

  }
}
</script>
<style scoped>
.tam {
  width: 250px;
}

.div_rec {
  background-color: #4e6786;
  width: 550px;
  height: 240px;
}

.bg_color {
  background-color: #393E46;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  color: white !important;
}

.link_hover:hover {
  color: yellow !important;
}
</style>
<template>
  <div class="navegacao">
    <nav class="navbar navbar-expand-lg bg_color" :is="verificacao">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/marketplace">NapierCapital</router-link>
        <div class="dropdown me-3">
          <button class="btn btn-secondary menu_icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
            <li>
              <router-link class="dropdown-item dropdown" to="/perfil">
                <i class="bi bi-person"></i> Perfil
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/gerencia-titulos">
                <i class="bi bi-card-heading"></i> Títulos
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" @click="encerrarConta" to="">
                <i class="bi bi-door-closed"></i> Encerrar
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Cadastro de Títulos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="tipo in tiposTitulos" :key="tipo">
              <a class="nav-link" href="#" @click.prevent="mudarTipo(tipo)" :class="{ active: tipo === tipoTitulo }">
                {{ tipo }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <component :is="tipoTitulo" v-if="tipoTitulo" />
  </div>
</template>

<script>
import Cheque from "../components/Cheque.vue";
export default {
  components: {
    Cheque,
  },

  computed: {
    verificacao() {
      const datas = JSON.parse(sessionStorage.getItem("perfil"));
      if(datas == null){
        this.$router.push('/acesse')
      }
    },
  },

  data() {
    return {
      dados: null,
      tipoTitulo: "Cheque",
      tiposTitulos: ["Cheque", "Factoring", "Debenture"],
    };
  },

  methods: {
    mudarTipo(tipo) {
      this.tipoTitulo = tipo;
    },
    encerrarConta() {
      sessionStorage.clear();
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.navegacao .menu_icon{
  background-color: white;
  color: #000;
}
.navegacao .bg_color {
  background-color: #393E46;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.navegacao a {
  color: white !important
}

.navegacao .link_hover:hover {
  color: yellow !important;
}

.navegacao .custom-carousel {
  height: 500px !important;
  padding: 0;
  margin: 0;
}
</style>

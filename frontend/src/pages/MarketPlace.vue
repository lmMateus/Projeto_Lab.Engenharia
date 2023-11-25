<template>
  <nav class="navbar navbar-expand-lg bg_color" :is="verificacao">
    <div class="container-fluid">
      <router-link class="navbar-brand " to="/marketplace">NapierCapital</router-link>
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
  <main>
    <component :is="componenteCard" />
    <!-- <component :is="componenteAddTitulo" /> -->
  </main>
</template>
<script>
import Card from "../components/Card.vue"
// import AddTitulo from "../components/AddTitulo.vue";

export default {
  data() {
    return {
      dados: null
    }
  },
  created() {
  },

  computed: {
    verificacao(){
      const datas = JSON.parse(sessionStorage.getItem("perfil"))
      if(datas == null){
        this.$router.push('/acesse')
      }
    },
    componenteCard() {
      return Card
    },
    // componenteAddTitulo() {
    //   return AddTitulo
    // }
  },
  methods : {
    encerrarConta(){
      sessionStorage.clear()
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
.menu_icon{
  background-color: white;
  
}
.bg_color {
  background-color: #393E46;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  color: white !important
}

.link_hover:hover {
  color: yellow !important;
}

.custom-carousel {
  height: 500px !important;
  padding: 0;
  margin: 0;
}

</style>
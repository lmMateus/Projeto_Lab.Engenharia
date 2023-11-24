<template>
  <nav class="navbar navbar-expand-lg bg_color">
    <div class="container-fluid">
      <router-link class="navbar-brand " to="/marketplace">NapierCapital</router-link>
      <div class="dropdown me-3">
        <button class="btn btn-secondary menu_icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
          <li>
            <router-link class="dropdown-item" to="/perfil">
              <i class="bi bi-person"></i> Perfil
            </router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/titulos">
              <i class="bi bi-card-heading"></i> Títulos
            </router-link>
          </li>
          <li>
            <router-link class="dropdown-item" to="/">
              <i class="bi bi-door-closed"></i> Encerrar
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <component :is="componenteAtual"/>
  </div>
</template>

<script>
import PerfilPF from "../components/EditaPerfilPF.vue";
import PerfilPJ from "../components/EditaPerfilPJ.vue";
export default {
  data(){
    return{
      perfil:"",
      componetente:"",
    }
  },
  computed: {
    componenteAtual() {
      const datas = JSON.parse(sessionStorage.getItem("cod_perfil"))
      if(datas.tipo_persona == 'pf'){
        return PerfilPF
      }else {
        return PerfilPJ
      }
    },
  },
}
</script>

<style scoped>
.absolute-div {
  background-color: aqua;
  height: 400px;
  width: 220px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.menu_icon {
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
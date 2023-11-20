<template>
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
            <router-link class="nav-link active link_hover" aria-current="page" to="/quemsomos">Quem somos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active link_hover" aria-current="page" to="/acesse">Acesse</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <component :is="componenteAtual" @escolhaPerfilPersona="avançarEtapa" @setEtapa="definirEtapa"
      :perfil="perfilEscolhido" :persona="personaEscolhida" />
  </div>
</template>

<script>
import Etapa1 from "../components/Etapa1.vue";
import Etapa2 from "../components/Etapa2.vue";
// import Etapa3 from "../components/Etapa3.vue";
import Etapa3PF from "../components/Etapa3PF.vue";
import Etapa3PJ from "../components/Etapa3PJ.vue";

export default {
  data() {
    return {
      etapa: 1,
      perfilEscolhido: '',
      personaEscolhida: '',
    };
  },
  computed: {
    componenteAtual() {
      if (this.etapa == 1) {
        return Etapa1;
      } else if (this.etapa == 2) {
        return Etapa2;
      } else if (this.personaEscolhida == "pf" && this.etapa == 3) {
        return Etapa3PF;
      } else if (this.personaEscolhida == "pj" && this.etapa == 3) {
        return Etapa3PJ;
      }
    },
  },
  methods: {
    avançarEtapa(perfil, persona) {
      if (this.etapa < 3) {
        if (perfil) this.perfilEscolhido = perfil;
        if (persona) this.personaEscolhida = persona;
        this.etapa++;
      }
    },
    voltarEtapa() {
      if (this.etapa != 1) {
        this.etapa--;
      }
    },
    definirEtapa(step) {
      this.etapa = step;
    }
  },
};
</script>
<style scoped>
p {
  color: black;
}

h5 {
  color: black
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

img {
  height: 100%;
  width: auto;
  height: 100%;
}
</style>
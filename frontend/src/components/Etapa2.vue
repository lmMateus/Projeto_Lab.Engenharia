<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="container-fluid p-2 align-items-center">
          <div class="d-flex justify-content-around">
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
            style="width: 2rem; height: 2rem; color: white; background-color: #393E46" data-bs-toggle="collapse" data-bs-target="#company1" aria-expanded="true"
              aria-controls="company1" @click="steps(1)">
              ✓
            </button>
            <span class="bg-my w-25 rounded mt-auto mb-auto me-1 ms-1" style="height: 0.2rem"></span>
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
            style="width: 2rem; height: 2rem; color: white; background-color: #393E46" data-bs-toggle="collapse" data-bs-target="#company2" aria-expanded="true"
              aria-controls="company2" @click="steps(2)">
              ✓
            </button>
            <span class="bg-my w-25 rounded mt-auto mb-auto me-1 ms-1" style="height: 0.2rem"></span>
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
              style="width: 2rem; height: 2rem; opacity: 1 !important;" data-bs-toggle="collapse"
              data-bs-target="#company3" aria-expanded="false" aria-controls="company3" disabled>
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h4 class="text-center mt-3">Escolha sua <em>Persona</em></h4>
  <div class="container mt-5">
    <div class="row gapin">
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <div @click="prosseguirEtapa('pf')" class="cardi">
          <div class="card rounded-4">
            <img src="../assets/PF.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center">Fisica</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div @click="prosseguirEtapa('pj')" class="cardi">
          <div class="card rounded-4">
            <img src="../assets/PJ.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center">Jurídica</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    perfil: String,
    persona: String,    
  },
  emits: ['escolhaPerfilPersona', 'setEtapa'],
  data() {
    return {
      personaSelecionada: null,
      step: null,
    };
  },
  methods: {
    prosseguirEtapa(name) {
      this.personaSelecionada = name;
      if (this.personaSelecionada) {
        this.$emit("escolhaPerfilPersona", null, this.personaSelecionada);
      }
    },    
    steps(etapa) {
      this.step = etapa;
      this.$emit("setEtapa", this.step);
    },
  },
};
</script>
<style scoped>
@media screen and (max-width:768px) {

  .gapin {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
}
.bg-my {
  background-color: rgb(145, 145, 145);
}

p {
  color: black;
}

.bg_color {
  background-color: #393E46;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  color: white !important
}

img {
  height: 100%;
  width: auto;
  height: 100%;
}

.cardi:hover {
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid;
}
</style>

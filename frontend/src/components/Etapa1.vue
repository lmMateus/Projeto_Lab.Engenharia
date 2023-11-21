<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="container-fluid p-2 align-items-center">
          <div class="d-flex justify-content-around">
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
              style="width: 2rem; height: 2rem; color: white; background-color: #393E46 ;" data-bs-toggle="collapse"
              data-bs-target="#company1" aria-expanded="true" aria-controls="company1" @click="steps(1)">
              ✓
            </button>
            <span class="bg-my w-25 rounded mt-auto mb-auto me-1 ms-1" style="height: 0.2rem"></span>
            <button class="btn bg-ligth border-black border border-2  btn-sm rounded-circle"
              style="width: 2rem; height: 2rem; opacity: 1 !important;" data-bs-toggle="collapse"
              data-bs-target="#company2" aria-expanded="false" aria-controls="company3" disabled>
              2
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
  <h4 class="text-center mt-3">Escolha seu perfil</h4>
  <div class="container mt-5">
    <div class="row gapzin">
      <div class="col-md-4">
        <div @click="prosseguirEtapa('investidor')" class="cardi">
          <div class="card rounded-4">
            <img src="../assets/investidor.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center"><b>Investidor</b></h5>
              <p class="card-text pt-1 ps-4 pe-4 text-center">
                <b>Invista em recebíveis</b>. Ganhe retorno financeiro
                ao investir em títulos de crédito.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div @click="prosseguirEtapa('credor')" class="cardi">
          <div class="card rounded-4">
            <img src="../assets/credor.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center"><b>Credor</b></h5>
              <p class="card-text pt-1 ps-4 pe-4 text-center">
                <b>Antecipe seus recebíveis</b>. Obtenha liquidez imediata
                ao antecipar pagamentos futuros.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div @click="prosseguirEtapa('ambos')" class="cardi">
          <div class="card rounded-4">
            <img src="../assets/combinado.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center"><b>Ambos</b></h5>
              <p class="card-text pt-1 ps-4 pe-4 text-center">
                <b>Antecipe ou invista.</b> Equilibre liquidez e investimento
                em um só lugar.</p>
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
      perfilSelecionado: null,
      step: null,
    };
  },
  methods: {
    prosseguirEtapa(name) {
      this.perfilSelecionado = name;
      if (this.perfilSelecionado) {
        this.$emit("escolhaPerfilPersona", this.perfilSelecionado);
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

  .gapzin {
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
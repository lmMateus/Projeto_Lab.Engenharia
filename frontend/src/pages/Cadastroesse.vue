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
  <h4 class="text-center mt-3">Escolha seu perfil</h4>
  <div class="container mt-5">

    <div class="row teste1">
      <div class="col-md-4">
        <div @click="showAlert(1)" class="teste">          
          <div class="card rounded-4">
            <img src="../assets/investidor.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center">Investidor</h5>
              <p class="card-text">Descrição do Card 1.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div @click="showAlert(2)" class="teste">  
          <div class="card rounded-4">
            <img src="../assets/credor.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center">Credor</h5>
              <p class="card-text">Descrição do Card 2.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div @click="showAlert(3)" class="teste">  
          <div class="card rounded-4">
            <img src="../assets/combinado.png" class="mx-auto d-block img-fluid img w-75 h-auto" alt="Imagem 2">
            <div class="card-body">
              <h5 class="card-title text-center">Ambos</h5>
              <p class="card-text">Descrição do Card 3.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="d-flex justify-content-center mt-5">
    <div>
      <p>©2023</p>
    </div>
  </div>
</template>
<!--  -->
<style scoped>

@media screen and (max-width:768px) {
  
  .teste1{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
}

p{
  color: black;
}
h5{
  color:black
}
.bg_color {
  background-color: #393E46;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  color: white !important
}

.link_hover:hover {
  font-size: 1.01em;
  color: yellow !important;
}

img {
  height: 100%;
  width: auto;
  height: 100%;
}
.teste:hover{
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid;
}
</style>
<!-- <div>
    <button @click="showAlert">Mostrar Alerta</button>
    <div v-if="show" class="alert">
      {{ message }}
      <button @click="closeAlert">Fechar</button>
    </div>
-->

<script>
export default {
  data() {
    return {
      show: false,
      message: 'teste',
    };
  },
  methods: {
    showAlert(teste) {
      alert(teste)
      // this.message = 'Isso é um alerta personalizado!';
      // this.show = true;
    },
    closeAlert() {
      this.show = false;
    },
  },
};
</script> 

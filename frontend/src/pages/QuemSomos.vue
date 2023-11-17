<script setup>
</script>
<!--  -->
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
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <h5 class="card-title">Integrantes</h5>
          <p class="card-text">
            Um grupo de estudantes junto com um advogado altamente renomado no Brasil, Canadá, Miami, Nova Iorque e pricipalmente em Israel, investiu alto nos meninos, Security Boy, Cadu, O Brabo, e o glorioso StandUp

          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <img src="../assets/banner2.jpg" class="img-fluid rounded-start">
      </div>
    </div>
  </div>
  <div class="card mb-3">    
    <div class="row g-0">
      <div class="col-12 col-sm-2">
        <img src="../assets/banner2.jpg" class="img-fluid rounded-start">
      </div>
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <h5 class="card-title">Integrantes</h5>
          <p class="card-text">
            Um grupo de estudantes junto com um advogado altamente renomado no Brasil, Canadá, Miami, Nova Iorque e pricipalmente em Israel, investiu alto nos meninos, Security Boy, Cadu, O Brabo, e o glorioso StandUp
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <div>
      <p>©2023</p>
    </div>
  </div>
</template>
<!--  -->
<style scoped>

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



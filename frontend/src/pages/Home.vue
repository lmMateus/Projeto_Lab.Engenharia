<script setup>
</script>
<!--  -->
<template>
  <nav class="navbar navbar-expand-lg bg_color">
    <div class="container-fluid">
      <router-link class="navbar-brand " to="/">NapierCapital</router-link>
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
  <div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
    <div class="carousel-inner custom-carousel">
      <div class="carousel-item active" data-bs-interval="5000">
        <img src="../assets/banner1.jpg" class="img-fluid d-block w-100" alt="...">
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img src="../assets/banner2.jpg" class="img-fluid d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev d-none d-md-block" type="button" data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next d-none d-md-block" type="button" data-bs-target="#carouselExampleInterval"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div><br>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <h5 class="card-title">Antecipação</h5>
          <p class="card-text">
            Já pensou em bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA 
            bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA 
            bLA bLA bLA bLA bLA bLA bLA bLA 
            bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA 
            bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA bLA 

          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <img src="../assets/banner2.jpg" class="img-fluid rounded-start">
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
.thin-border {
  border-top: 1px solid #000;
  /* Cor da linha, pode ser personalizada */
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

@media screen and (max-width: 768px) {
  .custom-carousel {
    height: auto !important;
    padding: 0;
    margin: 0;
  }
}

img {
  height: 100%;
  width: auto;
  height: 100%;
}
</style>



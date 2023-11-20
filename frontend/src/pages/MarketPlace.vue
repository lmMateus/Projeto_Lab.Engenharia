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
</template>
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
.object-fit-cover {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>
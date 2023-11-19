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
    <h5 class="card-title ps-5 mt-3" style="color: rgb(244, 126, 7);">Quem somos</h5>
    <div class="container d-flex justify-content-center align-items-center ">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <p class="card-text">
            Bem-vindo ao NapierCapital, um projeto visionário criado por um grupo apaixonado de cinco mentes inovadoras.
            Estamos dedicados a transformar a maneira como as empresas gerenciam suas finanças,
            proporcionando uma experiência única no mundo da antecipação de títulos de crédito.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-3">
    <h5 class="card-title ps-5 mt-3" style="color: rgb(244, 126, 7);">Nossa História</h5>
    <div class="container d-flex justify-content-center align-items-center ">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <p class="card-text">
            Nosso grupo nasceu da convergência de ideias e ambições empreendedoras,
            encontramos a sinergia perfeita para criar algo extraordinário. Movidos pela paixão da inovação,
            decidimos unir forças e canalizar nossos conhecimentos em um projeto que pudesse causar um impacto
            positivo no mundo dos negócios.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-3">
    <h5 class="card-title ps-5 mt-3" style="color: rgb(244, 126, 7);">Missão</h5>
    <div class="container d-flex justify-content-center align-items-center ">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <p class="card-text">
            Nossa missão é simplificar e agilizar o processo de antecipação de títulos de crédito,
            proporcionando às empresas a liberdade financeira que elas merecem. Acreditamos que
            a antecipação inteligente pode catalisar o sucesso e o crescimento sustentável,
            permitindo que nossos usuários alcancem seus objetivos empresariais de maneira mais eficiente.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="card mb-3">
    <h5 class="card-title ps-5 mt-3" style="color: rgb(244, 126, 7);">Visão</h5>
    <div class="container d-flex justify-content-center align-items-center ">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <p class="card-text">
            Imaginamos um cenário onde as empresas têm o poder de antecipar seus recebíveis de forma simples e
            transparente. Queremos ser a plataforma que facilita essa jornada, conectando investidores e empresas de
            maneira segura e eficaz. Visualizamos um futuro onde o acesso ao capital é democrático e onde o crescimento
            econômico é impulsionado pela inovação financeira.
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
}</style>



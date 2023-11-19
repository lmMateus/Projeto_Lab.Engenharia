<script setup>
</script>
<!--  -->
<template>
  <nav class="navbar navbar-expand-lg bg_color">
    <div class="container-fluid">
      <router-link class="navbar-brand navLink" to="/">NapierCapital</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav gap-3">
          <li class="nav-item">
            <router-link class="nav-link link_hover link_w" aria-current="page" to="/quemsomos">Quem somos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link_hover link_w" aria-current="page" to="/acesse">Acesse</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section class="vh-100 tamanho" style="background-color: #4e6786;">
    <div class="container tamanho h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-8">
          <div class="card tamanho" style="border-radius: 1rem;">
            <div class="row  g-0">
              <div class="col-md-6 col-lg-5 tamanho d-none d-md-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <!-- <div class="d-flex align-items-center mb-3 pb-1">
                      <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                      <span class="h1 fw-bold mb-0">Logo</span>
                    </div> -->
                    <div class="d-flex justify-content-center">
                      <div>
                        <p style="color: #393f81"> Ainda não é cadastrado?
                          <router-link class="active formA" aria-current="page" to="/cadastro">Cadastre-se</router-link>
                        </p>
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <input type="email" id="" class="form-control form-control-lg" placeholder="E-mail" />
                    </div>
                    <div class="form-outline">
                      <input type="password" id="" class="form-control form-control-lg" placeholder="Senha" />
                    </div>
                    <router-link class="nav-link active mb-2 formA" aria-current="page" to="/">Esqueceu a
                      senha?</router-link>
                    <div class="pt-1 mb-4">
                      <button class="btn btn-dark btn-lg float-start w-100 mb-5" type="button">Login</button>
                    </div>
                    <router-link class="nav-link active formA" aria-current="page" to="/termosdeuso">Termos de uso.</router-link>
                    <router-link class="nav-link active formA" aria-current="page" to="/politicadeprivacidade">Política de
                      privacidade.</router-link>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="d-flex justify-content-center">
    <div>
      <p>©2023</p>
    </div>
  </div>
</template>
<!--  -->
<style scoped>
.tamanho {
  max-height: 800px;
}

.bg_color {
  background-color: #393E46;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.navLink {
  color: white
}

.formA {
  color: #393f81;
}

.link_w {
  color: white
}

.formA:hover {
  color: #c27c43;
}

.link_hover:hover {
  color: yellow
}

img {
  height: 100%;
  width: auto;
  height: 100%;
}</style>



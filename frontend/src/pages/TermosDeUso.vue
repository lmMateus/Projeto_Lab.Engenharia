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
    <h5 class="card-title ps-5 mt-3">Termos de uso da plataforma</h5>
    <div class="container d-flex justify-content-center align-items-center ">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <p class="card-text">
            <b>1. Aceitação do Contrato:</b> Você concorda com os termos e condições descritos neste contrato de termos de uso
            com relação a nossa plataforma. Este Contrato constitui o acordo completo e único entre nós e você e substitui
            todos os acordos, representações, garantias e entendimentos anteriores ou contemporâneos com relação a
            plataforma, ao conteúdo, produtos ou serviços fornecidos por ou através da plataforma e ao assunto. objeto
            deste acordo.
          </p>
          <p class="card-text">
            <b>2. Escopo de uso:</b> Nossa plataforma permite que os usuários participem da antecipação de contas a receber
            diversas, como debêntures, notas promissórias, faturas, cheques e diversos instrumentos de crédito (judiciais
            e administrativos) por meio de uma interface de portal segura e eficiente.
          </p>
          <p class="card-text">
            <b>3. Conduta do Usuário:</b> Espera-se que os usuários se envolvam em atividades legais e apropriadas enquanto usam
            nossa plataforma. O uso não autorizado, tentativas de obter acesso não autorizado ou qualquer ação que
            interrompa a funcionalidade e a segurança do software são estritamente proibidos.
          </p>
          <p class="card-text">
            <b>4. Segurança de Dados:</b> Estamos comprometidos em proteger sua privacidade e a segurança de suas informações.
            Todos os dados fornecidos através da plataforma, incluindo informações financeiras sensíveis, estão sujeitos à
            nossa abrangente política de privacidade e a medidas de segurança rigorosas.
          </p>
          <p class="card-text">
            <b>5. Propriedade Intelectual:</b> Todo o conteúdo e materiais da plataforma são protegidos por direitos autorais e
            demais leis outras Leis vigentes em territorio nacional e Direito Internacional. Caso o(s) usuário(s) não
            cumpram todos os deveres de propriedade intelectual e direitos autorais ao usar a plataforma poderá ser punido
            com o rigor da Lei e indenizar seus proprietários.</p>
          <p class="card-text">
            <b>6. Responsabilidade:</b> A plataforma é fornecida "como está" e "conforme disponível". Não garantimos que a
            plataforma será ininterrupto ou livre de erros. O uso do software fica por sua conta e risco.
          </p>
          <p class="card-text">
            <b>7. Rescisão:</b> Reservamo-nos o direito de encerrar ou suspender o acesso à plataforma imediatamente, sem aviso
            prévio ou responsabilidade, se você violar qualquer um dos termos descritos neste contrato.
          </p>
          <p class="card-text">
            <b>8. Alterações nos Termos:</b> Reservamo-nos o direito de modificar estes termos de uso a qualquer momento. Tais
            modificações entrarão em vigor imediatamente após a publicação. O uso continuado da plataforma após a
            publicação de qualquer modificação constituirá sua aceitação dos termos atualizados.
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



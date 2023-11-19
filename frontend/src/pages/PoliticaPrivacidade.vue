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
    <h5 class="card-title ps-5 mt-3">Política de privacidade</h5>
    <div class="container d-flex justify-content-center align-items-center ">
      <div class="col-12 col-sm-8">
        <div class="card-body">
          <p>
            Proteger a privacidade e a segurança das informações de nossos usuários é de extrema importância. Esta
            política de privacidade descreve como são tratados os dados pessoais coletados através da nossa plataforma.
          </p>
          <p class="card-text">
            <b>1. Informações coletadas:</b> Podemos coletar informações de identificação pessoal, como nome, detalhes de
            contato
            e informações financeiras, para fornecer nossos serviços. Dados de utilização, cookies e outras tecnologias de
            rastreamento também podem ser usados para melhorar a funcionalidade d a plataforma e fornecer uma experiência
            perfeita.
          </p>
          <p class="card-text">
            <b>2. Uso de dados:</b> Os dados coletados são utilizados exclusivamente com a finalidade de cumprir a
            transação
            prevista e fornecer suporte ao cliente. Não compartilhamos nenhuma informação pessoal com terceiros, exceto
            quando necessário para concluir a transação ou cumprir requisitos legais.
          </p>
          <p class="card-text">
            <b>3. Segurança de dados:</b> São implementadas medidas de segurança técnicas e organizacionais adequadas para
            proteger as informações pessoais fornecidas através da plataforma contra acesso, uso ou divulgação não
            autorizados.
          </p>
          <p class="card-text">
            <b>4. Retenção de Dados:</b> As informações pessoais são retidas apenas enquanto for necessário para cumprir a
            finalidade original ou para cumprir requisitos legais ou contratuais. Após o período de retenção expirar, os
            dados serão excluídos permanentemente.
          </p>
          <p class="card-text">
            <b>5. Informações de contato:</b> Se você tiver alguma dúvida relacionada à privacidade, entre em contato conosco
            usando as informações fornecidas em nossa página "Contato".
          </p>
          <p class="card-text">
            <b>6. Conformidade com a LGPD e GDPR:</b> Seguimos rigorosamente a LGPD e se você reside no Espaço Econômico Europeu
            (EEE), você terá certos direitos de proteção de dados. Se desejar ser informado sobre quaisquer informação que
            mantemos sobre você e se elas desejarem ser removidas de nossos sistemas, entre em contato conosco.
          </p>
          <p class="card-text">
            <b>7. Links de terceiros:</b> Nossa plataforma pode conter links para sites ou serviços de terceiros que não são de
            nossa propriedade ou controlados por nós. Não assumimos qualquer responsabilidade pelas informações, políticas
            de privacidade ou práticas de qualidade de sites ou serviços de terceiros.
          </p>
          <p class="card-text">
            <b>8. Alterações na Política de Privacidade:</b> Reservamo-nos o direito de fazer alterações nesta política de
            privacidade a qualquer momento. Quaisquer atualizações serão comunicadas através da plataforma e é
            recomendável que você revise uma política periodicamente para verificar quaisquer alterações.
          </p>
          <p class="card-text">
            <b>9. Acordo entre as partes:</b> Ao utilizar nossa plataforma, você expressa sua concordância com
            esta política de privacidade. Se você não concorda com os termos desta política, não use nossa plataforma.8.
            Alterações na Política de Privacidade: Reservamo-nos o direito de fazer alterações nesta política de
            privacidade a qualquer momento. Quaisquer atualizações serão comunicadas através da plataforma e é
            recomendável que você revise uma política periodicamente para verificar quaisquer alterações.
          </p><br>
          <p>
            Se você tiver alguma dúvida ou precisar de mais esclarecimentos sobre estes termos de uso ou nossa política
            de privacidade, entre em contato imediatamente conosco usando as informações de contato fornecidas na
            plataforma.

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



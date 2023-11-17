<template>
  <div>
    <h2>Etapa 3: Resumo</h2>
    <p>Perfil Escolhido: {{ perfil }}</p>
    <p>Persona Escolhida: {{ persona }}</p>
    <button @click="concluirCadastro">Concluir Cadastro</button>
  </div>
</template>

<script>
export default {
  props: {
    perfil: String,
    persona: String,
  },
  methods: {
    concluirCadastro() {
      // Aqui você pode realizar a lógica para concluir o cadastro, por exemplo, enviar os dados para o servidor.
      // Em seguida, você pode redirecionar o usuário para a página de confirmação ou fazer o que for apropriado para o seu aplicativo.
      console.log("Cadastro concluído:", this.perfil, this.persona);
      // Redirecionar para a página de confirmação, se necessário
    },
  },
};
</script>
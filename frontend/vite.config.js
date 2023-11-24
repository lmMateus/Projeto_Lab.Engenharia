import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {

      //perfil
      '/createPerfil': 'http://localhost:5174', // Configure o proxy para o seu servidor Express
      '/perfil/:email': 'http://localhost:5174',

      //pessoa fisica
      '/pessoafisicacpf/:cpf': 'http://localhost:5174',
      '/pessoafisicarg/:rg': 'http://localhost:5174',
      '/createPF': 'http://localhost:5174',

      //pesso juridica
      '/pessoajuridica/:cnpj': 'http://localhost:5174',
      '/createPJ': 'http://localhost:5174',
    },
  },
});

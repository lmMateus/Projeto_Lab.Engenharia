import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/createPerfil': 'http://localhost:5174', // Configure o proxy para o seu servidor Express
      '/perfil/:email': 'http://localhost:5174',
      '/pessoafisica/:cpf': 'http://localhost:5174',
      '/createPF': 'http://localhost:5174',
      '/pessoajuridica/:cnpj': 'http://localhost:5174',
      '/createPJ': 'http://localhost:5174',
    },
  },
});

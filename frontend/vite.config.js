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
      '/perfil/id/:id': 'http://localhost:5174',
      '/update-email-perfil/:id': 'http://localhost:5174',
      '/update-senha-perfil/:id': 'http://localhost:5174',
      '/delete-perfil/:id': 'http://localhost:5174',
      
      //pessoa fisica
      '/pessoafisicacpf/:cpf': 'http://localhost:5174',
      '/pessoafisicarg/:rg': 'http://localhost:5174',
      '/pessoafisica/id/:id': 'http://localhost:5174',
      '/createPF': 'http://localhost:5174',
      '/update-endereco-pf/:id': 'http://localhost:5174',
      '/update-tel-pf/:id': 'http://localhost:5174',
      '/delete-pf/:id': 'http://localhost:5174',

      //pesso juridica
      '/pessoajuridica/:cnpj': 'http://localhost:5174',
      '/pessoajuridica/id/:id': 'http://localhost:5174',
      '/createPJ': 'http://localhost:5174',
      '/update-dados-pj/:id': 'http://localhost:5174',
      '/update-endereco-pj/:id': 'http://localhost:5174',
      '/update-tel-pj/:id': 'http://localhost:5174',

      //titulos
      '/titulos': 'http://localhost:5174',
      '/titulos': 'http://localhost:5174',
      '/gerencia-titulos/add': 'http://localhost:5174',
      '/gerencia-titulos/add/cheque': 'http://localhost:5174',
    },
  },
});

import express from "express";

//import controllers 
import {
  createPerfil,
  showPerfilByEmail,
  showPerfilById,
  updateEmailPerfil,
  updateSenhaById,
  deletePerfil,
} from "../controllers/perfil.js";

import{
  showPFByCPF,
  showPFByRG,
  showPFById,
  createPF,
  updateEnderecoPF,
  updateTelPF,
  deletePF,
} from "../controllers/pessoaFisica.js";

import{
  showPJByCNPJ,
  showPJById,
  createPJ,
  updateDadosPJ,
  updateEnderecoPJ,
  updateTelPJ,
} from "../controllers/pessoaJuridica.js";

import{
  AllTitulo,
  AntecipaTitulo,
  StatusTituloAntecipado,
  setTitulos,
  setChequeTitulo
} from "../controllers/titulo.js";
//iniciando rota express
const router = express.Router();
//Perfil
router.post('/createPerfil', createPerfil);
router.get('/perfil/:email', showPerfilByEmail);
router.get('/perfil/id/:id', showPerfilById);
router.put('/update-email-perfil/:id', updateEmailPerfil);
router.put('/update-senha-perfil/:id', updateSenhaById);
router.delete('/delete-perfil/:id', deletePerfil);

//Pessoa Fisica
router.get('/pessoafisicacpf/:cpf', showPFByCPF);
router.get('/pessoafisicarg/:rg', showPFByRG);
router.get('/pessoafisica/id/:id', showPFById);
router.post('/createPF', createPF);
router.put('/update-endereco-pf/:id', updateEnderecoPF);
router.put('/update-tel-pf/:id', updateTelPF);
router.delete('/delete-pf/:id', deletePF);

//Pessoa Juridica
router.get('/pessoajuridica/:cnpj', showPJByCNPJ);
router.get('/pessoajuridica/id/:id', showPJById);
router.post('/createPJ', createPJ);
router.put('/update-dados-pj/:id', updateDadosPJ);
router.put('/update-endereco-pj/:id', updateEnderecoPJ);
router.put('/update-tel-pj/:id', updateTelPJ);

//titulos
router.get('/titulos', AllTitulo);
router.post('/titulos', AntecipaTitulo);
router.post('/titulos/status', StatusTituloAntecipado);
router.post('/gerencia-titulos/add', setTitulos);
router.post('/gerencia-titulos/add/cheque', setChequeTitulo);

export default router;
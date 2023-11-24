import express from "express";

//import controllers 
import {
  showPerfilByEmail,
  createPerfil,
} from "../controllers/perfil.js";

import{
  showPFByCPF,
  showPFByRG,
  createPF,
} from "../controllers/pessoaFisica.js";

import{
  showPJByCNPJ,
  createPJ,
} from "../controllers/pessoaJuridica.js";
//iniciando rota express
const router = express.Router();
//Perfil
router.post('/createPerfil', createPerfil);
router.get('/perfil/:email', showPerfilByEmail);

//Pessoa Fisica
router.get('/pessoafisicacpf/:cpf', showPFByCPF);
router.get('/pessoafisicarg/:rg', showPFByRG);
router.post('/createPF', createPF);

//Pessoa Juridica
router.get('/pessoajuridica/:cnpj', showPJByCNPJ);
router.post('/createPJ', createPJ);


export default router;
import express from "express";

//import controllers 
import {
  showPerfilByEmail,
  createPerfil,
} from "../controllers/perfil.js";

import{
  showPFByCPF,
  createPF,
} from "../controllers/pessoaFisica.js";

import{
  showPJByCNPJ,
  createPJ,
} from "../controllers/pessoaJuridica.js";
//iniciando rota express
const router = express.Router();
router.post('/createPerfil', createPerfil);
router.get('/perfil/:email', showPerfilByEmail);
router.get('/pessoafisica/:cpf', showPFByCPF);
router.post('/createPF', createPF);
router.get('/pessoajuridica/:cnpj', showPJByCNPJ);
router.post('/createPJ', createPJ);


export default router;
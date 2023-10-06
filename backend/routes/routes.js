import express from "express";

//import controllers 
import {
  showPerfilByEmail,
  showPerfilById,
  createPerfil,
  updatePerfil,
  deletePerfil,
} from "../controllers/perfil.js";

//iniciando rota express
const router = express.Router();
router.post('/cadastro', createPerfil);
router.get('/login/:email', showPerfilByEmail);
router.get('/perfil/:id', showPerfilById);
router.put('/perfil/:id', updatePerfil);
router.delete('/perfil/:id', deletePerfil);

export default router;
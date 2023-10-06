//importar mo model do perfil
import {
  getPerfilByEmail,
  getPerfilById,
  insertPerfil,
  updatePerfilById,
  deletePerfilById,
} from "../models/perfilModel.js";

export const showPerfilByEmail = (req, res) => {
  getPerfilByEmail(req.params.email,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};

export const showPerfilById = (req, res) => {
  getPerfilById(req.params.id,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};

export const createPerfil = (req, res) => {
  const data = req.body;
  insertPerfil(data,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
}

export const updatePerfil = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updatePerfilById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


export const deletePerfil = (req, res) => {
  deletePerfilById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
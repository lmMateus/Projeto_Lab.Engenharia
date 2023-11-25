import {
  getAllTitulo,
  setAntecipaTitulo,
  setStatusTituloAntecipado,
} from "../models/tituloModel.js"; 

export const AllTitulo = (req, res) => {
  getAllTitulo((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const AntecipaTitulo = (req, res) => {
  const data = req.body;
  setAntecipaTitulo(data,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};


export const StatusTituloAntecipado = (req, res) => {
  const data = req.body;
  setStatusTituloAntecipado(data,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};

export const showPJById = (req, res) => {
  getPFByCodPerfil(req.params.cod_titulo,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};

export const createPF = (req, res) => {
  const data = req.body;
  insertPF(data,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
}

export const updatePF = (req, res) => {
  const data = req.body;
  const cod_titulo = req.params.cod_titulo;
  updatePFById(data, cod_titulo, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


export const deletePF = (req, res) => {
  deletePFById(req.params.cod_titulo, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
import {
  getAllTitulo,
  setAntecipaTitulo,
  setStatusTituloAntecipado,
  insertTitulo,
  setCheque,
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

export const setTitulos = (req, res) => {
  const data = req.body;
  insertTitulo(data,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};

export const setChequeTitulo = (req, res) => {
  const data = req.body;
  setCheque(data,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};
import {
  getPFByCodPerfil,
  insertPF,
  updatePFById,
  deletePFById,
} from "../models/tituloModel"; 

export const showPJById = (req, res) => {
  getPFByCodPerfil(req.params.id,(err,results)=>{
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
  const id = req.params.id;
  updatePFById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};


export const deletePF = (req, res) => {
  deletePFById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
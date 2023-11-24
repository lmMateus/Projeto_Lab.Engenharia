import {
  // getPFByCodPerfil,
  insertPF,
  // updatePFById,
  // deletePFById,
  getPessoaFisicaCPF,
  getPessoaFisicaRG,
} from "../models/pessoaFisicaModel.js"; 

// export const showPFById = (req, res) => {
//   getPFByCodPerfil(req.params.id,(err,results)=>{
//     if(err){
//       res.send(err);
//     }else{
//       res.json(results);
//     }
//   });
// };

export const showPFByCPF = (req, res) => {
  getPessoaFisicaCPF(req.params.cpf,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};

export const showPFByRG = (req, res) => {
  getPessoaFisicaRG(req.params.rg,(err,results)=>{
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

// export const updatePF = (req, res) => {
//   const data = req.body;
//   const id = req.params.id;
//   updatePFById(data, id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };


// export const deletePF = (req, res) => {
//   deletePFById(req.params.id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };
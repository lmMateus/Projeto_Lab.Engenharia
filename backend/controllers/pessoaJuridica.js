import {
  getPJByCodPerfil,
  insertPJ,
  // updatePJById,
  // deletePJById,
  getPessoaJuridicaCNPJ,
} from "../models/pessoaJuridicaModel.js"; 

export const showPJById = (req, res) => {
  getPJByCodPerfil(req.params.id,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};
export const showPJByCNPJ = (req, res) => {
  getPessoaJuridicaCNPJ(req.params.cnpj,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
};

export const createPJ = (req, res) => {
  const data = req.body;
  insertPJ(data,(err,results)=>{
    if(err){
      res.send(err);
    }else{
      res.json(results);
    }
  });
}

// export const updatePJ = (req, res) => {
//   const data = req.body;
//   const id = req.params.id;
//   updatePJById(data, id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };


// export const deletePJ = (req, res) => {
//   deletePJById(req.params.id, (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json(results);
//     }
//   });
// };
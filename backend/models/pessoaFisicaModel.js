// importando a conexao
import db from "../config/database.js";

//gets
// export const getPFByCodPerfil = (cod_perfil, result) => {
//   db.query(
//     "SELECT * FROM PESSOA_FISICA WHERE cod_perfil = ?",
//     cod_perfil,
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       } else {
//         result(null, results[0])
//       }
//     }
//   );
// };
export const getPessoaFisicaCPF = (cpf, result) => {
  db.query(    
    "SELECT * FROM PESSOA_FISICA WHERE cpf = ?",
    cpf,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0])
      }
    }
  );
};

export const getPessoaFisicaRG = (rg, result) => {
  db.query(    
    "SELECT * FROM PESSOA_FISICA WHERE rg = ?",
    rg,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0])
      }
    }
  );
};
//inserts

export const insertPF = (data, result) => {
  db.query("INSERT INTO PESSOA_FISICA SET ?",
    data,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    });
};

// //updates - email - senha - tipo perfil
// export const updatePFById = (data, id, result) => {
//   db.query(
//     "UPDATE PESSOA_FISICA SET nome = ?, telefone = ?, cep = ?, rua = ?, numero = ?, bairro = ?, cidade = ?, "+
//       "uf = ?, complemento = ? WHERE cpf = ?",
//     [data.nome, data.telefone, data.cep, data.rua, data.numero, data.bairro,
//        data.cidade, data.uf, data.complemento, id],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         result(err, null);
//       }else {
//         result(null, results);

//       }
//   });
// };

// // Delete Product to Database
// export const deletePFById = (id, result) => {
//   db.query("DELETE FROM PESSOA_FISICA WHERE cpf = ?", [id], (err, results) => {
//     if (err) {
//       console.log(err);
//       result(err, null);
//     } else {
//       result(null, results);
//     }
//   });
// };
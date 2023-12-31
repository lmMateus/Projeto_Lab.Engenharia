// importando a conexao
import db from "../config/database.js";
//gets
export const getPFByCodPerfil = (id, result) => {
  db.query(
    "SELECT * FROM PESSOA_FISICA WHERE cod_perfil = ?",
    id,
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


export const updateEnderecoPFById = (data, id, result) => {
  db.query(
    "UPDATE PESSOA_FISICA SET cep = ?, rua = ?, numero = ?, bairro = ?, cidade = ?, "+
      "estado = ? WHERE cod_perfil = ?",
    [data.cep, data.rua, data.numero, data.bairro,
       data.cidade, data.estado, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      }else {
        result(null, results);

      }
  });
};
export const updateTelPFById = (data, id, result) => {
  db.query(
    "UPDATE PESSOA_FISICA SET telefone = ? WHERE cod_perfil = ?",
    [data.telefone, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      }else {
        result(null, results);

      }
  });
};

// // Delete Product to Database
export const deletePFById = (id, result) => {
  db.query("DELETE FROM PESSOA_FISICA WHERE cod_perfil = ?", id, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
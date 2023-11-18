// importando a conexao
import db from "../config/database.js";

//gets
// export const getPJByCodPerfil= (cod_perfil, result) => {
//   db.query(
//     "SELECT * FROM PESSOA_JURIDICA WHERE cod_perfil = ?",
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
export const getPessoaJuridicaCNPJ= (cnpj, result) => {
  db.query(
    "SELECT * FROM PESSOA_JURIDICA WHERE cnpj = ?",
    cnpj,
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

export const insertPJ = (data, result) => {
  db.query("INSERT INTO PESSOA_JURIDICA SET ?",
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

//updates 
// export const updatePJById = (data, id, result) => {
//   db.query(
//     "UPDATE PESSOA_JURIDICA SET ramo_atividade = ?, capital_social = ? tipo_empresa = ? razao_social = ? nome_fantasia = ?, "+ 
//       "natureza_juridica = ? porte_empresa = ? data_fundacao = ? telefone = ?, cep = ?, rua = ?, numero = ?, bairro = ?, "+
//       "cidade = ?, uf = ?, complemento = ? WHERE cnpj = ?",
//     [data.ramo_atividade, data.capital_social, data.tipo_empresa, data.razao_social, data.nome_fantasia,
//       data.natureza_juridica, data.porte_empresa, data.data_fundacao, data.telefone, data.cep,
//       data.rua, data.numero, data.bairro, data.cidade, data.uf, data.complemento, id],
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
// export const deletePJById = (id, result) => {
//   db.query("DELETE FROM PESSOA_JURIDICA WHERE cnpj = ?", [id], (err, results) => {
//     if (err) {
//       console.log(err);
//       result(err, null);
//     } else {
//       result(null, results);
//     }
//   });
// };
// importando a conexao
import db from "../config/database.js";

//gets
export const getTituloCadastradoByEmail = (cod_perfil, result) => {
  db.query(
    "SELECT * FROM TITULO_CADASTRADO WHERE cod_perfil = ?",
    cod_perfil,
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
export const getTituloCadastradoByID = (cod_cadastro, result) => {
  db.query(
    "SELECT * FROM TITULO_CADASTRADO WHERE cod_cadastro = ?",
    cod_cadastro,
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

export const insertTituloCadastrado = (data, result) => {
  db.query("INSERT INTO TITULO_CADASTRADO SET ?",
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

//updates - email - senha - tipo perfil
export const updateTituloCadastradoById = (data, id, result) => {
  db.query(
    "UPDATE TITULO_CADASTRADO SET tipo_titulo = ?, data_cadastro = ?, status_titulo = ?, "+
      "numero = ?, valor = ?, desagio = ? WHERE cod_cadastro = ?",
    [data.tipo_titulo, data.data_cadastro, data.status_titulo, data.numero,
      data.valor, data.desagio, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      }else {
        result(null, results);

      }
  });
};

// Delete Product to Database
export const deleteTituloCadastradoById = (id, result) => {
  db.query("DELETE FROM TITULO_CADASTRADO WHERE cod_cadastro = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
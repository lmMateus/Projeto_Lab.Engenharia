// importando a conexao
import db from "../config/database.js";

//gets
export const getPerfilByEmail = (email, result) => {
  db.query(
    "SELECT * FROM PERFIL WHERE email = ?",
    email,
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

export const getPerfilById = (id, result) => {
  db.query(
    "SELECT * FROM PERFIL WHERE cod_perfil = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    });
};

//inserts

export const insertPerfil = (data, result) => {
  db.query("INSERT INTO PERFIL SET ?",
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
export const updatePerfilById = (data, id, result) => {
  db.query(
    "UPDATE PERFIL SET email = ?, senha = ?, tipo_perfil = ? WHERE cod_perfil = ?",
    [data.email, data.senha, data.tipo_perfil, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      }else {
        result(null, results);

      }
  });
};
export const updateEmailById = (data, id, result) => {
  db.query(
    "UPDATE PERFIL SET email = ? WHERE cod_perfil = ?",
    [data.email, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      }else {
        result(null, results);

      }
  });
};
export const updateSenhaPerfil = (data, id, result) => {
  db.query(
    "UPDATE PERFIL SET senha = ? WHERE cod_perfil = ?",
    [data.senha, id],
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
export const deletePerfilById = (id, result) => {
  db.query("DELETE FROM PERFIL WHERE cod_perfil = ?", id, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
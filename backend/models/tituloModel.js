// importando a conexao
import db from "../config/database.js";

//gets
export const getTituloByID = (cod_titulo, result) => {
  db.query(
    "SELECT * FROM TITULO WHERE cod_titulo = ?",
    cod_titulo,
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

export const getAllTitulo = (result) => {
  console.log(result)
  db.query(
    "SELECT * FROM TITULO WHERE (STATUS_TITULO = 'OFERTADO')",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results)
      }
    }
  );
};
//inserts

export const insertTitulo = (data, result) => {
  db.query("INSERT INTO TITULO SET ?",
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
export const updateTituloById = (data, cod_titulo, result) => {
  db.query(
    "UPDATE TITULO SET tipo_titulo = ?, data_cadastro = ?, status_titulo = ?, "+
      "numero = ?, valor = ?, desagio = ? WHERE cod_titulo = ?",
    [data.tipo_titulo, data.data_cadastro, data.status_titulo, data.numero,
      data.valor, data.desagio, cod_titulo],
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
export const deleteTituloById = (cod_titulo, result) => {
  db.query("DELETE FROM TITULO WHERE cod_titulo = ?", cod_titulo, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// AntecipaTitulos
export const setAntecipaTitulo = (data, result) => {
  db.query("INSERT INTO TITULO_ANTECIPADO SET ?",
    data,
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
};

export const setStatusTituloAntecipado = (data, result) => {
  db.query("UPDATE TITULO SET STATUS_TITULO = ? WHERE COD_TITULO = ?",
  [data.status_titulo, data.cod_titulo],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
};

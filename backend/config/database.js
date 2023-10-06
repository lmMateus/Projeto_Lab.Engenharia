import mysql from "mysql2";

//criando conexao com o bando de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db_crud'
})

export default db;
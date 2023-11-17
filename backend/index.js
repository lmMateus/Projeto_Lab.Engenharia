import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";

const app = express();
const PORT = 5173;

app.use(express.json());

app.use(cors());

app.use(Router);

app.listen(PORT,()=>{
  console.log('Serve rodando com sucesso')
})
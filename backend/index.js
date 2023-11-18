import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 5174;

app.use(bodyParser.json())
app.use(express.json());

app.use(cors());

app.use(Router);

app.listen(PORT,()=>{
  console.log('Serve rodando com sucesso')
})
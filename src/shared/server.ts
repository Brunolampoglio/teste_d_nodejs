import "reflect-metadata";
import express from "express";
import { despesas } from "../modules/Despesas/routes/routes";
import { categorias } from "../modules/Categoria/routes/routes";


const app = express();

app.use(express.json());

app.use("/api/despesas", despesas);
app.use("/api/categorias", categorias);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
import { Router } from "express";
import { createCategoriaController } from "../useCases/createCategoria";
import { listAllCategoriaController } from "../useCases/ListAllCategoria.ts";

const categorias = Router();

categorias.post("/", (request, response) => {
    return createCategoriaController.handle(request, response);
});

categorias.get("/", (request, response) => {
    return listAllCategoriaController.handle(request, response);
});



export { categorias };
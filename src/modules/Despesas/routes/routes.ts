import { Router } from "express";
import { createDespesaController } from "../useCases/createDespesa";
import { createPdfDespesasController } from "../useCases/createPdf";
import { listDespesasController } from "../useCases/ListDespesas";
import { createPlanilhaDespesasController } from "../useCases/createPlanilha";
import { updateDespesaController } from "../useCases/UpdateDespesa";
import { updateValorDespesaController } from "../useCases/UpdateValorDespesa";


const despesas = Router();

despesas.post("/",(request, response) => {
    return  createDespesaController.handle(request, response);
});

despesas.get("/report", (request, response) => {
    return createPdfDespesasController.handle(request, response);
});

despesas.get("/list", (request, response) => {
    return listDespesasController.handle(request, response);
});

despesas.get("/planilha", (request, response) => {
    return createPlanilhaDespesasController.handle(request, response);
});

despesas.put("/:id_despesas", (request, response) => {
    return updateDespesaController.handle(request, response);
});

despesas.delete("/:id_despesas", (request, response) => {
    return updateDespesaController.handle(request, response);
});

despesas.patch("/:id_despesas", (request, response) => {
    return updateValorDespesaController.handle(request, response);
});



export { despesas };
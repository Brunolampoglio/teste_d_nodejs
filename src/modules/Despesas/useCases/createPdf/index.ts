import { DespesasPostgresRepository } from "../../repositories/DespesasPostgresRepository";
import { CreatePdfDespesasController } from "./CreatePdfDespesasController";
import { CreatePdfDespesasUseCase } from "./CreatePdfDespesasUseCase";

const despesasPostgresRepository = new DespesasPostgresRepository();

const createPdfDespesasUseCase = new CreatePdfDespesasUseCase(despesasPostgresRepository);

const createPdfDespesasController = new CreatePdfDespesasController(createPdfDespesasUseCase);

export { createPdfDespesasController }
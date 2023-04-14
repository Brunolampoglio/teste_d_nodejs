import { DespesasPostgresRepository } from "../../repositories/DespesasPostgresRepository";
import { CreatePlanilhaDespesasController } from "./CreatePlanilhaDespesas.controller";
import { CreatePlanilhaDespesasUseCase } from "./CreatePlanilhaDespesasUseCase";

const despesasPostgresRepository = new DespesasPostgresRepository();


const createPlanilhaDespesasUseCase = new CreatePlanilhaDespesasUseCase(despesasPostgresRepository);

const createPlanilhaDespesasController = new CreatePlanilhaDespesasController(createPlanilhaDespesasUseCase);

export { createPlanilhaDespesasController }
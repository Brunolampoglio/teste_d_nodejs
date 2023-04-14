import { DespesasPostgresRepository } from "../../repositories/DespesasPostgresRepository";
import { ListDespesasController } from "./ListDespesasController";
import { ListDespesasUseCase } from "./ListDespesasUseCase";

const despesasPostgresRepository = new DespesasPostgresRepository();

const listDespesasUseCase = new ListDespesasUseCase(despesasPostgresRepository);

const listDespesasController = new ListDespesasController(listDespesasUseCase);

export { listDespesasController }
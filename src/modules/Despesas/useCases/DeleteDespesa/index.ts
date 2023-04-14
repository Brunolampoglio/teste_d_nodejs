import { DespesasPostgresRepository } from "../../repositories/DespesasPostgresRepository";
import { DeleteDespesaController } from "./DeleteDespesaController";
import { DeleteDespesaUseCase } from "./DeleteDespesaUseCase";

const despesasPostgresRepository = new DespesasPostgresRepository();

const deleteDespesaUseCase = new DeleteDespesaUseCase(despesasPostgresRepository);

const deleteDespesaController = new DeleteDespesaController(deleteDespesaUseCase);

export { deleteDespesaController }
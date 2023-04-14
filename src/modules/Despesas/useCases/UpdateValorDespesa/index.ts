import { DespesasPostgresRepository } from "../../repositories/DespesasPostgresRepository";
import { UpdateValorDespesaController } from "./UpdateDespesaController";
import { UpdateValorDespesaUseCase } from "./UpdateDespesaUseCase";

const despesasPostgresRepository = new DespesasPostgresRepository();

const updateValorDespesaUseCase = new UpdateValorDespesaUseCase(despesasPostgresRepository);

const updateValorDespesaController = new UpdateValorDespesaController(updateValorDespesaUseCase);

export { updateValorDespesaController }
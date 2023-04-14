import { DespesasPostgresRepository } from "../../repositories/DespesasPostgresRepository";
import { UpdateDespesaController } from "./UpdateDespesaController";
import { UpdateDespesaUseCase } from "./UpdateDespesaUseCase";


const despesasPostgresRepository = new DespesasPostgresRepository();

const updateDespesaUseCase = new UpdateDespesaUseCase(despesasPostgresRepository);

const updateDespesaController = new UpdateDespesaController(updateDespesaUseCase);

export { updateDespesaController }


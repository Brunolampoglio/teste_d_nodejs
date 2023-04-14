import { CreateDespesaUseCase } from "./CreateDespesaUseCase";
import { CreateDespesaController } from "./CreateDespesaController";
import { DespesasPostgresRepository} from "../../repositories/DespesasPostgresRepository";
import { ViaCepProvider } from "../../../../shared/container/providers/implementation/ViaCepProvider";
import { EnderecoPostgresRepository } from "../../repositories/EnderecoPostgresRepository";


const despesasPostgresRepository = new DespesasPostgresRepository();

const viaCepProvider = new ViaCepProvider();
const enderecoRepository = new EnderecoPostgresRepository();

const createDespesaUseCase = new CreateDespesaUseCase(despesasPostgresRepository, viaCepProvider, enderecoRepository);
const createDespesaController = new CreateDespesaController(createDespesaUseCase);

export { createDespesaController }
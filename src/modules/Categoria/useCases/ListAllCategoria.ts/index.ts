import { CategoriaPostgresRepository } from "../../repositories/CategoriaPostegresRepository";
import { ListAllCategoriaController } from "./ListCategoriaController";
import { ListAllCategoriaUseCase } from "./ListCategoriaUseCase";

const categoriaPostgresRepository = new CategoriaPostgresRepository();

const listAllCategoriaUseCase = new ListAllCategoriaUseCase(categoriaPostgresRepository);

const listAllCategoriaController = new ListAllCategoriaController(listAllCategoriaUseCase);

export { listAllCategoriaController }
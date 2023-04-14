import { CategoriaPostgresRepository } from "../../repositories/CategoriaPostegresRepository";
import { CreateCategoriaController } from "./CreateCategoriaController";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";



const categoriaPostgresRepository = new CategoriaPostgresRepository();
const createCategoriaUseCase = new CreateCategoriaUseCase(categoriaPostgresRepository);
const createCategoriaController = new CreateCategoriaController(createCategoriaUseCase);

export { createCategoriaController }
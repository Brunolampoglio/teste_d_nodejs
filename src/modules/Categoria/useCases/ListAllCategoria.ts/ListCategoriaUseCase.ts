import { Categorias } from "../../entities/Categoria";
import { ICategoriaRepository } from "../../repositories/ICategoriaRepositories";

class ListAllCategoriaUseCase {
  constructor(private categoriaRepository: ICategoriaRepository) {}

  async execute(): Promise<Categorias[]> {
    const categoria = await this.categoriaRepository.list();

    console.log(categoria);

    return categoria;
  }
}

export { ListAllCategoriaUseCase };
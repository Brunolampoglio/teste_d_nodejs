import { Categorias } from "../../entities/Categoria";
import { ICategoriaRepository } from "../../repositories/ICategoriaRepositories";

export interface ICreateCategoriaDTO{
    nome: string;
    descricao: string;
}

class CreateCategoriaUseCase{
    constructor(
        private categoriaRepository: ICategoriaRepository,
    ){}
    
    async execute({
        nome,
        descricao,
    }: ICreateCategoriaDTO){
        let categoria = new Categorias();

         categoria = Object.assign({
            ...categoria,
            nome,
            descricao,
        });

        await this.categoriaRepository.create(categoria);

        return {
            data: categoria.id,
            "sucess": "true"
        };
    }
}

export { CreateCategoriaUseCase }
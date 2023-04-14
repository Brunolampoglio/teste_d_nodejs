import { Categorias} from "../entities/Categoria";

interface ICategoriaRepository{
    create (data: Categorias): Promise<Categorias>;
    list(): Promise<Categorias[]>;
}

export { ICategoriaRepository }
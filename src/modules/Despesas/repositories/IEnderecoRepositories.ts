import { Endereco } from "../entities/Endereco";

interface IEnderecoRepositories {
    create(data: Endereco): Promise<Endereco>;
}

export { IEnderecoRepositories };
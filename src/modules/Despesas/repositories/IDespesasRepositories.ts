import { Despesas } from "../entities/Despesas";

interface IDespesasRepositories {
    create(data: Despesas): Promise<Despesas>;
    list(page: number, limit: number): Promise<Despesas[]>; // Listar com paginação
    listByDate(dataInicial: Date, dataFinal: Date): Promise<Despesas[]>;
    findById(id: string): Promise<Despesas>;
    update(data: Despesas): Promise<Despesas>;
    updateValor(id: string, valor: number): Promise<Despesas>;
    delete(id: string): Promise<void>;
}

export { IDespesasRepositories };
import { Despesas } from "../../entities/Despesas";
import { IDespesasRepositories } from "../../repositories/IDespesasRepositories";

interface IListDespesasDTO {
    page: number;
    limit: number;
}

class ListDespesasUseCase {
    constructor(
        private despesasRepository: IDespesasRepositories
    ) {}
    async execute({ page, limit }: IListDespesasDTO) {
        const despesas = await this.despesasRepository.list(
            page,
            limit
        );

        const body = [];
        for await (let despesa of despesas) {

            let  { id, descricao_despesas, valor, data_compra, nome, tipo} = despesa;
            const rows = new Array();
            
            rows.push(id);
            rows.push(descricao_despesas);
            rows.push(valor);
            rows.push(data_compra.toLocaleDateString());
            rows.push(nome);
            rows.push(tipo);

            body.push(rows);
        }

        return {
            "data": body,
            "sucess": true
        };
    }

}

export { ListDespesasUseCase };
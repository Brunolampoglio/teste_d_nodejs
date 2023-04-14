import { IDespesasRepositories } from "../../repositories/IDespesasRepositories";

export interface ICreateDespesaDTO{
    id_despesas: string;
    descricao_despesas?: string;
    valor?: number;
    data_compra?: Date;
    tipo_pagamento_id?: string;
    categoria_id?: string;
}

class UpdateDespesaUseCase {

    constructor(
        private despesasRepository: IDespesasRepositories
    ){}


    async execute({
        id_despesas,
        valor,
        data_compra,
        descricao_despesas,
        tipo_pagamento_id,
        categoria_id,
    }: ICreateDespesaDTO) {
        const despesa = await this.despesasRepository.findById(id_despesas);

       if(!despesa){
         return {
            "success": false,
         };
         }
        Object.assign(despesa, {
            data_compra,
            descricao_despesas,
            valor,
            tipo_pagamento_id,
            categoria_id,
        });

        console.log(despesa);

         await this.despesasRepository.update(despesa);
        return {
            "data": despesa,
            "success": true,
        };
    }
}

export { UpdateDespesaUseCase }
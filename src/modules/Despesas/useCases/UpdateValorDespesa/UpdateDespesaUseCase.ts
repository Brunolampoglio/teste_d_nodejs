import { IDespesasRepositories } from "../../repositories/IDespesasRepositories";

export interface ICreateDespesaDTO{
    id_despesas: string;
    valor: number;
}

class UpdateValorDespesaUseCase {

    constructor(
        private despesasRepository: IDespesasRepositories
    ){}
    
    async execute({
        id_despesas,
        valor,
    }: ICreateDespesaDTO) {
        const despesa = await this.despesasRepository.findById(id_despesas);

       if(!despesa){
         return {
            "data": despesa,
            "success": false,
         };
        }

         const despesas = await this.despesasRepository.updateValor(id_despesas, valor);

         console.log(despesas);
        return {
            "data": despesas,
            "success": true
        };
    }
}

export { UpdateValorDespesaUseCase }
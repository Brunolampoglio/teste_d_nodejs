import { ViaCepProvider } from "../../../../shared/container/providers/implementation/ViaCepProvider";
import { Despesas } from "../../entities/Despesas";
import { Endereco } from "../../entities/Endereco";
import { IDespesasRepositories } from "../../repositories/IDespesasRepositories";
import { IEnderecoRepositories } from "../../repositories/IEnderecoRepositories";


export interface ICreateDespesaDTO{
    descricao_despesas: string;
    valor: number;
    data_compra: Date;
    tipo_pagamento_id: string;
    categoria_id: string;
    cep: string;
    numero: string;
}

class CreateDespesaUseCase{
    constructor(
        private despesasRepository: IDespesasRepositories,
        private cepProvider: IViaCepProvider,
        private enderecoRepository: IEnderecoRepositories
    ){}
    
    async execute({
        descricao_despesas,
        valor,
        data_compra,
        tipo_pagamento_id,
        categoria_id,
        cep,
        numero,
    }: ICreateDespesaDTO){

        const viaCep = await this.cepProvider.getAddress(cep);

        let endereco = new Endereco();
        endereco = Object.assign({
            ...endereco,
            cep,
            logradouro: viaCep.logradouro,
            bairro: viaCep.bairro,
            cidade: viaCep.localidade,
            estado: viaCep.uf,
            numero,
        });
        console.log(endereco, numero);


        await this.enderecoRepository.create(endereco);

        console.log(endereco.id_enderecos);
       

        let despesa = new Despesas();
         despesa = Object.assign({
            ...despesa,
            descricao_despesas,
            valor,
            data_compra,
            tipo_pagamento_id,
            categoria_id,
            endereco_id: endereco.id_enderecos,
        });


        await this.despesasRepository.create(despesa);

        return {
            data: despesa.id,
            "sucess": true
        };
    }
}
export { CreateDespesaUseCase }
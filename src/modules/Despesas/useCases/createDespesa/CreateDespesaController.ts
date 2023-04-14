import { Request, Response } from "express";
import { CreateDespesaUseCase } from "./CreateDespesaUseCase";


class CreateDespesaController{
    constructor(private createDespesaService: CreateDespesaUseCase){}
    async handle(request: Request, response: Response) {
        const { descricao_despesas, valor, data_compra, tipo_pagamento_id, categoria_id, cep, numero } = request.body;
        const despesa = await this.createDespesaService.execute({
            descricao_despesas,
            valor,
            data_compra,
            tipo_pagamento_id,
            categoria_id,
            cep,
            numero,
        });
        return response.json(despesa);
    }
}

export { CreateDespesaController }
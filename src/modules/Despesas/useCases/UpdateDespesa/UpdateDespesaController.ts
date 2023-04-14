import { Request, Response } from "express";
import { UpdateDespesaUseCase } from "./UpdateDespesaUseCase";

class UpdateDespesaController {

    constructor(
        private updateDespesaUseCase: UpdateDespesaUseCase
    ){}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            valor,
            data_compra,
            descricao_despesas,
            tipo_pagamento_id,
            categoria_id,
        } = request.body;
        const { id_despesas } = request.params;

        const despesa = await this.updateDespesaUseCase.execute({
            id_despesas,
            valor,
            data_compra,
            descricao_despesas,
            tipo_pagamento_id,
            categoria_id,
        });

        return response.json(despesa);
    }


}

export { UpdateDespesaController }
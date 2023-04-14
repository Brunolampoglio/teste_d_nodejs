import { Request, Response } from "express";
import { UpdateValorDespesaUseCase } from "./UpdateDespesaUseCase";


class UpdateValorDespesaController {

    constructor(
        private updateValorDespesaUseCase: UpdateValorDespesaUseCase
    ){}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { valor } = request.body;
        const { id_despesas } = request.params;

        const despesa = await this.updateValorDespesaUseCase.execute({
            id_despesas,
            valor,
        });

        return response.json(despesa);
    }


}

export { UpdateValorDespesaController }
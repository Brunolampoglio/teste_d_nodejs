import { Request, Response } from "express";
import { CreatePdfDespesasUseCase } from "./CreatePdfDespesasUseCase";

class CreatePdfDespesasController {
constructor(
private createPdfDespesasUseCase: CreatePdfDespesasUseCase
){}
    async handle(request: Request, response: Response) {
        const { dataInicial, dataFinal } = request.query;

        const despesa = await this.createPdfDespesasUseCase.execute({
            dataInicial: new Date(dataInicial as string),
            dataFinal: new Date(dataFinal as string),
        });
        return response.json(despesa);
    }


}

export { CreatePdfDespesasController }
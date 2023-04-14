import { Request, Response } from "express";
import { CreatePlanilhaDespesasUseCase } from "./CreatePlanilhaDespesasUseCase";

class CreatePlanilhaDespesasController {

    constructor(
        private createPlanilhaDespesasUseCase: CreatePlanilhaDespesasUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
    
        const despesas = await this.createPlanilhaDespesasUseCase.execute();

        return response.json(despesas);
    }
}
export { CreatePlanilhaDespesasController }
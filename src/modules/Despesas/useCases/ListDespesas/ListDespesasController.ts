import { Request, Response } from "express";
import { ListDespesasUseCase } from "./ListDespesasUseCase";

class ListDespesasController {
    constructor(private listDespesasUseCase: ListDespesasUseCase
        ) {}
    async handle(request: Request, response: Response) {
        const { page, limit } = request.query as {
            [key: string]: string;
          };
       
        const despesas = await this.listDespesasUseCase.execute({
            page: parseInt(page, 10) || 1,
            limit: parseInt(limit, 10) || 50,
        });
        return response.json(despesas);
    }
}
export { ListDespesasController }
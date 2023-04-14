
import { Request, Response } from 'express';
import { DeleteDespesaUseCase } from './DeleteDespesaUseCase';

class DeleteDespesaController {
  constructor(private deleteDespesaUseCase: DeleteDespesaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteDespesaUseCase.execute(id);

    return response.status(204).send();
  }
}
export { DeleteDespesaController };
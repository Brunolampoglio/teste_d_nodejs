import { IDespesasRepositories } from "../../repositories/IDespesasRepositories";

class DeleteDespesaUseCase {
  constructor(
    private despesasRepository: IDespesasRepositories,
  ) {}

  async execute(id: string) {
    const despesa = await this.despesasRepository.findById(id);

    if (!despesa) {
      return {
        "success": false,
      }
    }

    await this.despesasRepository.delete(id);

    return {
      "success": true,
    }
  }
}

export { DeleteDespesaUseCase };
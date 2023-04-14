import axios from 'axios';

class ViaCepProvider {
    async getAddress(cep: string) {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response.data
    }
}

export { ViaCepProvider };
export class ImovelService {
    constructor() {
        this.urlBase = "/properties";
    }

    async getImoveis() { //Pega os itens no db.json
        const resposta = await fetch(this.urlBase); //Aguardar o fetch buscar na url base
        return resposta.json();
    }

    async gerarImovel(id) {
        const resposta = await fetch(`${this.urlBase}/${id}`); //fetch automaticamente faz o GET 
        return resposta.json();
    }

    async criarImovel(imovel) {
        const resposta = await fetch(this.urlBase, { //dentro dessas chaves abre um objeto javascript
            method: "POST", //Envia
            headers: { //PADRÃO (Indica que tipo de dado vai ser enviado)
                "Content-Type": "application/json", //Objeto JSON vindo de uma aplicação
            },
            body: JSON.stringify(imovel), //transforma o objeto em string e envia para os computadores
        });
        return resposta.json();
    }

    async atualizarImovel(id, imovel) {
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "PUT", //Sobrescrever a informação
            headers: {
                "Content-Type": "properties/json",
            },
            body: JSON.stringify(imovel),
        });
        return resposta.json();
    }
    async atualizarImovel(id, imovel) {
        const resposta = await fetch(`${this.urlBase}/${id}`, {
            method: "DELETE", //remove o objeto no JSON server
        });
        return resposta.json();
    }
}
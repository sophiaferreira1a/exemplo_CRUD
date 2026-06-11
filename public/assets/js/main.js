import { ImovelService } from "../service/imovel-service.js";

const imovelService = new ImovelService();

function carregarDados(){
    let imoveis = imovelService.getImoveis();
    console.table(imoveis);
}

window.addEventListener("load", carregarDados)
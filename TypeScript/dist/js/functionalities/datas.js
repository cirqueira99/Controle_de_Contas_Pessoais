export class Data {
    static removeDatasRepetidas(lista, data_mes) {
        const datasUnicas = [];
        for (var conta in lista) {
            const ano = lista[conta].data.split("/")[2];
            const mes = lista[conta].data.split("/")[1];
            const mes_lista = ano + "-" + mes;
            if ((datasUnicas.indexOf(lista[conta].data) === -1) && (mes_lista == data_mes)) {
                datasUnicas.push(lista[conta].data);
            }
        }
        return datasUnicas;
    }
    ordenaDatas() {
    }
    static retornaMesAtual() {
        const data = new Date();
        var dia = data.getDay();
        var mes = data.getMonth();
        var ano = data.getFullYear();
        const data_atual = ("0" + dia).slice(-2) + '/' + ("0" + mes).slice(-2) + '/' + ano;
        return data_atual;
    }
    novaListagemMes() {
    }
}

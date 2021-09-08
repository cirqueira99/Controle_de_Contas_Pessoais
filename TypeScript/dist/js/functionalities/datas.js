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
        this.ordenaDatas(datasUnicas);
        return datasUnicas;
    }
    static ordenaDatas(datas) {
        var datas_ordenadas = datas;
        datas_ordenadas.sort((a, b) => {
            const primeiraData = new Date(parseInt(a.split("/")[2]), parseInt(a.split("/")[1]), parseInt(a.split("/")[0]));
            const segundaData = new Date(parseInt(b.split("/")[2]), parseInt(b.split("/")[1]), parseInt(b.split("/")[0]));
            const data1 = primeiraData.getTime();
            const data2 = segundaData.getTime();
            return data2 - data1;
        });
        return datas_ordenadas;
    }
    static retornaMesAtual() {
        const data = new Date();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        const data_atual = ano + '-' + ("0" + mes).slice(-2);
        return data_atual;
    }
}

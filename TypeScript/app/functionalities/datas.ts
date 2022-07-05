import { Conta } from '../models/accounts';

export class Data {

  public static removeDatasRepetidas(lista: any, data_mes: string): Array<string> { 
    const datasUnicas: Array<string> = [];

    for( var conta in lista ){
      const ano = lista[conta].data.split("/")[2]
      const mes = lista[conta].data.split("/")[1]
      const mes_lista: string = ano + "-" + mes;  

      if( (datasUnicas.indexOf(lista[conta].data) === -1) && (mes_lista == data_mes) ){ datasUnicas.push(lista[conta].data) }
    } 
        
    this.ordenaDatas(datasUnicas);  

    return datasUnicas;
  }

  public static ordenaDatas(datas: Array<string>): Array<string>{ 
    var datas_ordenadas: Array<string> = datas;

    datas_ordenadas.sort((a, b) => {
      const primeiraData: Date = new Date( parseInt(a.split("/")[2]), parseInt(a.split("/")[1]), parseInt(a.split("/")[0]) );
      const segundaData: Date = new Date( parseInt(b.split("/")[2]), parseInt(b.split("/")[1]), parseInt(b.split("/")[0]) );
      
      const data1: number = primeiraData.getTime();
      const data2: number = segundaData.getTime();

     return data2 - data1
    })

    return datas_ordenadas;
  }


  public static retornaMesAtual(): string{    
    const data: Date = new Date();    
    var mes: number  = data.getMonth()+1;
    var ano: number  = data.getFullYear();
    const data_atual: string = ano + '-' + ("0"+mes).slice(-2);

    return data_atual;
  }

}
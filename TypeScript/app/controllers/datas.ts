import { Conta } from './../models/conta';

export class Data {

  public static removeDatasRepetidas(lista: any, data_mes: string): Array<string> { 
    const datasUnicas: Array<string> = [];

    for( var conta in lista ){
      const ano = lista[conta].data.split("/")[2]
      const mes = lista[conta].data.split("/")[1]
      const mes_lista: string = ano + "-" + mes;  
      
      if( (datasUnicas.indexOf(lista[conta].data) === -1) && (mes_lista == data_mes) ){ datasUnicas.push(lista[conta].data) }
    } 

    return datasUnicas;
  }

  ordenaDatas(){ 

  }


  public static retornaMesAtual(): string{
    
    const data: Date = new Date();    
    var dia: number  = data.getDay();
    var mes: number  = data.getMonth();
    var ano: number  = data.getFullYear();


    const data_atual: string = ("0"+dia).slice(-2) + '/' + ("0"+mes).slice(-2) + '/' + ano  ;

    return data_atual;
  }

  novaListagemMes(){

  }

}
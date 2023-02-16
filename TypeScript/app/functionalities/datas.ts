import { Account } from '../models/accounts';

export class DateClass {

  public static removesRepeatedDates(list: any, month_date: string): Array<string> { 
    const dates_unrepeated: Array<string> = [];

    for( var account in list ){
      const year = list[account].date_account.split("/")[2]
      const month = list[account].date_account.split("/")[1]
      const month_list: string = year + "-" + month;  

      if( (dates_unrepeated.indexOf(list[account].date_account) === -1) && (month_list == month_date) ){ dates_unrepeated.push(list[account].date_account) }
    } 
        
    return this.sortDates(dates_unrepeated);;
  }

  public static sortDates(datas: Array<string>): Array<string>{ 
    datas.sort((a, b) => {
      const firsDate: Date = new Date( parseInt(a.split("/")[2]), parseInt(a.split("/")[1]), parseInt(a.split("/")[0]) );
      const secondDate: Date = new Date( parseInt(b.split("/")[2]), parseInt(b.split("/")[1]), parseInt(b.split("/")[0]) );
      
      const date1: number = firsDate.getTime();
      const date2: number = secondDate.getTime();

     return date1 - date2;
    })

    return datas;
  }

  public static retornCurrentMonth(): string{    
    const data: Date = new Date();    
    var month: number  = data.getMonth()+1;
    var year: number  = data.getFullYear();
    const currently_date: string = year + '-' + ("0"+month).slice(-2);

    return currently_date;
  }

}
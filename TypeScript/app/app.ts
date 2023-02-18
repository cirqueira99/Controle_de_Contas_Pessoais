import { startElementsPage } from './functionalities/load_components.js';
import { DateClass } from './functionalities/datas.js';
import { ListController } from './controllers/list_accounts.js';


startElementsPage();

var month_storage: string | null = sessionStorage.getItem('month_storage');

if(month_storage == null){
  month_storage = DateClass.retornCurrentMonth();
  sessionStorage.setItem('month_storage', month_storage);
}

ListController.listAccounts(month_storage);

const div_btnUp: HTMLElement = <HTMLDivElement>document.getElementsByClassName('back-to-top')[0];

window.addEventListener("scroll", (event) => {
  const scroll_y: number = window.scrollY;

  scroll_y < 400 ? div_btnUp.style.display = 'none': div_btnUp.style.display = 'flex';
})

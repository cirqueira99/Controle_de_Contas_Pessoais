
import { carregaElemtosPagina } from "./componentes/load_components.js";
import { Listar } from "./componentes/list_accounts.js";



carregaElemtosPagina();

var mes_storage = sessionStorage.getItem('mes_storage');

if(mes_storage == null){
  mes_storage = moment().format('YYYY-MM');
  sessionStorage.setItem('mes_storage', mes_storage);
}

Listar.listarContas(mes_storage);

window.addEventListener("scroll", (event) => {
  var scroll_y = window.scrollY;

  scroll_y < 399 ? document.getElementById('bak-to-top').style.display = 'none': document.getElementById('bak-to-top').style.display = 'block';
})



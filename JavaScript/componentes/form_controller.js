
const changeStyleSelect = (evento) => {
  const element = evento.target;
  element.style.color = 'rgb(0, 238, 255)';

  const label_select = document.getElementById('label_tipo'); 
  label_select.style.display = 'block'
}


const changeStyleDate = (evento) => {
  const element = evento.target;
  element.style.color = 'rgb(0, 238, 255)';

  const label_date = document.getElementById('label_date');
  label_date.style.display = 'block'
}

export const Form = {
  changeStyleSelect,
  changeStyleDate
}

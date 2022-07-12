const removesRepeatedDates = (list, date_month) => { 

  const dates_unrepeated = []
  list.forEach((element => { 
    const month_list = moment(element.date_account, 'DD/MM/YYYY').format('YYYY-MM')
    
    if( (dates_unrepeated.indexOf(element.date_account) === -1) && (month_list == date_month) ){
      dates_unrepeated.push(element.date_account)
    }
  }))

  sortDates(dates_unrepeated)

  return dates_unrepeated
}

const sortDates = (data) => { 
  data.sort((a, b) => {
      const firstDate = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
      const secondDate = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');
     return secondDate - firstDate;
  })
}

const getInputMonth = () => {
  const month_input = document.querySelector('[data-month]').value;
  const month = moment(month_input, 'YYYY-MM').format('YYYY-MM');

  return month;
}

export const DatesClass = {
  removesRepeatedDates,
  sortDates
}
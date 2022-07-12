export class DateClass {
    static removesRepeatedDates(list, month_date) {
        const dates_unrepeated = [];
        for (var account in list) {
            const year = list[account].date_account.split("/")[2];
            const month = list[account].date_account.split("/")[1];
            const month_list = year + "-" + month;
            if ((dates_unrepeated.indexOf(list[account].date_account) === -1) && (month_list == month_date)) {
                dates_unrepeated.push(list[account].date_account);
            }
        }
        this.sortDates(dates_unrepeated);
        return dates_unrepeated;
    }
    static sortDates(datas) {
        var sort_dates = datas;
        sort_dates.sort((a, b) => {
            const firsDate = new Date(parseInt(a.split("/")[2]), parseInt(a.split("/")[1]), parseInt(a.split("/")[0]));
            const secondDate = new Date(parseInt(b.split("/")[2]), parseInt(b.split("/")[1]), parseInt(b.split("/")[0]));
            const date1 = firsDate.getTime();
            const date2 = secondDate.getTime();
            return date2 - date1;
        });
        return sort_dates;
    }
    static retornCurrentMonth() {
        const data = new Date();
        var month = data.getMonth() + 1;
        var year = data.getFullYear();
        const currently_date = year + '-' + ("0" + month).slice(-2);
        return currently_date;
    }
}

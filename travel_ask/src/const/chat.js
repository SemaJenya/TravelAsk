
function dayDiff(dateFrom, dateTo) {
    console.log(dateTo.getDay() - dateFrom.getDay() );
    return dateTo.getDay() - dateFrom.getDay() 
   };

function hoursDiff(dateFrom, dateTo) {
    console.log(dateTo.getHours() - dateFrom.getHours() );
    return dateTo.getHours() - dateFrom.getHours() 
};
 
function minutsDiff(dateFrom, dateTo) {
    console.log(dateTo.getMinutes() - dateFrom.getMinutes() );
    return dateTo.getMinutes() - dateFrom.getMinutes() 
};

 const currentDate = new Date();
 const date1 = new Date("7-23-2024");



export const test_1 = {
    id: 1,
    date: new Date(),
    message: `Из достопримечательностей могу предложить обратить
     внимание на вулкан Майон, путешествие запомнится вам надолго
      хотя бы из-за невероятной сложности подъема на него.
       Поверьте, это стоит того; также хотелf бы отметить очень важную область исследования `
}

export const test_2 = {
    id: 2, 
    date: new Date(),
    message: `Что из себя представляет вулкан?
    Просто хочу убедиться, что готова к такому путешествию.`
}



export const chatStore = [test_1, test_2, test_1, test_2, test_1, test_2, test_1, test_2];
console.log(chatStore, 'default store valu')
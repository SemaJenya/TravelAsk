
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

//  const diff = dayDiff(date1, currentDate)

//  console.log(diff, 'day');

export const test_1 = {
    id: 1,
    date: new Date(),
    message: `hello world fjjfjfj fjfjjfjfkf jkfdkdhhf sdkhjh dkghjhfj
    hfgdjdjjd djdjjdjd djd djjdjdjd djdjdjjd djdjdjdjdjdkjdkdj djdkjd
     djkdjkd djkd kjdhdsjhsdjhd x lxfkjghxkh djhkhdkjdhhd vdjdhd 
     dhdjhdjd dhjdhdjddhd jvkhjv ddd`
}

export const test_2 = {
    id: 2, 
    date: new Date(),
    message: 'or not fhfhhf fgstqoq .ncbxhbhks bhagfkjnx laknkfn mhdbsshf?'
}



export let chatStore = [test_1, test_2, test_1, test_2];
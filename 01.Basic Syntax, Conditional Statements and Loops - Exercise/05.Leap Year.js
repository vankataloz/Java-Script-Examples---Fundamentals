function leapYear(year) {
   /* year = Number(year);

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log('yes');
    }
    else {
        console.log('no');
    }*/
    let result = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? "yes" : "no"
    console.log(result);
}
leapYear(400)
function hoursReading(pagesCount, pagesReadPerHour, bookReadingDays){
    let totalTimeNeededForBookReading = pagesCount / pagesReadPerHour;
    let hoursReadingPerDay = totalTimeNeededForBookReading / bookReadingDays;

    console.log(hoursReadingPerDay);
}
hoursReading(212,20 ,2);
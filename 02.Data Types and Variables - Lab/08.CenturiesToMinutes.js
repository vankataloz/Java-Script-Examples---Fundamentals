function centuriesToMinutes(centuriesCount){
    let yearsInOneCenturie = 100;
    let averageDaysInOneYear = 365.2422;
    let hoursInOneDay = 24;
    let minutesInOneHour = 60;
    let convertetCenturiesToYears = centuriesCount * yearsInOneCenturie;
    let convertedYearsToDays = Math.trunc(convertetCenturiesToYears * averageDaysInOneYear);
    let convertedDaysToHours = convertedYearsToDays * hoursInOneDay;
    let convertedHoursToMinutes = convertedDaysToHours * minutesInOneHour;

    console.log(`${centuriesCount} centuries = ${convertetCenturiesToYears} years = ${convertedYearsToDays} days = ${convertedDaysToHours} hours = ${convertedHoursToMinutes} minutes`);

}
centuriesToMinutes();
function spiceMustFlow(startingYield) {
  /* let minedSpices = 0;
    let consumedSpices = 0;
    let daysCount = 0;
    while (startingYield >= 100) {
        minedSpices += startingYield;
        startingYield -= 10;
        consumedSpices += 26;
        daysCount++;
    }
    let resultOfMining = minedSpices - consumedSpices - 26;
    if (resultOfMining < 0) {
        resultOfMining = 0;
    }
    console.log(daysCount);
    console.log(resultOfMining);
    */
  let minedSpices = 0;
  let daysCount = 0;
  while (startingYield >= 100) {
    daysCount++;
    minedSpices += startingYield - 26;
    startingYield -= 10;
  }
  console.log(daysCount);
  if (daysCount != 0) {
    console.log(minedSpices - 26);
  } else {
    console.log(minedSpices);
  }
}
spiceMustFlow(111);

function bitcoinMining(goldMinnedPerDay) {
  let goldGramPrice = 67.51;
  let bitCoinPrice = 11949.16;
  let bitcoinCount = 0;
  let totalMoney = 0;
  let dayCount = 0;
  let boughtBitcoin = false;

  for (let i = 0; i < goldMinnedPerDay.length; i++) {
      dayCount++;
      let thisSessionMoney = goldMinnedPerDay[i] * goldGramPrice;
      if (dayCount % 3 === 0) {
          thisSessionMoney *= 0.7;
      }
      totalMoney += thisSessionMoney;
      while(totalMoney>=bitCoinPrice){
          totalMoney-=bitCoinPrice
          bitcoinCount++;
          if(boughtBitcoin === false){
              boughtBitcoin = dayCount;
          }
      }
  }
  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if(boughtBitcoin !== false){
      console.log(`Day of the first purchased bitcoin: ${boughtBitcoin}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);
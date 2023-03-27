function gladiatorExpenses(lostCount, helmPrice, swordPrice, shieldPrice, armorPrice) {
  /* let helmRepairs = Math.floor(lostCount / 2);
    let swordRepairs = Math.floor(lostCount / 3);
    let shieldRepairs = Math.floor(lostCount / 6);
    let armorRepairs = Math.floor(shieldRepairs / 2);

    let helmRepairCost = helmRepairs * helmPrice;
    let swordRepairCost = swordRepairs * swordPrice;
    let shieldRepairCost = shieldRepairs * shieldPrice;
    let armorRepairCost = armorRepairs * armorPrice;

    let sumOfExpenses = helmRepairCost + swordRepairCost + shieldRepairCost + armorRepairCost;

    console.log(`Gladiator expenses: ${sumOfExpenses.toFixed(2)} aureus`);*/

  let totalExpenses = 0;
  for (let currentFight = 1; currentFight <= lostCount; currentFight++) {
    if (currentFight % 2 === 0) {
      totalExpenses += helmPrice;
    }
    if (currentFight % 3 === 0) {
      totalExpenses += swordPrice;
    }
    if (currentFight % 6 === 0) {
      totalExpenses += shieldPrice;
    }
    if (currentFight % 12 === 0) {
      totalExpenses += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);

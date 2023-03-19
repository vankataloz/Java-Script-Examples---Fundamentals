function gladiatorExpenses(lostCount, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let helmRepairs = Math.floor(lostCount / 2);
    let swordRepairs = Math.floor(lostCount / 3);
    let shieldRepairs = Math.floor(lostCount / 6);
    let armorRepairs = Math.floor(shieldRepairs / 2);

    let helmRepairCost = helmRepairs * helmPrice;
    let swordRepairCost = swordRepairs * swordPrice;
    let shieldRepairCost = shieldRepairs * shieldPrice;
    let armorRepairCost = armorRepairs * armorPrice;

    let sumOfExpenses = helmRepairCost + swordRepairCost + shieldRepairCost + armorRepairCost;

    console.log(`Gladiator expenses: ${sumOfExpenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);

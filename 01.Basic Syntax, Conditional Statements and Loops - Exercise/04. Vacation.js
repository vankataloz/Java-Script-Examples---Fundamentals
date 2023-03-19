function vacation(peopleCount, groupType, dayOfWeek) {
    peopleCount = Number(peopleCount);
    
    let studentsFridayPrice = 8.45;
    let studentsSaturdayPrice = 9.80;
    let studentsSundayPrice = 10.46;
    let businessFridayPrice = 10.90;
    let businessSaturdayPrice = 15.60;
    let businessSundayPrice = 16;
    let regularFridayPrice = 15;
    let regularSaturdayPrice = 20;
    let regularSundayPrice = 22.50;

    let studentsDiscount = 15;
    let bussinesDiscount = 10;
    let regularDiscount = 5;

    let totalPrice = 0;

    if (groupType === 'Business' && peopleCount >= 100) {
        peopleCount -= bussinesDiscount;
    }
    if (groupType === 'Students' && dayOfWeek === 'Friday') {
        totalPrice += peopleCount * studentsFridayPrice;
    }
    else if (groupType === 'Students' && dayOfWeek === 'Saturday') {
        totalPrice += peopleCount * studentsSaturdayPrice;
    }
    else if (groupType === 'Students' && dayOfWeek === 'Sunday') {
        totalPrice += peopleCount * studentsSundayPrice;
    }
    else if (groupType === 'Business' && dayOfWeek === 'Friday') {
        totalPrice += peopleCount * businessFridayPrice;
    }
    else if (groupType === 'Business' && dayOfWeek === 'Saturday') {
        totalPrice += peopleCount * businessSaturdayPrice;
    }
    else if (groupType === 'Business' && dayOfWeek === 'Sunday') {
        totalPrice += peopleCount * businessSundayPrice;
    }
    else if (groupType === 'Regular' && dayOfWeek === 'Friday') {
        totalPrice += peopleCount * regularFridayPrice;
    }
    else if (groupType === 'Regular' && dayOfWeek === 'Saturday') {
        totalPrice += peopleCount * regularSaturdayPrice;
    }
    else if (groupType === 'Regular' && dayOfWeek === 'Sunday') {
        totalPrice += peopleCount * regularSundayPrice;
    }
    if (groupType === 'Students' && peopleCount >= 30) {
        totalPrice -= (studentsDiscount / 100) * totalPrice;
    }
    else if (groupType === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice -= (regularDiscount / 100) * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30,
    "Students",
    "Sunday")
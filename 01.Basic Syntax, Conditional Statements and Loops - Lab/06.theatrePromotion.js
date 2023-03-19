/* function theatrePromotion(day, age) {
    let ticketPrice = 0;
    if (day === 'Weekday') {
        if (0 <= age && age <= 18) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        }
        else if (18 <= age && age <= 64) {
            ticketPrice = 18;
            console.log(`${ticketPrice}$`);
        }
        else if (64 <= age && age <= 122) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        }
        else {
            console.log('Error!');
        }
    }
    else if (day === 'Weekend') {
        if (0 <= age && age <= 18) {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`);
        }
        else if (18 <= age && age <= 64) {
            ticketPrice = 20;
            console.log(`${ticketPrice}$`);
        }
        else if (64 <= age && age <= 122) {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`);
        }
        else {
            console.log('Error!');
        }
    }
    else if (day === 'Holiday') {
        if (0 <= age && age <= 18) {
            ticketPrice = 5;
            console.log(`${ticketPrice}$`);
        }
        else if (18 <= age && age <= 64) {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
        }
        else if (64 <= age && age <= 122) {
            ticketPrice = 10;
            console.log(`${ticketPrice}$`);
        }
        else {
            console.log('Error!');
        }
    }
}
*/
function theatrePromotion(day, age) {
    let ticketPrice;
    if (age >= 0 && age <= 122) {

        switch (day) {
            case 'Weekday':
                if (age > 18 && age <= 64) {
                    ticketPrice = 18;
                }
                else {
                    ticketPrice = 12;
                }
                break;
            case 'Weekend':
                if (age > 18 && age <= 64) {
                    ticketPrice = 20;
                }
                else {
                    ticketPrice = 15;
                }
                break;
            case 'Holiday':
                if (age <= 18) {
                    ticketPrice = 5;
                }
                else if (age <= 64) {
                    ticketPrice = 12;
                }
                else {
                    ticketPrice = 10;
                }
                break;
        }
        console.log(`${ticketPrice}$`);
    }
    else {
        console.log('Error!');
    }
}
theatrePromotion();
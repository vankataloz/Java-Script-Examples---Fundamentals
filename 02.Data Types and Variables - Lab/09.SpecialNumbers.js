function specialNumbers(num) {
    let status = '';
    let result = 0;
    let numAsString = '';
    for (let i = 1; i <= num; i++) {
        let numAsString = String(i);
        for (let j = 0; j < numAsString.length; j++) {
            result += Number(numAsString[j]);
            if (result  == 5 || result == 7 || result == 11) {
                status = 'True';
            }
            else{
                status = 'False';
            }
        }
        result = 0;
        console.log(`${i} -> ${status}`);
    }
}
specialNumbers(20);
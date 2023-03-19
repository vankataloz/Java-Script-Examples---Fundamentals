function sumDigits(num) {
    let numAsString = String(num);
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let currentChar = Number(numAsString[i]);
        sum+=currentChar;
    }
    console.log(sum);
}
sumDigits(1234);
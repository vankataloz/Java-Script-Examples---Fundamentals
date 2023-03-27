function sumDigits(num) {
  /*  let numAsString = String(num);
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let currentChar = Number(numAsString[i]);
        sum+=currentChar;
    }
    console.log(sum); */
  /*  let sum = 0;
    let numberAsString = num.toString();
    for (const char of numberAsString) {
        sum += Number(char);
    }
    console.log(sum);*/

    let sum = 0;
    let numberAsString = num.toString();
    for(let char of numberAsString){
        sum+=Number(char);
    }
    console.log(sum);
}
sumDigits(1234);
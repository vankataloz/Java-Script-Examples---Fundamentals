/*function solve(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let result = num1 + num2 + num3;
    let type = 'Integer'

    let resultAsString = String(result);
    for (let i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] == '.') {
            type = 'Float'
        }
    }
    console.log(`${result} - ${type}`);
}
solve(1, 2, 3);*/

/*function solve(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let result = num1 + num2 + num3;
    if(typeof result == 'number' && !isNaN(result)){
 
    // check if it is integer
    if (Number.isInteger(result)) {
        console.log(`${result} - Integer`);
    }
    else {
        console.log(`${result} - Float`);
    }
}
}
solve(1,2,3.1);*/
function floarOrInteger(num1, num2, num3){
    let sum = num1+num2+num3;
    let type = 'Integer'
    if(sum %1 !=0){
        type = 'Float';
    }
    console.log(`${sum} - ${type}`);
    /*let roundedSum = Math.round(sum);

    if(sum === roundedSum){
        console.log(`${sum} - Integer`);
    }
    else {
        console.log(`${sum} - Float`);
    }
    */
}
floarOrInteger(2,3,4.1);
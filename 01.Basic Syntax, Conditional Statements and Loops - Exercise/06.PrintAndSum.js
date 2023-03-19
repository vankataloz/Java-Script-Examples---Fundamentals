function printAndSum(numStart, numEnd) {

    numStart = Number(numStart);
    numEnd = Number(numEnd);
    let result = 0;
    let squence = '';
    while (numStart <= numEnd) {
        result += numStart;
        squence += numStart + " ";
        numStart++
    }
    console.log(squence);
    console.log(`Sum: ${result}`);
}
printAndSum(5, 10);
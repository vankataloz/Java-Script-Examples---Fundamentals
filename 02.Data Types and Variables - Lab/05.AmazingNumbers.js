function amazingNumber(num){
    let numAsString = String(num);
    let result = 0;
    let status = '';
    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }
    let resultAsString = String(result);
    for (let i = 0; i < resultAsString.length; i++) {
        if(resultAsString[i] == 9){
            status = 'True';
        }
        else{
            status = 'False'
        }
    }
    console.log(`${num} Amazing? ${status}`);
}
amazingNumber(333)
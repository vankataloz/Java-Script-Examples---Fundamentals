/*function rightPlace(firstString, replaceWith, secondString) {
    let replacedChar = '';
    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] == '_') {
            replacedChar += replaceWith;
        }
        else {
            replacedChar += firstString[i];
        }
    }
    if(replacedChar === secondString){
        console.log('Matched');
    }
    else{
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong');*/

function rightPlace(string1, char, result){
    let res = string1.replace('_', char);
    let output = res === result? "Matched" : "Not Matched";
    console.log(output);
}
rightPlace('Str_ng', 'I', 'String');
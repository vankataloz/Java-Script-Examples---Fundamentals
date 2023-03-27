function lowerOrUpper(char) {
  /*
    let charToUpperCase = char.toUpperCase();
    if(char === charToUpperCase){
        console.log('upper-case');
    }
    else{
        console.log('lower-case');
    }
    */
  /* if(char === char.toUpperCase()){
        console.log('upper-case');
    }
    else{
        console.log('lower-case');
    }
    */
  console.log(char === char.toUpperCase() ? "upper-case" : "lower-case");
}
lowerOrUpper("l");

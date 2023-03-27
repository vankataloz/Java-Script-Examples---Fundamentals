/*function reverseChars(char1, char2,char3){
    /*
    console.log(`${char3} ${char2} ${char1}`);
    
   let array = [char3, char2, char1].join(' ')
   console.log(array);
*/
function reverseChars(...params) {
  console.log(params.reverse().join(" "));
}
reverseChars(1, 2, 3, "L");

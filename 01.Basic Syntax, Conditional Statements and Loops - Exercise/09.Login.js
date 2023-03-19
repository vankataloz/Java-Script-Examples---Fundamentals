// function login(input) {
//     let username = input[0];
//     let count = 0;
//     for (let i = 1; i < input.length; i++) {
//         let password = input[i];
//         password = password.split('');
//         password = password.reverse();
//         password = password.join('');
//         if (password !== username) {
//             if (count < 3) {
//                 console.log('Incorrect password. Try again.');
//             }
//             else {
//                 console.log(`User ${username} blocked!`);
//                 break;
//             }
//         }
//         else {
//             console.log(`User ${username} logged in.`);
//             break;
//         }
//         count++;
//     }
// }
function login(input){
    for(let index = 1;index<input.length; index++){
        if(input[0].split('').reverse().join('') === input[index]){
            console.log(`User ${input[0]} logged in.`);
        }else{
            if(index===input.length - 1){
                console.log(`User ${input[0]} blocked!`);
            }
            else{
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
function sumOfOddNumbers(n){
    let m = 1;
    let sum = 0;
    for(let i = 1;i<=n;m+=2){
        console.log(m);
        sum+=m;
        i++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
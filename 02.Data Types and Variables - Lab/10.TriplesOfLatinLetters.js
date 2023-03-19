function triplesOfLatinLetters(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                let letter = String.fromCharCode(i + 97) + String.fromCharCode(j + 97) + String.fromCharCode(k + 97);
                console.log(letter);
            }
        }
    }
}
triplesOfLatinLetters('2');
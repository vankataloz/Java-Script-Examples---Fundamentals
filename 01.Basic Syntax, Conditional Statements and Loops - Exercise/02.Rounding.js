function rounding(num, red) {
    num = Number(num);
    red = Number(red);
    if (red > 15) {
        red = 15;
    }
    console.log(parseFloat(num.toFixed(red)));
}
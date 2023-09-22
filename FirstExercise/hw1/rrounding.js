function round(num, precision) {
    if (precision > 15) {
        precision = 15;
    }

    num = num.toFixed(precision);
    console.log(parseFloat(num));
}

round(10.5,3)

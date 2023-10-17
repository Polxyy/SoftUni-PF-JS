function pow(n, exponent) {
    let output=1;
    for(let i=0;i<exponent;i++){
        output*=n;
    }
    console.log(output)
}

pow(2,7)
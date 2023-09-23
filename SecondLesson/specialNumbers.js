function specialNumber(n) {
    for (let i = 1; i <= n; i++) {
        let K = i;
        let sum = 0;
        while (K != 0) {
            inc = K % 10;
            sum += inc;
            K -= inc;
            K /= 10;
        }
        if(sum == 5 || sum==7 || sum ==11){
            console.log(`${i} -> True`)
        }
        else{
            console.log(`${i} -> False`)
        }
    }
}

specialNumber(20)
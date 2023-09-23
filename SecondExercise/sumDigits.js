function sumdigits(n){
    let sum=0;
    while(n!=0){
        let i=n%10;
        sum += i;
        n-=i;
        n/=10;
    }
    console.log(sum);
}

sumdigits(245678)
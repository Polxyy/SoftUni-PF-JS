function isPrime(n){
    if(((n+1)%6) ==0 || ((n-1)%6) ==0 || n==2 || n==3){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

isPrime(7)
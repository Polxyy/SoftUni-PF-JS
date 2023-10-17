function factorialDiv(n1,n2){
    function factorial(n){
        let fac=1;
        while(n>0){
            fac*=n;
            n--;
        }
        return fac;
    }

    console.log((factorial(n1)/factorial(n2)).toFixed(2));
}

factorialDiv(6,2)
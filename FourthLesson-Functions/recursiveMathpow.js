function recursive(num,exponent){
    if(exponent==0){
        return 1;
    }else{
        return num* recursive(num,exponent-1);
    }
}

console.log(recursive(2,2));
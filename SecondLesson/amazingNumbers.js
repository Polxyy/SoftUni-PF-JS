function amazing(n){
    let sum=0;
    let asd=n;
    let inc;
    while(n!=0){
        inc=n%10;
        sum+=inc;
        n-=inc;
        n/=10;
        
    }
    console.log(`${asd} Amazing? ${String(sum).includes('9') ?"True":"False"}`)
}

amazing(123355)

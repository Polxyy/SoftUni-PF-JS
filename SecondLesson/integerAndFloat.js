function jigit(num1,num2,num3){
    let sum=num1+num2+num3;
    console.log(`${sum} - ${sum%1==0 ? "Integer":"Float"}`)
}
jigit(9,100,1.1)
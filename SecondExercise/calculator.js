function calculator(number,operator,anotherNumber){
    let calculate ={
        '+' :  (x,y)=>x+y,
        '-' :  (x,y)=>x-y,
        '*' :  (x,y)=>x*y,
        '/' :  (x,y)=>x/y,
    }
    console.log(calculate[operator](number,anotherNumber).toFixed(2))

}

calculeyta(7,'+',11)
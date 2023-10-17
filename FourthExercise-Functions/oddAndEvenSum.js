function oddEven(inp){
    let oddSum=0;
    let evenSum=0;

    while(inp>0){
        let digit=inp%10;
        if(digit%2==0){
            evenSum+=digit;
        }
        else{
            oddSum+=digit;
        }

        inp=Math.floor(inp/10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEven(1000435)
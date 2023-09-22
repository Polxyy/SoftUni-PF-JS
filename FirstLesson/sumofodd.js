function sumofod(n){
    let sum=0;
    for(let i=0;i<n*2;i++){
        if(i%2!=0){
            console.log(i)
            sum+=i}
    }
    console.log(`Sum: ${sum}`)
}

sumofod(5)
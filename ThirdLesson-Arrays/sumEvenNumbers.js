function sumEven(arr){
    arr=arr.map(asd => Number(asd));
    let sum=0;
    for(let num of arr){
        if(num %2 ==0)sum+=num;
    }

    console.log(sum);
}

sumEven(['1','2','3','4','5','6'])
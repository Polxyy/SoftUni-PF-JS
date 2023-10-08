function nonD(arr){
    let newArr=[];
    let biggest=Number.MIN_SAFE_INTEGER;
    
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>biggest){
            newArr.push(arr[i]);
            biggest=arr[i];
        }
    }

    console.log(newArr.join(' '));
}

nonD([4, 1, 3, 7, 2, 8])
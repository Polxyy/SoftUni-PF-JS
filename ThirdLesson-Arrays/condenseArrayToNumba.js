function condese(arr){
    let index=0;
    while(arr.length!=0 && index<arr.length){
        arr[index]=arr[index]+arr[index+1];
        console.log(arr[index]);
        index++;
        arr.pop();
    }
    
    console.log(arr)
}

condese([5,0,4,1,2]);
function magic(arr,s){
    let sum=0;
    let index=[];
    for(let i=0;i<arr.length;i++){
        for(let k=i+1;k<arr.length;k++){
            sum=arr[i]+arr[k];
            if(sum==s){
                index.push(arr[i]);
                index.push(arr[k]);
            }
        }
    }

    for(let i=0;i<index.length;i+=2){
        console.log(`${index[i]} ${index[i+1]}`)
    }

}

magic([14, 20, 60, 13, 7, 19, 8],

    27)
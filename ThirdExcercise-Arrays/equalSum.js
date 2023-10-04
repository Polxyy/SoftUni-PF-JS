function equalsum(arr){
    let leftSum=0;
    let rigthSum=0;
    let index=-1;
    for(let i=0;i<arr.length;i++){
        for(let k=0;k<i;k++){
            leftSum+=arr[k];
        }
        // console.log(`leftSum at arr[${i}==${leftSum}]`)

        for(let j=arr.length-1;j>i;j--){
            rigthSum+=arr[j];
        }
        // console.log(`rigthSum at arr[${i}==${rigthSum}]`)
        if(rigthSum==leftSum){
            index=i;
        }
        leftSum=0;
        rigthSum=0;
    }

    if(index==-1){
        console.log('no');
    }else{
        console.log(index);
    }
}

equalsum([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])
function fnd(n1,n2,n3){
    let nums=[n1,n2,n3]
    let big=n1;
    for(let i=1;i<3;i++){
        if(nums[i]>big){
            big=nums[i]
        }
    }
    console.log(big);
}

fnd(43,43.2,43.1)
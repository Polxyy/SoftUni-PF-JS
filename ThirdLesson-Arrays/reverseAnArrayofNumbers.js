function reverse(n,arr){
    let newArr=[];
    for(let i=0;i<n;i++){
        newArr.push(arr[n-i-1]);
    }
    let output = newArr.join(' ')
    console.log(output)
}

reverse(3, [10, 20, 30, 40, 50])
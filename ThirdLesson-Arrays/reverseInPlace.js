// function reverse(arr){
//     for(let i=0;i<Math.floor(arr.length/2);i++){
//         arr[i]+=arr[arr.length-i-1];
//         arr[arr.length-i-1]=arr[i]-arr[arr.length-i-1];
//         arr[i]-=arr[arr.length-i-1];
//     }
//     console.log(arr);
// }


function reverse(arr){
    let temp;
    for(let i=0;Math.floor(i<arr.length/2);i++){
        temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }

    console.log(arr.join(' '));
}

reverse(['33', '123', '0', 'dd'])
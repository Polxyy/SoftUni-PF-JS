function printNth(arr){
    let step = Number(arr[arr.length-1]);
    output='';
    for(let i=0;i<arr.length-1;i+=step){
       
        output+=arr[i]+' ';}
    
    console.log(output)
}

printNth(['dsa', 'asd', 'test', 'test', '2'])
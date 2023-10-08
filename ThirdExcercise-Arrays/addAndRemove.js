function anr(arr){
    let output=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]=='add'){
            output.push(i+1);
        }else{
            output.pop(i)
        }
    }
    if(output.length>0){
    console.log(output.join(' '))}
    else{
        console.log("Empty")
    }
}

anr(['remove','remove','remove'])
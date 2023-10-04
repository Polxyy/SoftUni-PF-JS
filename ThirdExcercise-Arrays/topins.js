function top(arr){
    let top=[];
    

    for(let i=0;i<arr.length;i++){
        let isTop=true;
        for(let k=0;k<arr.length;k++){
            if(arr[i]<arr[k+i+1]){
                isTop=false;
                break;
            }
        }
        if(isTop && !top.includes(arr[i])){
            top.push(arr[i]);
        }
    }

    console.log(top.join(' '))
}

top([41, 41, 34, 20])
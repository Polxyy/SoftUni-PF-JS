function condense(arr) {
    while(arr.length>1){
        let condensed=[];
        for(let i=0;i<arr.length-1;i++){
            condensed[i]=arr[i]+arr[i+1];
        }
        arr.length=0;
        for(let i=0;i<condensed.length;i++){
            arr[i]=condensed[i];
        }

    }
    console.log(arr)
}

condense([2, 10, 3]);
function n(n1, n2, n3) {
    let arr = [n1, n2, n3];
    let temp;
    let i = 0;

    for(let i=0;i<3;i++){
        for(let k=0;k<3;k++){
            if(arr[k]<arr[k+1]){
                temp=arr[k];
                arr[k]=arr[k+1];
                arr[k+1]=temp
            }
        }
    }

    for (let c = 0; c < 3; c++) {
        console.log(arr[c])
    }
}


n(11, 22, 33)
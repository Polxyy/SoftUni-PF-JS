function triples(n){
    let num=Number(n);
    let alphabet='abcdefghijklmnopqrstuvwxyz';

    for(let i=0;i<n;i++){
        for(let k=0;k<n;k++){
            for(let j=0;j<n;j++){
                console.log(alphabet[i]+alphabet[k]+alphabet[j])
            }
        }
    }
}

triples(3)
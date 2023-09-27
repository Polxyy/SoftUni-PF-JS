function triangle(n){
    for(let row=1;row<=n;row++){
        let curRow='';
        for(let k=1;k<=row;k++){
            curRow+=row + ' ';
        }
        console.log(curRow)

    }
}


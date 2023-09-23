function sm(n){
    let total=0;
    let day=0;
    while(n>=100){
        day++;
        total+=n;
        n-=10;
        if(total>25){
            total-=26;
        }
    }
    if(total>25){
        total-=26;
    }
    console.log(day);
    console.log(total);
}

sm(450)
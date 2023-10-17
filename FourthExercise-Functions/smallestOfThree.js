function small(n1, n2, n3) {
    let smallest =n1;
    if (n1 > n2) {
        if (n2 > n3) {
            smallest = n3;
        }
        else {
            smallest = n2;
        }
    }
    else if(n2>n1){
        if(n1>n3){
            smallest=n3;
        }
        else{
            smallest=n1;
        }
    }

    console.log(smallest);
}


small(5,5,5)
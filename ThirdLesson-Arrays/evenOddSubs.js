function evenodd(arr){
    let sumofeven =0;
    let sumofodd =0;
    for(let el of arr){
        if(el%2==0){
            sumofeven+=el;
        }
        else{
            sumofodd+=el;
        }
    }
    console.log(sumofeven-sumofodd);
}

evenodd([1,2,3,4,5,6])
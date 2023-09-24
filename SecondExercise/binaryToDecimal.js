function btd(bibi){
    let binaryAsString=bibi.split('').reverse().join('');

    let binaryAsnumber=0
    for(let i=0;i<binaryAsString.length;i++){
        if(binaryAsString[i]==1){
            binaryAsnumber+=2**i
        }
    }
    console.log(binaryAsnumber)
}

btd('01010101');
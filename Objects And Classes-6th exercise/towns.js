function towns(arr){
    for(let el of arr){
        let tokens = el.split(' | ');
        let towns=tokens[0];
        let latitudes=Number(tokens[1]).toFixed(2);
        let longitudes=Number(tokens[2]).toFixed(2);
        let obj={
            town:towns,
            latitude:latitudes,
            longitude:longitudes,
        }
        console.log(obj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])
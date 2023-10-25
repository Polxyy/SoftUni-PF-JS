function sorting(arr){
    let newArr=arr.sort((a,b)=>a.length-b.length || a.localeCompare(b));
    for(let el of newArr){
        console.log(el);
    }
}
sorting(['alpha','beta','gamma'])
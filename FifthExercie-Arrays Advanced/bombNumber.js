function bomb(arr, bomb) {
    let bombNumber = bomb[0];
    let casualties = bomb[1];


    while (arr.includes(bombNumber)) {
        //console.log(bombIndex);
        let bombIndex = arr.indexOf(bombNumber);
        if (bombIndex != 0) {
            if(bombIndex-casualties<0)bombIndex=0;
            arr.splice(bombIndex - casualties, casualties * 2 + 1)
        }
        else {
            arr.splice(bombIndex, casualties + 1)
        }
        bombIndex = arr.indexOf(bombNumber);
        //console.log(arr);
    }

    let sum = 0;
    for (let el of arr) {
        sum += el;
    }
    console.log(sum);
}


bomb([1,2,1,1,1],

    [2, 3])
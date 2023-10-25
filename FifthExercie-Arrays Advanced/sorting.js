function sort(arr) {
    //sorting algorithm where the first element is the biggest one,
    //the second element is the smallest one
    //the third is the second biggest one,

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] < arr[k + 1]) {
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }
    let bigArr = arr.map((x) => x);

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] > arr[k + 1]) {
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
        }
    }

    let smallArr = arr.map((x) => x);
    // console.log(arr);
    // console.log(bigArr);
    // console.log(smallArr);
    let newArr = [];
    let bigIndex = 0;
    let smallIndex=0;
    for (let i = 0; i < arr.length; i++) {
        
        if (i % 2 == 0) {
            newArr.push(bigArr[bigIndex]);
            bigIndex++;
        }
        else if(i%2!=0){
            newArr.push(smallArr[smallIndex]);
            smallIndex++
        }
    }
    console.log(newArr.join(' '));
}


sort([34, 2, 32, 45, 690, 6, 32,7, 19, 47]);
//[1, 2, 3, 18, 21, 31, 52, 63, 69, 94]
//[94, 69, 63, 52, 31, 21, 18, 3, 2, 1]
function number(arr, numberFind) {
    let [element, deleteElements, searched] = numberFind;
    let newArr = arr.splice(0, element);
    newArr.splice(0,deleteElements)
    //console.log(newArr);
    let occuranceOfNumber = 0;
    for (let el of newArr) {
        if (el == searched) {
            occuranceOfNumber++
        }
    }

    console.log(`Number ${searched} occurs ${occuranceOfNumber} times.`);
}


number([5, 2, 3, 4, 1, 6],

    [5, 2, 3])
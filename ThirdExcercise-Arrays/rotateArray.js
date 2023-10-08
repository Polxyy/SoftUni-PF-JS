function rotate(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());

    }
    console.log(arr.join(' '))
}

rotate(['1', '2', '3', '4', '2'])
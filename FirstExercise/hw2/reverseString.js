function reverse(s) {
    let arrString = s.split('')
    let temp;


    for (let i = 0; i < arrString.length / 2; i++) {
        temp = arrString[i];
        arrString[i] = arrString[arrString.length - i - 1];
        arrString[arrString.length - i - 1] = temp;
    }

    arrString = arrString.join('')

    console.log(arrString)

}

reverse("Miyrem e pederaz")
function max(arr) {
    let str = '';
    let maxStr = '';

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] === arr[i - 1]) {
            str += " "+String(arr[i]);
        } else {
            str = String(arr[i]);
        }

        if (str.length > maxStr.length) {
            maxStr = str;
        }
    }

    console.log(maxStr) ;
}



max([2, 1, 1, 2, 3, 3,3, 2, 2, 2, 1]);

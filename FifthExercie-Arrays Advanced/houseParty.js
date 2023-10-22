function house(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ')
        let name = tokens[0];
        if (tokens.length < 4) {
            if (!list.includes(name)) {
                list.push(name);
            }
            else{
                console.log(`${name} is already in the list!`)
            }
        }
        else {
            if (!list.includes(name)) {
                console.log(`${name} is not in the list!`)
            }
            else {
                list.splice(list.indexOf(name), 1);
            }
        }
    }
    for(let el of list){
        console.log(el);
    }
}


house(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!']);
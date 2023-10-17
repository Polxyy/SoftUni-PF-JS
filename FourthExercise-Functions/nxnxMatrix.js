function matrix(n) {
    let str = ''
    for (let i = 0; i < n; i++) {
        str += n + ' ';
    }
    for (let i = 0; i < n; i++) {
        console.log(str);
    }
}

matrix(5)
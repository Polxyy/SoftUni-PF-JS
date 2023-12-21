function solve(input) {
    let competitors = (input.shift().split(', ').reduce((obj, name) => (obj[name] = 0, obj), {}));
    let literal = input.shift();
    let namePattern = /(?<Name>[A-Za-z])/g;

    while (literal !== 'end of race') {
        let nameChar = literal.match(namePattern).join('');
        let digit = literal.match(/\d/g);
        let sum = 0;
        digit.forEach(element => {
            sum += Number(element);
        });
        if ((nameChar in competitors)) {
            competitors[nameChar] += sum;
        }
        literal = input.shift();
    }

    let entries = Object.entries(competitors).sort((a, b) =>b[1]-a[1]);
    let places={
        0:'1st',
        1:'2nd',
        2:'3rd'
    }
    for(let i = 0; i < 3; i++) {
        console.log(`${places[i]} place: ${entries[i][0]}`)
    }
}


solve(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',

'Mi*&^%$ch123o!#$%#nne787) ',

'%$$B(*&&)i89ll)*&) ',

'R**(on%^&ald992) ',

'T(*^^%immy77) ',

'Ma10**$#g0g0g0i0e',

'end of race'])
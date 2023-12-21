function solve(input) {
    let pattern = /^(?<symbols>.*)>(?<numbers>[0-9]{3})\|(?<letter>[a-z]{3})\|(?<capital>[A-Z]{3})\|(?<final>[^<>]{3})<\1$/gm;
    let passes = input[0];

    for (let i = 1; i <= passes; i++) {
        let pass = pattern.exec(input[i]);
        if (pass) {
            let { numbers, letter, capital, final } = pass.groups;
            console.log(`Password: ${numbers}${letter}${capital}${final}`);
        } else {
            console.log('Try another password!');
        }
        
    }
}

// Example usage:
solve([2, 'aa>123|abc|XYZ|456<aa', 'asdasd.asd','aaa>123|abc|XYZ|456<aaa','aaa>123|abc|XYZ|456<aaa']);

function solve(input) {
    let pattern = /^(?<symbols>.*)>(?<numbers>[0-9]{3})\|(?<letter>[a-z]{3})\|(?<capital>[A-Z]{3})\|(?<final>[^<>]{3})<\1$/gm
    let passes = input.shift();
    for (let i = 0; i < passes; i++) {
        let asd=input[i];
        let pass = asd.match(pattern)
        console.log();
        if (pass) {
           
            console.log();
        }
        else {
            console.log('Try another password!');
        }
    }
}



solve([4, '>123|abc|XYZ|456<', 'asdasd.asd','aa>123|abc|XYZ|456<aaa','aaa>123|abc|XYZ|456<aaa']);

// Example usage:
solve([2, 'a>123|abc|XYZ|456<aa','asdasd.asd']);


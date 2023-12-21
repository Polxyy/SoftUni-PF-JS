// function solve(input) {
//     let pattern = /(?<symbols>.*)>(?<numbers>[0-9]{3})\|(?<letter>[a-z]{3})\|(?<capital>[A-Z]{3})\|(?<final>[^<>]{3})<\1/gm;
//     let passes = input.shift();
//     for (let i = 0; i <= passes; i++) {
//         let pass = input[i].match(pattern)
//         if (pass) {
//             let passEx = pattern.exec(pass)
//             let { numbers, letter, capital, final } = passEx.groups;
//             console.log(`Password: ${numbers}${letter}${capital}${final}`);
            
//         }
//         else {
//             console.log('Try another password!');
//         }
//     }
// }
function solve(input) {
    let pattern = /^(?<symbols>.*)>(?<numbers>[0-9]{3})\|(?<letter>[a-z]{3})\|(?<capital>[A-Z]{3})\|(?<final>[^<>]{3})<\1$/gm
    let passes = input.shift();
    for (let i = 0; i < passes; i++) {
        let asd=input[i];
        let pass = asd.match(pattern)
        
        if (pass) {
            let passEx = pattern.exec(pass)
            let { numbers, letter, capital, final } = passEx.groups;
            console.log(`Password: ${numbers}${letter}${capital}${final}`);
        }
        else {
            console.log('Try another password!');
        }
    }
}



solve([4, '>123|abc|XYZ|456<', 'asdasd.asd','aa>123|abc|XYZ|456<aaa','aaa>123|abc|XYZ|456<aaa']);

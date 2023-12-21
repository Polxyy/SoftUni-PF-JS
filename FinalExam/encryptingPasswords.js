function solve(input) {
    let pattern = /(?<symbols>.*)>(?<numbers>[0-9]{3})\|(?<letter>[a-z]{3})\|(?<capital>[A-Z]{3})\|(?<final>[^<>]{3})<\1/g;

    for (let i = 1; i <= input[0]; i++) {
        let match = input[i].match(pattern);
        if (!match) {
            console.log('Try another password!');
        }
        else {
            let { numbers, letter, capital, final } = match.groups;
            console.log(`Password: ${numbers}${letter}${capital}${final}`);
            match = pattern.exec(input);
            console.log(index);
        }
    }


    // let {numbers,letter,capital,final} = match.groups;
    // console.log(`Password: ${numbers}${letter}${capital}${final}`);
    // match = pattern.exec(input);
    // console.log(index);


}

solve(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"])
// solve(["5",
// "aa>111|mqu|BAU|mqu<aa",
// "()>111!aaa!AAA!^&*<()",
// "o>088|abc|AAA|***<o",
// "asd>asd|asd|ASD|asd<asd",
// "*>088|zzzz|ZzZ|123<*"]
// );








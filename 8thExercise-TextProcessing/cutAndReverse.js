function solve(input){
    let stringFirst=input.substring(0, input.length/2);
    let stringSecond=input.substring(input.length/2, input.length);

    console.log(stringFirst.split('').reverse().join(''));
    console.log(stringSecond.split('').reverse().join(''));
}


solve('tluciffiDsIsihTgnizamAoSsIsihT')
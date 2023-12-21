function solve(input){
    let answer='';
    let previous='';

    for(let char of input){
        if(char!==previous){
            answer+=char;
        }
        previous=char;
    }
    console.log(answer);
}

solve('aaaaaaabbbbbbbdddddddcccccasd')


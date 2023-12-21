function solve(input){
    let specialWords=[];
    let words=input.split(' ');
    for(let el of words){
        if(el.startsWith('#') && el.length>1){
            specialWords.push(el.substring(1));
        }
    }
   let digits=['0','1','2','3','4','5','6','7','8','9']
    for(let word of specialWords){
        if(!word.split('').some(char=>digits.includes(char))){
        console.log(word);}
    }
}

solve('Nowadays everyone uses # to tag a #special1 word in #socialMedia')


function solve(word, sentence){
    let words=word.split(', ')
    let answer=sentence;
    let replacement;
   
    for(let wrd of words){
        replacement='*'.repeat(wrd.length);
       
        answer=answer.replace(replacement, wrd);
    }
    console.log(answer);
}

solve('great, learning',

'softuni is ***** place for ******** new programming languages')
function asd(input) {
    let words = input.shift().split(' ');
    let occurrences={};
    for (let word of words) {
        occurrences[word] = 0;
    }


    for(let str of input){
        if(words.includes(str)){
            occurrences[str]++;
        }
    }

    let entries=Object.entries(occurrences).sort((a,b)=>b[1]-a[1])


    for(let [key,value] of entries){
        console.log(`${key} - ${value}`);
    }    
}


asd([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence']);



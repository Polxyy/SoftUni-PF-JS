function solve(word,text){
    text=text.toLowerCase().split(' ');
    if(text.includes(word)){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}

solve(' ', 'This is a sample text.');


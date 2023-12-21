let b='qwerty';

for(let i=0; i<b.length;i++){
    let newWord=b.slice(-(b.length-i));
    let firstletter=newWord.charAt(0);
    if(i!=0){
        let finalword=firstletter.repeat(i)+newWord;
        console.log(finalword.split('').join(' '));
    }
    else{
        console.log(newWord.split('').join(' '));
    }
}


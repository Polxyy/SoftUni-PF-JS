function solve(input){
    let result=[];
    let currenword='';

    for(let i=0;i<input.length;i++){
        let char=input[i];

        if(char==char.toUpperCase() && currenword!==''){
            result.push(currenword);
            currenword=char;
        }
        else{
            currenword+=char;
        }
    }

    if(currenword!==''){
        result.push(currenword);
    }

    console.log(result.join(', '));
}

solve('oldTheDoor')
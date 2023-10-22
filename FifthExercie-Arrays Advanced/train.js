function train(input){
    let allWagons=input[0].split(' ').map(Number);
    let maxCapacity=input[1];
    for(let i=2;i<input.length;i++){
        let command=input[i].split(' ');

        if(command[0]=='Add'){
            allWagons.push(Number(command[1]));
        }
        else{
            for(let k=0;k<allWagons.length;k++){
                if((allWagons[k]+Number(command[0]))<=maxCapacity){
                    allWagons[k]+=Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(allWagons.join(' '));
}


train(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])
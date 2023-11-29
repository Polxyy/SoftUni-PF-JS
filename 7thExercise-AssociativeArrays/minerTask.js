function minertask(input){
    let mine={};
    for(let i=0;i<input.length;i+=2){
        let resource=input[i];
        let amount = Number(input[i+1]);
        if(resource in mine){
            mine[resource]+=amount;
        }
        else{
            mine[resource]=amount;
        }
    }

    for(let entry in mine){
        console.log(`${entry} -> ${mine[entry]}`);
    }
}

minertask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])

    minertask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])
function exp(input){
    //first line-amount of xp needed for tank
    //second line- count of battles
    //all other lines: xp gained every battle;
    //every third battle he gets 15% more xp;
    //10%less every fifth battle;
    //stop program when needed xp is collected;

    //Output if he wins:"Player successfully collected his needed experience for ${battleCount} battles"
    //Output if he loses:"Player was not able to collect the needed experience, ${neededExperience} more needed"

    let xpForTank =input.shift();
    // console.log(xpForTank)
    let battleCount= input.shift();
    // console.log(battleCount)

    let collectedXP=0;
    // console.log(input)
    for(let i=1;i<=battleCount;i++){
        let currXp;
        if(i%15==0){
            currXp=(input[i-1]*1.05);
        }else if(i%5==0){
            currXp=(input[i-1]*0.9);
        }
        else if(i%3==0){
            currXp=(input[i-1]*1.15);
        }
        else{
            currXp=input[i-1];
        }
        // console.log(`Iteration num:[${i}]   currXP:  ${currXp}`)
        collectedXP+=currXp;
        if(collectedXP>=xpForTank){
            console.log(`Player successfully collected his needed experience for ${i} battles.`)
            return;
        }
    }
     if(collectedXP<=xpForTank){
        console.log(`Player was not able to collect the needed experience, ${(xpForTank-collectedXP).toFixed(2)} more needed.`);
     }

    // console.log(collectedXP)
}



exp([500,5,50,100,200,100,20])
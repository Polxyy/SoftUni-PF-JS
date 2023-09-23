function gladieytar(loserCount,helmetPrice,swordPrice,shieldPrice,armorPrice){
    let helmets = Math.floor(loserCount/2);
    let sword = Math.floor(loserCount/3);
    let shield=0;
    let armor=0;

    for(let i=loserCount;i>=6;i-=6){
        shield+=1
    }



    if(shield>0){
    armor = Math.floor(shield/2);}
    let total=((helmets*helmetPrice)+(sword*swordPrice)+(shield*shieldPrice)+(armor*armorPrice)).toFixed(2);
    console.log(`Gladiator expenses: ${total} aureus`)
    //console.log(`${helmets}  ${sword}  ${ shield}  ${armor}`)
}

gladieytar(23,12.5,21.5,40,200)
function dungeon(arr){
    let health=100;
    let coins=0;
    let arrAsString=arr.join('');
    arrAsString=arrAsString.split('|');
    for(let i=0;i<arrAsString.length;i++){
        let actionForRoom=arrAsString[i].split(' ');
        let action=actionForRoom[0];
        let value=Number(actionForRoom[1]);
        if(action=='potion'){
            if(health<100){
                health+=value;
                if(health>100){
                    console.log(`You healed for ${(value+100)-health} hp.`);
                    health=100;
                    console.log(`Current health: ${health} hp.`)
                }
                else{
                    console.log(`You healed for ${value} hp.`);
                    console.log(`Current health: ${health} hp.`)
                }
            }
        }

        else if(action=='chest' && health>0) {
            console.log(`You found ${value} coins.`);
            coins+=value;
        }

        else if(action!='chest' && action!='potion'){
            health-=value;
            if(health>0){
                console.log(`You slayed ${action}.`);
            }
            else if(health<=0){
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${i+1}`)
            }
        }
    }

    if(health>0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }




}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
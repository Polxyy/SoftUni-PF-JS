function solve(input){
    let animals={};
    for(let el of input){
        if(el=='EndDay'){
            break;
        }
        let tokens=el.split(': ');
        let action=tokens[0];
        if(action=='Add'){
            let newTokens=tokens[1].split('-');
            let name=newTokens[0];
            let amount=newTokens[1];
            let area=newTokens[2];
            if(name in animals){
                animals[name].value+=Number(amount);
            }
            else{
                animals[name]={value:Number(amount),area:area};
            }
        }
        if(action=='Feed'){
            let newTokens=tokens[1].split('-');
            let name=newTokens[0];
            let amount=newTokens[1];
            if(name in animals){
                if(animals[name].value-Number(amount)<=0){
                   delete animals[name];
                   console.log(`${name} was successfully fed`);
                }
                else{
                    animals[name].value-=Number(amount);
                }
            }
        }
    }

    let entries = Object.entries(animals);
    console.log('Animals:');
    for(let [name,values] of entries){
        console.log(` ${name} -> ${values.value}g`);
    }

    let habitats={};

    for(let el of entries){
        let habitat = el[1].area;
        if(habitat in habitats){
            habitats[habitat]++;
        }
        else{
            habitats[habitat]=1;
        }
    }
    console.log('Areas with hungry animals:');

    for(let [key,value] of Object.entries(habitats)){
        console.log(` ${key}: ${value}`);
    }

}

// solve((["Add: Adam-4500-ByTheCreek",
// "Add: Maya-7600-WaterfallArea",
// "Add: Maya-1230-WaterfallArea",
// "Feed: Adam-4200",
// "EndDay"])
// )

// solve((["Add: Jamie-600-WaterfallArea",
// "Add: Maya-6570-WaterfallArea",
// "Add: Adam-4500-ByTheCreek",
// "Add: Bobbie-6570-WaterfallArea",
// "Feed: Jamie-2000",
// "Feed: Adam-2000",
// "Feed: Adam-2500",
// "EndDay"])
// )

solve((["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])
)
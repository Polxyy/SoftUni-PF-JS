
function cards(input) {
    //personname: cards;
    
    let personCard = {};
    let powerValues={     2:2,    3:3,     4:4,       5:5,      6:6,    7:7,     8:8,     9:9,     10:10,     J:11,      Q:12,    K:13,       A:14
    };

    let typeValues={
        S:4,       H:3,      D:2,      C:1
    }

    for (let el of input) {
        let [playerName, cards] = el.split(': ');

        let cardArr = cards.split(', ')
        let cardSet = new Set(cardArr);
        if (personCard[playerName] == undefined) {
            personCard[playerName] = cardSet;
        }
        else {
            let ogSet = personCard[playerName];
            let mergedSet = new Set([...ogSet, ...cardSet]);
            personCard[playerName] = mergedSet;
        }
    }

    let entries=Object.entries(personCard);

    for(let [name,cards] of entries){
        
        let sum=0;
       for(let card of cards){
        let power=card.slice(0,card.length-1);
        let type=card.slice(card.length-1);
        sum+=(powerValues[power])*(typeValues[type]);
       }
       personCard[name]=sum;
       sum=0;
    }

    for(let entry in personCard){
        console.log(`${entry}: ${personCard[entry]}`);
    }
}

cards([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])


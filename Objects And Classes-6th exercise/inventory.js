function inventory(arr) {
    class Hero {
        constructor(heroName, heroLevel, heroItems) {
            this.Hero = heroName,
            this.level = heroLevel,
            this.items = heroItems
        }
    }

    let heroes = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' / ')
        let heroName = tokens[0];
        let heroLevel = tokens[1];
        let heroItems = tokens[2]
        heroes[i] = new Hero(heroName, heroLevel, heroItems);
    }

    heroes.sort((a, b) => {
        return b.level - a.level
    });

    for (let el of heroes) {
        for (let [key, value] of Object.entries(el)) {
            if (key == 'Hero')
                console.log(`${key}: ${value}`);
            else {
                console.log(`${key} => ${value}`);
            }
        }
    }
}


inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])
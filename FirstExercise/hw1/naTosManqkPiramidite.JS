function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold;

    let floor = 0;

    while (base > 0) {
        let blockArea = base * base;
        let currentStone=((base - 2) * (base - 2))
        floor++;

        if (base <= 2) { // Първо if, който да проверява дали е gold-level. 
            gold = blockArea*increment;//Беше забравил да умножиш по increment.
        } else if (floor % 5 == 0) {
            lapisLazuli += (blockArea - currentStone)*increment;
            stone+=currentStone*increment;
        }
        else {
            stone+=currentStone*increment;
            marble += (blockArea - currentStone)*increment;
        }

        base -= 2;

}

console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${Math.floor((floor) * increment)}`);
}

pyramid(47,5)
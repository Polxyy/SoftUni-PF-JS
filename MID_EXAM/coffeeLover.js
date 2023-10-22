function coffee(input) {
    let coffees = input.shift().split(' ');
    let numOfCommands = Number(input.shift());

    for (let i = 0; i < numOfCommands; i++) {
        let currLine = input.shift().split(' ');
        let command = currLine[0];
        if (currLine.length === 1) {
            coffees.reverse();
        } else if (currLine.length === 2) {
            coffees.push(currLine[1]);
        } else if(currLine.length===3){
            if (command == 'Remove') {
                let where = currLine[1];
                let amount = currLine[2];
                if (where == 'first') {
                    
                    amount = Math.min(amount, coffees.length);
                    coffees.splice(0, amount);
                } else if (where == 'last') {
                    
                    amount = Math.min(amount, coffees.length);
                    coffees.splice(coffees.length - amount, amount);
                }
            }
            else if(command=='Prefer'){
                let firstIndex=currLine[1];
                let secondIndex=currLine[2];
                if(firstIndex>=0 && firstIndex<coffees.length && secondIndex>=0 && secondIndex<coffees.length){
                    [coffees[firstIndex],coffees[secondIndex]]=[coffees[secondIndex],coffees[firstIndex]]
                }
            }
        }
        

    }
    console.log("Coffees:")
    console.log(coffees.join(' '));
}


coffee(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "8", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])

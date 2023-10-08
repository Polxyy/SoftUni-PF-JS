function ladybug(arr) {
    let fieldSize = arr[0];
    let originalIndexes = arr[1].split(' ').map(Number);

    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        if (originalIndexes.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }
    
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        let action = command.split(' ')
        let ladybugLocation = Number(action[0]);
        let direction = action[1];
        let flyLength = Number(action[2]);

        if (!field[ladybugLocation]) {
            continue;
        }

        field[ladybugLocation] = 0;

        if (direction == 'left') {
            finalIndex = ladybugLocation - flyLength;
            if (finalIndex >= 0) {
                while (field[finalIndex] == 1) {
                    finalIndex -= flyLength;
                }
                if (finalIndex >= 0) {
                    field[finalIndex] = 1;
                }
            }
        }else{
            finalIndex=ladybugLocation+flyLength;
            if(finalIndex<field.length){
                while(field[finalIndex]==1){
                    finalIndex+=flyLength;
                }
            }
            if(finalIndex<field.length){
                field[finalIndex]=1;
            }

        }
    }

    console.log(field.join(' '))

}


ladybug([ 5, '3', '3 left 2', '1 left -2'])








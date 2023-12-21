

//Very bad way of completeing a task, but it's 4 AM and I want ot go to sleep so the code is Frankensteined


function solve(input) {
    let furniture = {};
    let furnitureArr = [];
    for (let el of input) {
        if (el == 'Purchase') {
            break;
        }
        let furniturePattern = /(?<=>>)[A-Z]\w+(?=<<)/g;
        let furnitureType = el.match(furniturePattern);
        let pricePattern = /(?<=<<)\d+\.?[0-9]+/g;
        let price = el.match(pricePattern);
        let amountPattern = /(?<=!{1})\d+/g;
        let amount = el.match(amountPattern);
        if (!furnitureType || !amount || !price) {
            continue;
        }
        furnitureArr.push(furnitureType);
        //console.log(`${furnitureType}: ${price} ${amount}`);

        if (furniture[furnitureType] == undefined) {
            furniture[furnitureType] = amount * price;
        } else {
            furniture[furnitureType] += amount * price;
        }
    }

    let values = Object.values(furniture);
    let sum = 0;
    for (let el of values) {
        sum += el;
    }
    
    console.log('Bought furniture:');
   
    for (let i = 0; i < furnitureArr.length; i++) {
        console.log(furnitureArr[i][0]);
    }
    console.log(`Total money spent: ${sum.toFixed(2)}`);
}

solve(['>>Laptop<<312.2323!3',

    '>>TV<<300.21314!5',

    '>Invalid<<!5',

    '>>TV<<300.21314!20',

    '>>Invalid<!5',

    '>>TV<<30.21314!5',

    '>>Invalid<<!!5',

    'Purchase'])
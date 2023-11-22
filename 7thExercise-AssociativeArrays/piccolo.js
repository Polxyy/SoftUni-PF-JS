// function car(input) {
//     let parkinglot = {};

//     for (let el of input) {
//         el = el.split(', ');
//         let action = el[0];
//         let carNumber = el[1];
//         if (action == 'IN') {
//             parkinglot[carNumber] = 1;
//         }
//         else {
//             delete parkinglot[carNumber];
//         }
//     }

//     const entries = Object.entries(parkinglot).sort((a, b) => (
//         a[0].localeCompare(b[0])
//     ));

//     if (entries.length > 0) {
//         for (let [num] of entries) {
//             console.log(num);
//         }
//     }else{
//         console.log('Parking Lot is Empty');
//     }

// }

// car(['IN, CA2844AA',

// 'IN, CA1234TA',

// 'OUT, CA2844AA',

// 'IN, CA9999TT',

// 'IN, CA2866HI',

// 'OUT, CA1234TA',

// 'IN, CA2844AA',

// 'OUT, CA2866HI',

// 'IN, CA9876HH',

// 'IN, A2822UU',]);

function manageParkingLot(entries) {
    let parkingLot = new Set();

    for(let entry of entries) {
        let [direction, carNumber] = entry.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            if (parkingLot.has(carNumber)) {
                parkingLot.delete(carNumber);
            }
        }
    };

    console.log(parkingLot);

    let sortedCars = [...parkingLot].sort();
    console.log(sortedCars);
    if (sortedCars.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        sortedCars.forEach(car => {
            console.log(car);
        });
    }
}

// Input
let entries = [
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
];

// Output
manageParkingLot(entries);

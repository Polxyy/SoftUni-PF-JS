// function party(input) {
//     let normalGuests = new Set();
//     let vipGuests = new Set();
//     let guests = new Set();
//     let party = false;

//     for (let string of input) {
//         if (string == 'PARTY') {
//             party = true;
//         }
//         if (!party) {
//             if (!isNaN(parseInt(string.slice(0, 1)))) {
//                 vipGuests.add(string);
//             }
//             else {
//                 normalGuests.add(string);
//             }
//         }
//         else if (string !== 'PARTY') {
//             guests.add(string);
//         }
//     }

//     console.log(normalGuests.size + vipGuests.size - guests.size);

//     for(let el of vipGuests){
//         if (!guests.has(el)){
//             console.log(el);
//         }
//     }
//     for(let el of normalGuests){
//         if (!guests.has(el)){
//             console.log(el);
//         }
//     }
// }


function party(input) {
    let guestList = {
        vip: [],
        normal: [],

    };
    let isparty = false;

    for (let el of input) {
        if (el == 'PARTY') {
            isparty = true;
        }
        if (!isNaN(parseInt(el.slice(0, 1))) && !isparty) {
            guestList.vip.push(el);
        }
        else if (!isparty) {
            guestList.normal.push(el);
        }
        else if (el !== 'PARTY') {
            if (guestList.vip.includes(el)) {
                let index = guestList.vip.indexOf(el);
                guestList.vip.splice(index, 1);
            }
            else {
                let index = guestList.normal.indexOf(el);
                guestList.normal.splice(index, 1);
            }
        };
    }

    console.log(guestList.normal.length + guestList.vip.length);
    for (let el of guestList.vip) {
        console.log(el);
    }
    for (let el of guestList.normal) {
        console.log(el);
    }

}


party(['7IK9Yo0h',
    '9NoBUajQ',
    '9NoBUajQ',

    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])

// party(['m8rfQBvl', 'fc1oZCE0',
//     'UgffRkOn', '7ugX7bm0',
//     '9CQBGUeJ', '2FQZT3uC'
//     , 'dziNz78I', 'mdSGyQCJ',
//     'LjcVpmDL', 'fPXNHpm1',
//     'HTTbwRmM', 'B5yTkMQi',
//     '8N0FThqG', 'xys2FYzn',
//     'MDzcM9ZK', 'PARTY',
//     '2FQZT3uC', 'dziNz78I',
//     'mdSGyQCJ', 'LjcVpmDL',
//     'fPXNHpm1', 'HTTbwRmM',
//     'B5yTkMQi', '8N0FThqG',
//     'm8rfQBvl', 'fc1oZCE0',
//     'UgffRkOn', '7ugX7bm0',
//     '9CQBGUeJ'])
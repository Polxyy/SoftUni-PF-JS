function solve(input) {
    let text = input.shift();
    let order = input.shift();
    while (order !== "Finish") {
        let command = order.split(" ")[0];
        if (command == 'Replace') {
            let charToReplace = order.split(" ")[1];
            let replacementChar = order.split(" ")[2]

            text = text.replace(new RegExp(charToReplace, 'g'), replacementChar);
            console.log(text);
        }
        else if (command == 'Cut') {
            let startIndex = order.split(" ")[1];
            let endIndex = order.split(" ")[2];
            if (!(startIndex < 0) && !(startIndex > text.length) && !(endIndex > text.length) && !(endIndex < 0)) {
                text = text.substring(0, startIndex) + text.substring(endIndex);
                console.log(text);
            } else {
                console.log("Invalid indices!");
                
            }
        }
        else if (command == 'Make') {
            let makeCase = order.split(" ")[1];
            if (makeCase == 'Upper') {
                text = text.toUpperCase();
            }
            else if (makeCase == 'Lower') {
                text = text.toLowerCase();
            }
            console.log(text);
        }
        else if (command == 'Check') {
            let word = order.split(" ")[1];
            if (text.includes(word)) {
                console.log(`Message contains ${word}`);
            }
            else {
                console.log(`Message doesn't contain ${word}`);
            }
        }
        else if (command == 'Sum') {
            let startIndex = order.split(" ")[1];
            let endIndex = order.split(" ")[2];
            if (startIndex < 0 || startIndex > text.length || endIndex > text.length || endIndex < 0) {
                console.log("Invalid indices!");
                break;
            }
            let sum = 0;
            for (let i = startIndex; i <= endIndex; i++) {
                sum += (text.charCodeAt(i));
            }
            console.log(sum);
        }
        order = input.shift();
    }
}

solve((["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])
)

// solve((["HappyNameDay",
//     "Replace p r",
//     "Make Lower",
//     "Cut 2 23",
//     "Sum -2 2",
//     "Finish"])
// )
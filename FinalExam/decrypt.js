function solve(input) {
    let text = input.shift();
    let order = input.shift();

    while (order !== "Finish") {
        let [command, ...params] = order.split(" ");

        if (command === 'Replace') {
            let [charToReplace, replacementChar] = params;

            text = text.replace(new RegExp(charToReplace, 'g'), replacementChar);
            console.log(text);
        } else if (command === 'Cut') {
            let [startIndex, endIndex] = params.map(Number);
            if (!(startIndex < 0) && !(startIndex > text.length) && !(endIndex > text.length) && !(endIndex < 0)) {

                text = text.substring(0, startIndex) + text.substring(endIndex + 1);
                console.log(text);
            } else {
                console.log("Invalid indices!");
            }
        } else if (command === 'Make') {
            let makeCase = params[0];
            text = (makeCase === 'Upper') ? text.toUpperCase() : text.toLowerCase();
            console.log(text);
        } else if (command == 'Check') {
            let word = order.split(" ")[1];
            if (text.includes(word)) {
                console.log(`Message contains ${word}`);
            }
            else {
                console.log(`Message doesn't contain ${word}`);
            }
        }
        else if (command === 'Sum') {
            let [startIndex, endIndex] = params.map(Number);
            if (startIndex < 0 || startIndex > text.length || endIndex > text.length || endIndex < 0) {
                console.log("Invalid indices!");
            }
            else{
                let sum = 0;
            for (let i = startIndex; i <= endIndex; i++) {
                sum += text.charCodeAt(i);
            }
            console.log(sum);
            }
            
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
);

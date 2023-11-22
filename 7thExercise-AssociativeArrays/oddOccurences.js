// function odd(input){
//     let inputArr = input.split(' ');

//     // console.log(inputArr);

//     let occurrences={};

//     for(let el of inputArr){
//         el=el.toLowerCase();
//         if(el in occurrences){
//             occurrences[el]++;
//         }else{
//             occurrences[el]=1;
//         }
//     }

//     console.log(occurrences);
//     // let outputString='';
//     // for(let [key,value] of Object.entries(occurrences)){
//     //     if(value%2!=0){
//     //         outputString+=key+' ';
//     //     }
//     // }

//     // console.log(outputString);

// }
function odd(input) {
    let inputArr = input.split(' ');

    let occurrences = {};
    let order = []; 
    for (let el of inputArr) {
        el = el.toLowerCase();
        if (el in occurrences) {
            occurrences[el]++;
        } else {
            occurrences[el] = 1;
            order.push(el); 
        }
    }



    let outputString = '';
    for (let key of order) {
        if (occurrences[key] % 2 !== 0) {
            outputString += key + ' ';
        }
    }

    console.log(outputString);
}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');




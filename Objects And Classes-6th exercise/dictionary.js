function dict(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = JSON.parse(arr[i])
    }

    for (let el of arr) {
        for (let [key, value] of Object.entries(el)) {
            let term = key;
            let definition = value;
            let items = {
                Term: term,
                Definition: definition
            }

            let item = newArr.find((item) => item.Term == term)
            if (item) {
                item.Definition = definition;
                
            }
            else {
                newArr.push(items);
                
            }
        }
    }

    newArr.sort((a, b) => {
        return a.Term.localeCompare(b.Term);
    })

    for(let el of newArr){
         console.log(`Term: ${el.Term} => Definition: ${el.Definition}`);
    }
}






dict([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',

    '{"Bus":"A large motor vehicle  carrying passengers by road,  typically one serving the public  on a fixed route and for a  fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrumentfor converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}',
    
    '{"Coffee":"A cold food aple!#$!$ seeds (coffee beans) of atropical shrub."}'

])
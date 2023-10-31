function store(arr1,arr2){
    let currentStock=[];

    for(let i=0;i<arr2.length;i+=2){
        if(!arr1.includes(arr2[i])){
            arr1.push(arr2[i]);
            arr1.push(arr2[i+1]);
        }
        else{
            let index= arr1.indexOf(arr2[i])+1;
            arr1[index]=Number(arr1[index]);
            arr1[index]+=Number(arr2[i+1]);
        }
    }
    
    for(let i=0;i<arr1.length-1;i+=2){
        let inputName=arr1[i];
        let inputQuantity=Number(arr1[i+1]);
        let product={
            name:inputName,
            quantity:inputQuantity
        }
        currentStock.push(product)
    }
    

    for(let el of currentStock){
        console.log(`${el.name} -> ${el.quantity}`);
    }
}

store([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])
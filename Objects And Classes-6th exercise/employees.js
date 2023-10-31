function employee(input){
    let employees=[];
    for(let nameInput of input){
        let employee={
            name:nameInput,
            Personal_Number:nameInput.length,
        }
        employees.push(employee);
    }

    for(let emp of employees){
        console.log(`Name: ${emp.name} -- Personal Number: ${emp.Personal_Number}`);
    }
}


employee([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])
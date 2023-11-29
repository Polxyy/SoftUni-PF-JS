function compfunc(input){
    let companies = {};
    for(let el of input){
        let company=el.split(' -> ')[0];
        let id = el.split(' -> ')[1];
        if(company in companies){
            companies[company].push(id);
        }
        else{
            companies[company]=[id];
        }
    }
   let entries = Object.entries(companies).sort((a,b) => a[0].localeCompare(b[0]));
   for(let [company, ids] of entries){
    let idSet=new Set(ids);
    console.log(company);
    for(let id of idSet){
        console.log(`-- ${id}`);
    }
   } 
}

compfunc([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])
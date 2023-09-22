function asd(d1,d2,d3){
    let date =new Date(d1, d2-1, d3+1)

    //date = String(date).split(' ')
    let month = date.getMonth()+1;
    let day=date.getDate();
    let year=date.getFullYear();

    console.log(`${year}-${month}-${day}`);
}

asd(2016,9,30)
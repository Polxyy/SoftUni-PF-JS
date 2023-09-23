function cent(century){
    let years = century*100;
    let days =Math.trunc(years*365.2422);
    let hours = days*24;
    let minutes = hours* 60;
    console.log(`${century} centuries = ${years} years = ${Math.trunc(days)} days = ${Math.trunc(hours)} hours = ${Math.trunc(minutes)} minutes`)
}


cent(5)
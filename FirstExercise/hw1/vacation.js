function vac(count,type,day){
    let pricePerPerson;
    let total;
    if(type =="Students"){
        switch(day){
            case "Friday":pricePerPerson=8.45;break;
            case "Saturday":pricePerPerson=9.8;break;
            case "Sunday":pricePerPerson=10.46;break;
        }
        total=pricePerPerson*count
        if(count>=30)total*=0.85;
    }
    else if(type=="Business"){
        switch(day){
            case "Friday":pricePerPerson=10.9;break;
            case "Saturday":pricePerPerson=15.60;break;
            case "Sunday":pricePerPerson=16;break;
        }
        total=pricePerPerson*count
        if(count>=100)total -= pricePerPerson*10;
    }
    else{
        switch(day){
            case "Friday":pricePerPerson=15;break;
            case "Saturday":pricePerPerson=20;break;
            case "Sunday":pricePerPerson=22.50;break;
        }
        total=pricePerPerson*count;
        if(count>=10 && count<=20)total *=0.95
    }
    
    console.log(`Total price: ${total.toFixed(2)}`);

}
vac(40,"Regular","Saturday")
function myfunc(day, age){
    let d = day; let a = age;
    if(a < 0 || a > 122){
        console.log("Error!");
    }else if(age <= 18){
        switch(d){
            case "Weekday":console.log("12$");break;
            case "Weekend":console.log("15$");break;
            case "Holiday":console.log("5$");break;
        }
    }else if(age <= 64){
        switch(d){
            case "Weekday":console.log("18$");break;
            case "Weekend":console.log("20$");break;
            case "Holiday":console.log("12$");break;
        }
    }else{
        switch(d){
            case "Weekday":console.log("12$");break;
            case "Weekend":console.log("15$");break;
            case "Holiday":console.log("10$");break;
        }
    }
}

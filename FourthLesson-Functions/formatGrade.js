function format(grade){
    let output='';
    if(grade<3){
        output="Fail";
    }
    else if(grade<3.5){
        output="Poor";
    }else if(grade<4.5){
        output="Good";
    }else if(grade<5.5){
        output="Very good";
    }else{
        output="Excellent";
    }

    console.log(`${output} (${grade>=3 ? grade.toFixed(2) : 2})`)

}


format(2.99)
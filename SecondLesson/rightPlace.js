function rightPlace(str1,c1,str2){
    let answer='';
    for(let i=0;i<str1.length;i++){
        if(str1[i]=='_'){
            answer+=c1;
        }
        else{
            answer+=str1[i];
        }
    }

    if(answer==str2){
        console.log("Matched");

    }
    else{
        console.log("Not Matched");
    }
}

rightPlace("Str_ng","i","String")
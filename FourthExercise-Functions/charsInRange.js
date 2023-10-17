function ascii(c1,c2){
    let start;
    let end;
    if(c1.charCodeAt()>c2.charCodeAt()){
        start=c2.charCodeAt();
        end=c1.charCodeAt();
    }
    else{
        start=c1.charCodeAt();
        end=c2.charCodeAt();
    }
    let answ='';
    for(let i=start+1;i<end;i++){
        answ+=(String.fromCharCode(i)+' ');
    }

    console.log(answ)
}


ascii('a','d')
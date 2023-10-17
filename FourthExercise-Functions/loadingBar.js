function loading(n){
    if(n==100){
        console.log('100% Complete!');
    }
    else{
        let bar='';
        for(let i=10;i<=100;i+=10){
            if(i<=n){
                bar+='%';
            }
            else{
                bar+='.'
            }
        }
        console.log(`${n}% [${bar}]`);
        console.log('Still loading...');
    }
}

loading(100)
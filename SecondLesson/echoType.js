function asd(param){
    if(typeof(param)=="string" || typeof(param)=="number"){
        console.log(typeof(param));
        console.log(param);
    }
    else{
        console.log(typeof(param));
        console.log("Parameter is not suitable for printing");
    }
}

asd(null)
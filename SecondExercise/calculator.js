function calculeyta(numba,opereyta,anadaNumba){
    let calculate ={
        '+' : function (x,y){return x+y},
        '-' : function (x,y){return x-y},
        '*' : function (x,y){return x*y},
        '/' : function (x,y){return x/y},
    }
    console.log(calculate[opereyta](numba,anadaNumba).toFixed(2))

}

calculeyta(7,'*',11)
function fol(rad,height){
    let p=Math.PI;
    let s = Math.sqrt(rad**2 + height**2)
    let L = p*rad*s
    let B = p*(rad**2)
    let V = (p*(rad**2)*height)/3;
    let A = L + B;


    console.log(`volume = ${V.toFixed(4)}`);
    console.log(`area = ${A.toFixed(4)}`);
}

fol(3,5)
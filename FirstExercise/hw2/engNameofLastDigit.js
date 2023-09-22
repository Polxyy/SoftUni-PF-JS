function fasd(n){
    let names =["zero","one","two","three","four","five","six","seven","eight","nine"];
    let numberAsString=String(n);
    let index=numberAsString.length-1
    let arrayString = numberAsString.split('');
    console.log(names[arrayString[index]])
}

fasd(1204579);


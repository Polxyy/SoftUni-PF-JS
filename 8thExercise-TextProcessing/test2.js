let asd ={
    ridvan:{
        mad:55
    }
};
namee='ridvan';
if(asd.hasOwnProperty(namee)==false){
    asd[namee]={};
   
}
let tech='wild'

let a=asd[namee];

if(a.hasOwnProperty(tech)==false){
    a[tech]=87;
}

console.log(asd);
console.log(a);
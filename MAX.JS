var jamatul=450;
var bipu=4400;
var sabuj=2000;
if(jamatul>bipu){
    if(jamatul>sabuj){
        console.log("Jamatul is bigger");
    }
    else{
        console.log("Sabuj is bigger");
    }
   
}
else if(bipu>sabuj)
{
    console.log("bipu is bigger");
}
else{
    console.log("Sabuj is bigger");
}

var maxx=Math.max(jamatul,bipu,sabuj);
console.log(maxx);
    
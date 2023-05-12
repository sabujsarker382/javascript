

function sumation(number){ 
    var maax=0;

for(var i=0;i<number.length;i++){
   maax=maax+number[i];
    
}
return maax;

}
var number=[23,44,55,33,44,22,77,99,45];
console.log(sumation(number));
var x=[55,33,44,22,77,99];
console.log(sumation(x));

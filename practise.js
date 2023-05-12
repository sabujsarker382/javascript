// var ikram=2004;
// var sabuj =2002;
// var sadi=10000;
// var maxx=Math.max(ikram,sabuj,sadi);
// console.log(maxx);
// if(ikram>sabuj){
//     if(ikram>sadi){
//         console.log("Ikram in greter");
//     }
//     else{
//         console.log("Sadi is Greateer");
//     }
// }
// else if(sabuj>sadi){
//     console.log("Sabuj is greatre");
// }
// else{
//     console.log ("Sadi IS greater");
// }

function Max_value(number){
    var maxx=number[0];
    for(var i=0;i<number.length;i++){
        if(maxx<number[i]){
            maxx=number[i];
        }
    }
    return maxx;
}
function sum_value(number){
    var sum=0;
    for(var i=0;i<number.length;i++){
       sum=sum+number[i];
    }
    return sum;
}





var arr=[12,34,66,77,44,67,23];
console.log(sum_value(arr));
var brr=[12,34,1000,66,77,44,67,23];
console.log(sum_value(brr));
console.log(Max_value(brr));

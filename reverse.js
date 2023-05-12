function reverseString(str){
    var str;
    var reverseS="";
    for(var i=0;i<str.length;i++){
        reverseS=str[i]+reverseS;
    }
    return reverseS;


}
var sabuj="I am a good boy";
console.log(reverseString(sabuj));
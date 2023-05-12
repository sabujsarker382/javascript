var speech="i am a good person. i am from bangladesh";
var count=0;
for(var i=0;i<speech.length;i++){
    var char=speech[i]
    if(char==' ' && speech[i-1]!=' '){
        count++;
    }
}
console.log("THIS is ouput",count);
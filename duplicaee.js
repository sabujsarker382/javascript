var arr=[12,44,55,33,55,"sabuj","swarna","riya","sabuj"];
var unique=[];
for(var i=0;i<arr.length;i++){
    var element=arr[i];
    var index=unique.indexOf(element);
    if(index==-1){
        unique.push(element);
    }
}

console.log("First",unique);
var count=0;
var start=false;
for(var i=0;i<arr.length;i++){
    for(var j=0;i<unique.length;j++){
        if(arr[i]==unique[j]){
            start=true;
        }
    }
    count++;
    if(count==1 && start==false){
        unique.push(arr[i]);
    }
    count=0;
    start=false;
}
console.log("@nd Step: ",unique);
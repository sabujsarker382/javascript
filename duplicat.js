var arr=[2,4,5,6,4,6,4,3,8,7,9,8,7];
var unique=[];
var count=0;
var start=false;
for(var i=0;i<arr.length;i++){
    for(var j=0;j<unique.length;j++){
        if(arr[i]==unique[j]){
            start=true;
        }
    }
    count++;
    if(count==1 && start==false){
        unique.push(arr[i]);
    }
    start=false;
    count=0;
}
console.log(unique);

for(var i=0;i<arr.length;i++){
    var element=arr[i];
    var index=unique.indexOf(element);
    if(index==-1){
        unique.push(element);
    }
}
console.log("The unique array is: ",unique);
console.log(unique.sort());
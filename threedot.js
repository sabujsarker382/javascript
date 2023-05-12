const ages=[12,33,42,33,11];
const ages2=[22,33];
const ages3=[44,12];
const allages=ages.concat(ages2).concat([100]).concat(ages3);
const allages2=[...ages,...ages2,4,...ages3]
console.log(allages);
console.log(allages2);
const asa=400;
const bas=300;
const caca=599;
const rest=Math.max(asa,bas,caca);
console.log(rest);
const taka=[2323,4443,23,22234];
const tak=Math.max(...taka);
console.log(tak);
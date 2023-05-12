class parent{
    constructor(){
        this.fatherName="Schwerxnegger";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name=name;
    }
}
const baby=new child("Sabuj");
console.log(baby); 
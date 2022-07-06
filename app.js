'use strict';

var allInformation=[];
function Empinformation(Employee_id,full_name,department,level,image,salary){
    this.Employee_id=Employee_id;
    this.full_name=full_name;
    this.department=department;
    this.level=level;
    this.image=image;
    this.salary=salary;
    allInformation.push(this);
}

Empinformation.prototype.printInformation =function(){
    if (this.level === "Senior"){
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500)
    } else if (this.level === "Mid Senior"){
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000)
    } else {
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500)
    }
    console.log(`${this.full_name} have a ${this.salary} salary amount`);
    return `${this.full_name} have a ${this.salary} salary amount`;
}

const emp1=new Empinformation(1000,"Ghazi Samer","Administration","Senior","",0);
const emp2=new Empinformation(1001,"Lana Ali","Finance","Senior","",0);
const emp3=new Empinformation(1002,"Tamara Ayyoub","Marketing","Senior","",0);
const emp4=new Empinformation(1003,"Safi Waleed","Administration","Mid Senior","",0);
const emp5=new Empinformation(1004,"Omar Zaid","Development","Senior","",0);
const emp6=new Empinformation(1005,"Rana Saleh","Development","Junior","",0);
const emp7=new Empinformation(1005,"Hadi Ahmad","Finance","Mid Senior","",0);


document.write(`<h1>${emp1.printInformation()}</h1><br>`)
document.write(`<h1>${emp2.printInformation()}</h1><br>`)
document.write(`<h1>${emp3.printInformation()}</h1><br>`)
document.write(`<h1>${emp4.printInformation()}</h1><br>`)
document.write(`<h1>${emp5.printInformation()}</h1><br>`)
document.write(`<h1>${emp6.printInformation()}</h1><br>`)
document.write(`<h1>${emp7.printInformation()}</h1><br>`)

export class Employee{
    empID:number =123;
    empName:string="Sujani";
    empSal:number=25000;

    constructor(i:number,n:string,s:number){
        this.empID=i;
        this.empName=n;
        this.empSal=s;
    }
    display(){
        console.log(this.empID);
        console.log(this.empName);
        console.log(this.empSal);

    }
}
var e1=new Employee(124,"lucky",345);
e1.display();
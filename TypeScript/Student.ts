export class Student{
    stdID:number =123;
    stdName:string="Sujani";
    

    constructor(i:number,n:string){
        this.stdID=i;
        this.stdName=n;
        
    }
    display(){
        console.log(this.stdID);
        console.log(this.stdName);
        

    }
}
var s1=new Student(124,"lucky");
s1.display();
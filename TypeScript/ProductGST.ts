export class ProductGST{
    Pid:number;
      Pname:string;
       Price:number;
        gst:number;
         display(){
             console.log(this.Pid);
             console.log(this.Pname);
             console.log(this.Price);
             console.log(this.Price+this.gst);
             }}
             var g1 = new ProductGST();
             g1.Pid=123;
             g1.Pname="Harshini";
             g1.Price=12300;
             g1.gst=200;
             g1.display();

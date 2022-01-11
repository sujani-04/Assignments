import { PersonInterface } from "./PersonInterface";
class PersonDetail implements PersonInterface
{
    first: string;
    last: string;
    getFullname():string
    {
      return this.first+this.last;
    }
}
var p1= new PersonDetail();
p1.first="Sujani"
p1.last="Donepudi"
console.log(p1.getFullname());
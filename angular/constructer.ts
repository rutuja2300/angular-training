class Namaste{
    fname:string;
    lname:string;
    constructor(fname:string,lname:string){
        this.fname=fname;
        this.lname=lname;
    }
    fullName():string{
       return this.fname+ "" + this.lname; 
    }
    display():void{
        console.log("Hello" + this.fullName());
        
    }
   
}
var  p1:Namaste = new Namaste("Sachin","Kohli")
var  p2:Namaste = new Namaste("Sachin","abc")
var  p3:Namaste = new Namaste("Sachin","efc")
var  p4:Namaste = new Namaste("Sachin","rst")

var abc:Namaste[]=[p1,p2,p3,p4];
p1.display()

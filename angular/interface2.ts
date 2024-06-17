interface saysHi{
    sayhi: Function;
  };
  class Joker implements saysHi{ 
     constructor(private fname:string,private lname:string) {
      }  
      fullName():string{
          return this.fname+" "+this.lname
      }
     disp():void { 
        console.log("hi "+this.fullName()) 
     } 
     // sayhi():void{
     // console.log("hi all");
     // }
  }
  
  let p1=new Joker("Sachin","Tendulkar")
  p1.disp();
  
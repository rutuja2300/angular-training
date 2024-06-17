// function sayHi(id:number,fname:string,lname?:string):void {
//     console.log("ID",id);
//     console.log("First Name",fname);
//     if (lname!=undefined) {
//     console.log("Last Name", lname);
    
//     }
    
// }
// sayHi(1,"Rutuja");
// sayHi(2,"Rutuja","Bamgude")

function addNumbers(...nums:number[]) {
    var i;
    var sum:number=0;
    for (let i = 0; i < nums.length; i++) {
       sum = sum+nums[i]
        
    }
    console.log("sum of the number");
    
}
addNumbers(1,2,3,5)
addNumbers(21,24,34,5)
// function sayHi(id:number,fname:string,lname?:string):void {
//     console.log("ID",id);
//     console.log("First Name",fname);
//     if (lname!=undefined) {
//     console.log("Last Name", lname);
//     }
// }
// sayHi(1,"Rutuja");
// sayHi(2,"Rutuja","Bamgude")
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (var i_1 = 0; i_1 < nums.length; i_1++) {
        sum = sum + nums[i_1];
    }
    console.log("sum of the number");
}
addNumbers(1, 2, 3, 5);
addNumbers(21, 24, 34, 5);

;
var Joker = /** @class */ (function () {
    function Joker(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    Joker.prototype.fullName = function () {
        return this.fname + " " + this.lname;
    };
    Joker.prototype.disp = function () {
        console.log("hi " + this.fullName());
    };
    return Joker;
}());
var p1 = new Joker("Sachin", "Tendulkar");
p1.disp();

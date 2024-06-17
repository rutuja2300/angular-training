var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello Rutuja");
    };
    return Greeting;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.display = function () {
        console.log("Hello Rutuja");
    };
    return Person;
}());
var obj = new Greeting();
obj.greet();

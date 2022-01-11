"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(i, n) {
        this.stdID = 123;
        this.stdName = "Sujani";
        this.stdID = i;
        this.stdName = n;
    }
    Student.prototype.display = function () {
        console.log(this.stdID);
        console.log(this.stdName);
    };
    return Student;
}());
exports.Student = Student;
var s1 = new Student(124, "lucky");
s1.display();

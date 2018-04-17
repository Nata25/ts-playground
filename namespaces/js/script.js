var City;
(function (City) {
    City.created = 500;
})(City || (City = {}));
/// <reference path="City_extended.ts" />
var City;
/// <reference path="City_extended.ts" />
(function (City) {
    City.name = 'Kyiv';
    class CityClass {
        constructor(name) {
            this.name = name;
            this.name = name;
        }
    }
    City.CityClass = CityClass;
})(City || (City = {}));
var Students;
(function (Students) {
    const ann = {
        name: 'Ann',
        age: 30
    };
    const andrew = {
        name: 'Andrew',
        age: 25
    };
    const mike = {
        name: 'Mike',
        age: 41
    };
    const students = [ann, andrew, mike];
    function findStudent(name) {
        const student = students.find(function (student) {
            return student.name.toLocaleLowerCase() === name.toLocaleLowerCase();
        });
        return student;
    }
    Students.findStudent = findStudent;
})(Students || (Students = {}));
console.log("Namespaces");
console.log(Students.findStudent('mike'));
console.log(City);

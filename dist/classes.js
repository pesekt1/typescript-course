"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, "Alex", 100);
account.deposit(50);
console.log(account.balance);
if (account instanceof Account)
    console.log("it is Account");
class AccountBetter {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
class AccountGetSet {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
}
let newAccout = new AccountGetSet(1, "Alex", 100);
console.log(newAccout.balance);
newAccout.balance = 200;
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Alex";
seats["B2"] = "Bob";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return this.firstname + " " + this.lastname;
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(studentId, firstname, lastname) {
        super(firstname, lastname);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking test");
    }
}
let student = new Student(1, "Alex", "Smith");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([new Student(1, "Alex", "Smith"), new Teacher("John", "Smith")]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("rendering circle");
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log("addEvent");
    }
    removeEvent() {
        console.log("remove event");
    }
}
let person = { name: "Bob" };
let person2 = { name: "Bob" };
//# sourceMappingURL=classes.js.map
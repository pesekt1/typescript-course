//classes-------------------------
class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}

//objects------------------------
let account = new Account(1, "Alex", 100);
account.deposit(50);
console.log(account.balance);

if (account instanceof Account) console.log("it is Account");

//access control keywords------------------------
//public
//private
//protected

//parameter properties------------------------
class AccountBetter {
  constructor(
    public readonly id: number,
    public owner: string,
    private balance: number
  ) {}

  getBalance(): number {
    return this.balance;
  }
}

//getters setters------------------------
class AccountGetSet {
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }
}

let newAccout = new AccountGetSet(1, "Alex", 100);
console.log(newAccout.balance); //using a getter
newAccout.balance = 200; //using a setter

//index signatures------------------------
class SeatAssignment {
  [seatNumber: string]: string; //index signature property
}

let seats = new SeatAssignment();
seats.A1 = "Alex";
seats["B2"] = "Bob";

//static members------------------------
// class Ride {
//   activeRides: number = 0;

//   start() {
//     this.activeRides++;
//   }
//   stop() {
//     this.activeRides--;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(ride1.activeRides);
// console.log(ride2.activeRides);

class Ride {
  static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

//inheritance------------------------
class Person {
  constructor(public firstname: string, public lastname: string) {}

  get fullName(): string {
    return this.firstname + " " + this.lastname;
  }

  walk() {
    console.log("walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstname: string, lastname: string) {
    super(firstname, lastname);
  }

  takeTest() {
    console.log("taking test");
  }
}

let student = new Student(1, "Alex", "Smith");

//method override------------------------
class Teacher extends Person {
  override get fullName(): string {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

//polymorphism------------------------
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([new Student(1, "Alex", "Smith"), new Teacher("John", "Smith")]);

//abstract classes and methods --------------------------------
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("rendering circle");
  }
}

//let shape = new Shape("red"); //error - cannot instanciate an abstract class

//inheritance------------------------
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    console.log("addEvent");
  }
  removeEvent(): void {
    console.log("remove event");
  }
}

//types vs interfaces------------------------
//interface:
interface Human {
  name: string;
}
let person: Human = { name: "Bob" };

//type:
type HumanType = { name: string };
let person2: HumanType = { name: "Bob" };

//interface can extend another interface.
//interface can extend a class.

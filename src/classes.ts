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

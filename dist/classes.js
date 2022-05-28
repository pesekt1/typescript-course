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
        Ride.activeRides++;
    }
    stop() {
        Ride.activeRides--;
    }
}
Ride.activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=classes.js.map
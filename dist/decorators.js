"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(constructor) {
    console.log("component decorator called");
    constructor.prototype.uniquieId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("inserting component in the DOM");
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component
], ProfileComponent);
function Component2(options) {
    return (constructor) => {
        console.log("component decorator called");
        constructor.prototype.selector = options.selector;
    };
}
let ProfileComponent2 = class ProfileComponent2 {
};
ProfileComponent2 = __decorate([
    Component2({ selector: "#app-profile" })
], ProfileComponent2);
function Pipe(constructor) {
    console.log("pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent3 = class ProfileComponent3 {
};
ProfileComponent3 = __decorate([
    Component2({ selector: "#app-profile" }),
    Pipe
], ProfileComponent3);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (message) {
        console.log("Before");
        original.call(this, message);
        console.log("After");
    };
}
class Messenger {
    say(message) {
        console.log("Messenger says " + message);
    }
}
__decorate([
    Log
], Messenger.prototype, "say", null);
let messenger = new Messenger();
messenger.say("hello!");
function Log2(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Buyer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
__decorate([
    Capitalize
], Buyer.prototype, "fullName", null);
let buyer = new Buyer("Alex", "Smith");
console.log(buyer.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                value = newValue;
                return newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
let user2 = new User("1234");
console.log(user2.password);
const watchedParameters = [];
function Watch(target, propertyName, parameterIndex) {
    watchedParameters.push({ methodName: propertyName, parameterIndex });
}
class Vehicle {
    move(distance, speed) { }
}
__decorate([
    __param(1, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParameters);
//# sourceMappingURL=decorators.js.map
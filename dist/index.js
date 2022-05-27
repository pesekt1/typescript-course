"use strict";
var _a;
console.log("Hello World");
let age = 20;
function render(document) {
    console.log(document);
}
let course = "TypeScript";
let level;
level = 12;
level = "Beginner";
let numbers = [1, 2, 3];
let user = [1, "Bob"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
function calculateTax(income, taxYear = 2022) {
    if ((taxYear || 2022) > 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(20000);
calculateTax(20000, 2023);
let employee = {
    id: 25,
    name: "Bob",
    printName: () => console.log(employee.name),
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
let textBox = {
    drag: () => {
        console.log("drag");
    },
    resize: () => {
        console.log("resize");
    },
};
let quantity = 100;
let distance = "km";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello");
}
greet("Bob");
greet(null);
greet(undefined);
function getCustomer(id) {
    console.log(id);
    return { birthdate: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthdate);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthdate) === null || _a === void 0 ? void 0 : _a.getFullYear());
function getCustomers() {
    return [{ birthdate: new Date() }, { birthdate: new Date() }];
}
let customers = getCustomers();
console.log(customers === null || customers === void 0 ? void 0 : customers[0]);
let log = (message) => console.log(message);
log = null;
log === null || log === void 0 ? void 0 : log(`Hi`);
let speed = null;
let ride = { speed: speed !== null && speed !== void 0 ? speed : 30 };
function doSomething(document) {
    if (typeof document === "string")
        console.log(document.toUpperCase());
}
function handleDocument(document) {
    if (document instanceof HTMLInputElement)
        console.log(document.value);
}
function processEvents() {
    while (true) {
    }
}
function reject(reason) {
    throw new Error(reason);
}
//# sourceMappingURL=index.js.map
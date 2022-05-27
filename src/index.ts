// types-------------------------
console.log("Hello World");
let age: number = 20;

// type any-------------------------
//note: global document object is not accessible in node.js, only in the browser.
function render(document: any) {
  console.log(document);
}

let course = "TypeScript";

let level;
level = 12;
level = "Beginner";

//arrays-------------------------
let numbers: number[] = [1, 2, 3];
//numbers.forEach(n => n.)

//tuples - good for key value pairs-------------------------
let user: [number, string] = [1, "Bob"];
//user.
//user[0].
//user[1].

//enums-------------------------

// const smal = 1;
// const medium = 2;
// const large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
}

// enum Size {Small = "s", Medium = "m", Large = "l"}

//for better transpiling:
// const enum Size {Small = 1, Medium, Large}

//functions-------------------------
function calculateTax(income: number, taxYear: number = 2022): number {
  if ((taxYear || 2022) > 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(20_000);
calculateTax(20_000, 2023);

//objects------------------------------------
let employee: { readonly id: number; name: string; printName: () => void } = {
  id: 25,
  name: "Bob",
  printName: () => console.log(employee.name),
};

//type aliases --------------------------------
type Employee = { readonly id: number; name: string; printName: () => void };
// let employee: Employee = {...}

//union types --------------------------------
function kgToLbs(weight: number | string): number {
  //Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//intersection types --------------------------------
type Draggable = { drag: () => void };

type Resizable = { resize: () => void };

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {
    console.log("drag");
  },
  resize: () => {
    console.log("resize");
  },
};

//literal types-------------------------------

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "m" | "km";
let distance: Metric = "km";

//nullable types ------------------------------
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hello");
}

greet("Bob");
greet(null);
greet(undefined);

//optional chaining------------------------------
type Customer = { birthdate: Date };

function getCustomer(id: number): Customer | null | undefined {
  console.log(id);
  return { birthdate: new Date() };
}

//Optional property access operator:
let customer = getCustomer(1);
console.log(customer?.birthdate);
console.log(customer?.birthdate?.getFullYear());

//Optional element access operator
function getCustomers(): Customer[] | null | undefined {
  return [{ birthdate: new Date() }, { birthdate: new Date() }];
}
let customers = getCustomers();
console.log(customers?.[0]);

//optional call
let log: any = (message: string) => console.log(message);
log = null;
log?.(`Hi`);

//the nullish and coalescing operator
let speed: number | null = null;

//falsy values: undefined, null, 0, "", NaN
//let ride = { speed: speed || 30 };
let ride = { speed: speed ?? 30 };

//type assertion-------------------------
//let phone = myDocument.getElementById("phone");
//let phone = document.getElementById("phone") as HTMLInputElement;
//let phone = <HTMLInputElement>document.getElementById("phone");

//unknown type-------------------------
// function doSomething(document: any){
//   document.toUpperCase();
// }

function doSomething(document: unknown): void {
  //narrowing check for
  if (typeof document === "string") console.log(document.toUpperCase());
}

//narrowing types for objects:
function handleDocument(document: unknown): void {
  if (document instanceof HTMLInputElement) console.log(document.value);
}

//never type-------------------------
function processEvents(): never {
  while (true) {
    //infinite loop
  }
}

//processEvents();
// console.log("done");

function reject(reason: string): never {
  throw new Error(reason);
}

// reject("Something went wrong");
// console.log("done"); //unreachable code

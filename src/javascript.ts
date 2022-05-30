import { calculateTax } from "./tax";
import { calculateTax as calculateTax2 } from "./tax2";

//problem: now argument is type of any
//undefined is used when no argument is provided
let tax = calculateTax(); //compiler does not see the problem
console.log(tax);

//let tax2 = calculateTax2(); //the compiler can spot the error

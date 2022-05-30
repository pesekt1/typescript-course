//standard way
import { Square } from "./shapes";

//default export
import Store from "./storage";

//wildcard
import * as Shapes from "./shapes";

//reexporting
import { Circle } from "./shapesPackage";

let square = new Square(10);
console.log(square.x);

let square2 = new Shapes.Square(10);

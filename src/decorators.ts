//class decorators------------------------
function Component(constructor: Function) {
  console.log("component decorator called");
  constructor.prototype.uniquieId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("inserting component in the DOM");
  };
}

@Component
class ProfileComponent {}

//parameterized decorators------------------------
type ComponentOptions = { selector: string };

function Component2(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("component decorator called");
    constructor.prototype.selector = options.selector;
  };
}

@Component2({ selector: "#app-profile" })
class ProfileComponent2 {}

//Decorator composition --------------------------------
function Pipe(constructor: Function) {
  console.log("pipe decorator called");
  constructor.prototype.pipe = true;
}

@Component2({ selector: "#app-profile" })
@Pipe
class ProfileComponent3 {}

//method decorators ------------------------
//descriptor.value - stores the function, we can even replace it with new implementation
//demporarily deactivate noUnusedParameters in tsconfig
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (message: string) {
    console.log("Before");
    original.call(this, message);
    console.log("After");
  };
}

class Messenger {
  @Log
  say(message: string) {
    console.log("Messenger says " + message);
  }
}

let messenger = new Messenger();
messenger.say("hello!");

//flexible solution for any amount of arguments of any type:
function Log2(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

//accessor decorators------------------------
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Buyer {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

let buyer = new Buyer("Alex", "Smith");
console.log(buyer.fullName);

//property decorators------------------------
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(
            `${propertyName} should be at least ${length} characters long`
          );
        value = newValue;
        return newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

let user2 = new User("1234");
console.log(user2.password);

//Parameter decorators------------------------
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, propertyName: string, parameterIndex: number) {
  watchedParameters.push({ methodName: propertyName, parameterIndex });
}

class Vehicle {
  move(distance: number, @Watch speed: number) {}
}

console.log(watchedParameters);

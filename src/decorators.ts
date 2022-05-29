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

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
//# sourceMappingURL=decorators.js.map
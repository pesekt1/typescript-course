"use strict";
var _a, _b;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair1 = new KeyValuePair("one", 1);
let pair2 = new KeyValuePair(2, "two");
let pair3 = new KeyValuePair(1, 2);
function wrapInArray(value) {
    return [value];
}
wrapInArray(1);
wrapInArray("text");
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let array = ArrayUtils.wrapInArray(1);
function fetch(url) {
    console.log("fetching data from " + url);
    return { data: null, error: null };
}
let userResult = fetch("url");
console.log((_a = userResult.data) === null || _a === void 0 ? void 0 : _a.username);
let productResult = fetch("url");
console.log((_b = productResult.data) === null || _b === void 0 ? void 0 : _b.price);
class Man {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Owner extends Man {
}
function echo(value) {
    return value;
}
function echo2(value) {
    return value;
}
echo2(new Man("Bob", "Smith"));
echo2(new Owner("Bob", "Smith"));
function echo3(value) {
    return value;
}
echo3({ name: "Bob" });
function echo4(value) {
    return value;
}
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.compress();
class SearchableStore extends Store {
    search(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        console.log("filtering by category: " + category);
        return [];
    }
}
class StoreGeneric {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    search(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let newStore = new StoreGeneric();
newStore.search("name", "Bread");
newStore.search("price", 10);
//# sourceMappingURL=generics.js.map
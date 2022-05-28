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
//# sourceMappingURL=generics.js.map
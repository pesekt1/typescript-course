//generic classes-------------------------
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair1 = new KeyValuePair<string, number>("one", 1);
let pair2 = new KeyValuePair<number, string>(2, "two");

let pair3 = new KeyValuePair(1, 2);

//generic methods------------------------
function wrapInArray<T>(value: T): T[] {
  return [value];
}

wrapInArray(1);
wrapInArray("text");

class ArrayUtils {
  static wrapInArray<T>(value: T): T[] {
    return [value];
  }
}

let array = ArrayUtils.wrapInArray(1);

//generic interfaces------------------------
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log("fetching data from " + url);
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  name: string;
  price: number;
}

//fetch("url")
let userResult = fetch<User>("url");
console.log(userResult.data?.username);

let productResult = fetch<Product>("url");
console.log(productResult.data?.price);

//generic constraints------------------------

class Owner extends Person {}

function echo<T extends string | number>(value: T) {
  return value;
}

function echo2<T extends Person>(value: T) {
  return value;
}

echo2(new Person("Bob", "Smith"));
echo2(new Owner("Bob", "Smith"));

interface Attorney {
  name: string;
}

function echo3<T extends Attorney>(value: T) {
  return value;
}

echo3({ name: "Bob" });

function echo4<T extends { name: string }>(value: T) {
  return value;
}

//extending generic classes-------------------------

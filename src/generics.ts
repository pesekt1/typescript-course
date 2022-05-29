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

class Man {
  constructor(public firstName: string, public lastName: string) {}
}

class Owner extends Man {}

function echo<T extends string | number>(value: T) {
  return value;
}

function echo2<T extends Man>(value: T) {
  return value;
}

echo2(new Man("Bob", "Smith"));
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
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
}

//Pass the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
store.compress();

//Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  search(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

//Fix the generic type parameter:
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    console.log("filtering by category: " + category);
    return [];
  }
}

//the keyof operator-------------------------
class StoreGeneric<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  search(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let newStore = new StoreGeneric<Product>();
newStore.search("name", "Bread");
newStore.search("price", 10);

//newStore.search("category", "food"); //gives an error

//type mapping-------------------------
interface Product {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [Property in keyof T]: T[Property]; //Index signature + keyof operator
};

let product: ReadOnly<Product> = { name: "Product", price: 10 };

type Optional<T> = { [Property in keyof T]?: T[Property] };

type Nullable<T> = { [Property in keyof T]: T[Property] | null };

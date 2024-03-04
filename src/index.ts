// basic types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
x = true;
let age: number;
age = 30;
let ids: number[] = [1, 2, 3, 4];
ids.push(5);
let arr: any[] = [1, true, "3", 2];
// Typle
let person: [number, string, boolean] = [1, "Brad", true];
//
// Typle array
let employee: [number, string][];
employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// union
let pid: string | number = 22;
pid = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Left);
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log(Direction2.Left);

// Objects
type User = {
  id: number;
  name: string;
};
// before User
// const user: { id: number; name: string } = {
//   id: 1,
//   name: "John",
// };
const user: User = {
  id: 1,
  name: "John",
};
// Type Assertion

let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// functions

function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(1, 2)); //3

// void
function log(message: string | number): void {
  console.log(message);
}
log("hello");

// Interfaces
interface UserInt {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInt = {
  id: 1,
  name: "John",
};

type Point = number | string;
const p1: Point = 1;
// user1.id = 5;
interface MathFunc {
  (x: number, y: number): number;
}
const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

interface PersonInt {
  id: number;
  name: string;
  register(): string;
}

log(add(2, 3));

// Classes
class Person implements Person {
  protected id: number;
  name: string;
  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }
  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike Jordan");
console.log(brad.register());
// subclass
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "john", "jill"]);
// can not do it because <T> and tupes
// numArray.push("hello");
// strArray.push(2);

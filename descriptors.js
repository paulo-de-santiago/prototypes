// @ts-nocheck
let person = { name: "Mosh" };

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor, "keys");

// atributes
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});

person.name = "John";
delete person.name;
console.log(person);

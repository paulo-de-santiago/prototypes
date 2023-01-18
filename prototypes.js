const x = {};
const y = {};

console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));

//Returns true, both x and y have the same prototype
const commonPrototype = Object.getPrototypeOf(x) === Object.getPrototypeOf(y);

console.log(commonPrototype);

/* Define Prototypical Inheritance */
//Ex. toString() wasn't defined in x method. JS engine first looks at this object and if the method isn't there it will look up to the prototype object until it reaches an object with that method. Goes all the way up to the root object.
x.toString();

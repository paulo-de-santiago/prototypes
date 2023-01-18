/* ##################### Multilevel Inheritance  ########################*/

//myArray -> arrayBase -> ObjectBase

//myArray derives from Prototype Array (arrayBase)
//Prototype Array derives from Prototype Object

let myArray = [];
//Check the prototype or parent for this array
//check the methods
console.log(myArray);

/* ###################### Constructor Object ####################### */

//Objects created by a given constructor will have the same prototype
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

//circle -> CircleBase (prototype Circle) -> ObjectBase

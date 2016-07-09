/**
 * Implement the following:

 1.    Define a Shape constructor. Objects created with Shape should have a `type` property and a `getType` method.
 2.    Define a Triangle constructor. Objects created with Triangle should inherit from Shape and have three own properties: a, b and c representing the sides of a triangle.
 3.    Add a new method to the prototype called `getPerimeter`.
 Test your implementation with this code:

 var t = new Triangle(1, 2, 3);
 t.constructor;                 // Triangle(a, b, c)
 t instanceof Shape                // true
 t.getPerimeter();              // 6
 t.getType();                   // "triangle"
 */

class Shape {
    constructor() {
        this.getType();
    }

    getType() {
        // Constructor stores the name property that is equal to the class name.
        // So there is no need to pass another type property.
        return this.constructor.name; 
    }
}

class Triangle extends Shape {
    constructor(a, b, c) {
        super();

        this.sides = arguments;
        this.getPerimeter();
    }

    getPerimeter() {
        let perimenter = 0;
        for (var i = 0; i < this.sides.length; i++) {
            perimenter += this.sides[i];
        }

        return perimenter;
    }
}

let t = new Triangle(1, 2, 3);

// Output
console.log(t.constructor);
console.log(t instanceof Shape);
console.log(t.getPerimeter());
console.log(t.getType());

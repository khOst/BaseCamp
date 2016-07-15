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
    constructor(type = 'shape') {
        this.type = type;
    }

    getType() {
        return this.type;
        // Or we can get the type like this:
        //return this.constructor.name;
    }
}

class Triangle extends Shape {
    constructor(type, ...sides) {
        super(type);
        this.perimeter = sides.reduce((a, b) => a + b);
    }

    //getPerimeter is stored in Triangle.prototype
    getPerimeter() {
        return this.perimeter;
    }
}

const t = new Triangle('triangle', 1, 2, 3);

// Output
console.log(t.constructor);
console.log(t instanceof Shape);
console.log(t.getPerimeter());
console.log(t.type);


//1 + add(1)(2) // 4
function add(a) {
    var sum = a;

    function addOne(b) {
        sum += b;
        return addOne;
    }

    addOne.toString = function() {
        return sum;
    };

    return addOne;
}

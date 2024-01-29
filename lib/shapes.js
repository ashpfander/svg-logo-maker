// Parent class for all shapes
class Shape {
    constructor(text, shape, textColor, shapeColor) {
        this.text = text;
        this.shape = shape;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// Child classes for each shape using properties from parent Shape class
class Circle extends Shape {
    constructor(text, shape, textColor, shapeColor) {
      super(text, shape, textColor, shapeColor);
    }
}

class Triangle extends Shape {
    constructor(text, shape, textColor, shapeColor) {
      super(text, shape, textColor, shapeColor);
    }
}

class Square extends Shape {
    constructor(text, shape, textColor, shapeColor) {
      super(text, shape, textColor, shapeColor);
    }
}

// module.exports = Shape;
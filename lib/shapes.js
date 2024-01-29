// Parent class for all shapes
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// Child classes for each shape using properties from parent Shape class
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
      // <circle cx="25" cy="75" r="200"/>
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
      // <polygon points="150, 18 244, 182 56, 182"/>
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
      // <rect x="10" y="10" width="200" height="200"/>
    }
}

module.exports = {Circle, Triangle, Square};
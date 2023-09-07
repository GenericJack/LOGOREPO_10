// shapes.js

class Square {
  constructor() {
    // Constructor code for Square
    this.color = "black"; //default

  }

  setColor(color) {
    // Set color logic
    this.color = color;

  }

  render() {
    // Render logic for Square
    const svg = `<rect x="10" y="10" width= "100" height="100" fill="${this.color}`
    return svg;
  }
}

class Triangle {
  constructor() {
    // Constructor code for Triangle
    this.color = "black"; //default
  }

  setColor(color) {
    // Set color logic
    this.color = color;
  }

  render() {
    // Render logic for Triangle
    const svg = `<polygon points="10,10 110,10 60,110" fill="${this.color}" />`;
    return svg;
  }
}

class Circle {
  constructor() {
    // Constructor code for Circle
    this.color = "black";
  }

  setColor(color) {
    // Set color logic
    this.color = color
  }

  render() {
    // Render logic for Circle
    const svg = `<circle cx="60" cy="60" r="50" fill="${this.color}" />`;
    return svg;
  }
}

class SVG {
  constructor() {
    this.text = "";
    this.shape = null;
    this.shapeText = "";
  }

  setText(text, color) {
    this.text = `<text x="20" y="20" fill="${color}">${text}</text>`;
  }

  setShape(shape) {
    this.shape = shape;
  }

  setShapeText(text, color) {
    this.shapeText = `<text x="30" y="150" fill="${color}">${text}</text>`;
  }

  render() {
    if (!this.shape) {
      return "";
    }
    
    const shapeSvg = this.shape.render();
    
    const svg = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.text}
      ${shapeSvg}
      ${this.shapeText}
    </svg>`;

    return svg;
  }
}

module.exports = { Square, Triangle, Circle, SVG };


// Export the classes

// const { Square, Triangle, Circle } = require("./shapes");

// describe("Circle", () => {
//   test("should render svg for a green circle element", () => {
//     const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
//     const circle = new Circle();
//     circle.setColor("green");
//     const actualSvg = circle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
//   test("should accept a fillColor param", () => {
//     const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
//     const circle = new Circle();
//     circle.setColor("blue");
//     const actualSvg = circle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
// });

// describe("Triangle", () => {
//   test("should render svg for a green polygon element", () => {
//     const expectedSvg =
//       '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';
//     const triangle = new Triangle();
//     triangle.setColor("bisque");
//     const actualSvg = triangle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
//   test("should accept a fillColor param", () => {
//     const expectedSvg =
//       '<polygon points="150, 18 244, 182 56, 182" fill="purple" />';
//     const triangle = new Triangle();
//     triangle.setColor("purple");
//     const actualSvg = triangle.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
// });

// describe("Square", () => {
//   test("should render svg for a green polygon element", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';
//     const square = new Square();
//     square.setColor("dodgerblue");
//     const actualSvg = square.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
//   test("should accept a fillColor param", () => {
//     const expectedSvg =
//       '<rect x="90" y="40" width="120" height="120" fill="red" />';
//     const square = new Square();
//     square.setColor("red");
//     const actualSvg = square.render();
//     expect(actualSvg).toEqual(expectedSvg);
//   });
// });

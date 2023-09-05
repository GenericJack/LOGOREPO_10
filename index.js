const inquirer = require("inquirer")
const fs = require("fs");
const { SVG, Square, Triangle, Circle } = require("./shapes"); //classes import

//collect user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text (up to 3 characters):",
        validate: function (input) {
            return input.length <= 3;
        },
    },

    {
        input: "input",
        name: "textColor",
        message: "Enter text color (keyword or hex code):",
    },
    {
        type: "list",
        name: "shapeType",
        message: "Choose a shape:",
        choices: ["Square", "Triangle", "Circle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color (keyword or hex code):",
      },
];

//CLI function
async function startApp() {
    try {
      const userInput = await inquirer.prompt(questions);
  
      
      const svg = new SVG();
  
      
      svg.setText(userInput.text, userInput.textColor);
  
      
      let shape;
      switch (userInput.shapeType) {
        case "Square":
          shape = new Square();
          break;
        case "Triangle":
          shape = new Triangle();
          break;
        case "Circle":
          shape = new Circle();
          break;
      }
      shape.setColor(userInput.shapeColor);
  
      // Set the shape in SVG
      svg.setShape(shape);
  
      // Generate the SVG code
      const svgCode = svg.render();
  
      // Write the SVG code to a file
      fs.writeFileSync("logo.svg", svgCode);
  
      console.log("Generated logo.svg");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  
  startApp();

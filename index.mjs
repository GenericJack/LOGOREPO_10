import fs from "fs/promises"; // Use 'import' for ES Modules
import inquirer from "inquirer"; // Use 'import' for ES Modules
import shapesModule from "./lib/shapes.js"; 

const { SVG, Square, Triangle, Circle } = shapesModule;

// CLI function
async function startApp() {
  try {
    const questions = [
      {
        type: "input",
        name: "text",
        message: "Enter text (up to 3 characters):",
        validate: (input) => input.length <= 3,
      },
      {
        type: "input",
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

    
    svg.setShape(shape);

    // Set the text to be rendered inside the shape
    svg.setShapeText(userInput.text, userInput.textColor);

    // Generate the SVG code
    const svgCode = svg.render();

    // Write the SVG code to a file
    await fs.writeFile("logo.svg", svgCode);

    console.log("Generated logo.svg");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

startApp();

// import fs from "fs"; // Use 'import' for ES Modules
// import { SVG, Square, Triangle, Circle} from "./lib/shapes.test.js"; // classes import
// import inquirer from "inquirer"; // Use 'import' for ES Modules

// // CLI function
// async function startApp() {
//   try {
//     const questions = [
//       {
//         type: "input",
//         name: "text",
//         message: "Enter text (up to 3 characters):",
//         validate: function (input) {
//           return input.length <= 3;
//         },
//       },
//       {
//         type: "input",
//         name: "textColor",
//         message: "Enter text color (keyword or hex code):",
//       },
//       {
//         type: "list",
//         name: "shapeType",
//         message: "Choose a shape:",
//         choices: ["Square", "Triangle", "Circle"],
//       },
//       {
//         type: "input",
//         name: "shapeColor",
//         message: "Enter shape color (keyword or hex code):",
//       },
//     ];

//     const userInput = await inquirer.prompt(questions);

//     const svg = new SVG();

//     svg.setText(userInput.text, userInput.textColor);

//     let shape;
//     switch (userInput.shapeType) {
//       case "Square":
//         shape = new Square();
//         break;
//       case "Triangle":
//         shape = new Triangle();
//         break;
//       case "Circle":
//         shape = new Circle();
//         break;
//     }
//     shape.setColor(userInput.shapeColor);

//     // Set the shape in SVG
//     svg.setShape(shape);

//     // Generate the SVG code
//     const svgCode = svg.render();

//     // Write the SVG code to a file
//     fs.writeFileSync("logo.svg", svgCode);

//     console.log("Generated logo.svg");
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// startApp();
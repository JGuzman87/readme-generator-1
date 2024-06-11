  // TODO: Include packages needed for this application
  const fs = require("fs");
  const inquirer = require("inquirer");
  const path = require("path");
  const generateMarkdown = require("./generateMarkdown")

  
  // inquirer
  //   .prompt([
  //     {
  //       type: "list",
  //       message: "What is your favorite color?",
  //       name: "color",
  //       choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
  //     }
  //   ])
  //   .then((response) =>
  //     console.log(colors[response.color](`Your favorite color is ${response.color}!`))
  //   );
  
  
  
  // TODO: Create an array of questions for user input
  const questions = [
  { type: "input", 
    name: "title",
    message: "Please name your project",
  }, 
  { type: "input", 
    name: "description",
    message: "What is the description of your project",
  }, 
  { type: "input", 
    name: "installation",
    message: "Please provide installation",
  }, 
  { type: "input", 
    name: "contact",
    message: "Please provide your email address",
  }, 
  ];
  
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then(responses => {
      writeToFile("./README.md", generateMarkdown({...responses}));
    });
  }
  
  // Function call to initialize app
  init();
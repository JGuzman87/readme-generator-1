  // TODO: Include packages needed for this application
  const fs = require("fs");
  const inquirer = require("inquirer");
  const path = require("path");
  const generateMarkdown = require("./generateMarkdown")


  
  
  // TODO: Create an array of questions for user input
  const questions = [
  { 
    type: "input", 
    name: "title",
    message: "Please name your project",
  }, 
  { type: "input", 
    name: "description",
    message: "What is the description of your project",
  },
  {
    type: "list",
    name: "license",
    message: "Please select licence",
    choices: ["MIT","Apache_2.0", "Boost_1.0"]

  },
  {
    type: "input", 
    name: "installation",
    message: "Please provide installation",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information"
  },
  { 
    type: "input", 
    name: "contributing",
    message: "Please provide contributions",
  },
  {
    type: "input",
    name: "test",
    message: "add test",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide Email address",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide a link to your Github account",
  }
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
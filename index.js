let fs = require("fs");
let inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(){
    return inquirer.prompt(
        [
            {
                type: "input",
                message: "What is your title?",
                name: "title"
            },
            {
                type: "input",
                message: "Enter your description.",
                name: "description"
            },
            {
                type: "checkbox",
                message: "Enter your table of contents.",
                name: "tableContents",
                choices: ["[Description](#description)",
                 "[Installation](#installation)", 
                 "[Usage](#usage)", 
                 "[License](#license)", 
                 "[Contributing](#contributing)",
                 "[Tests](#tests)",
                 "[Questions](#questions)"]
            },
            {
              type: "input",
              message: "Enter your installation instructions",
              name: "install" 
            },
            {
              type: "input",
              message: "Enter usage information",
              name: "usage"  
            },
            {
                type: "list",
                message: "License?",
                name: "licensing",
                choices: ["[ISC](https://choosealicense.com/licenses/ISC/)", "ISC"]
            },
            {
                type: "input",
                message: "Contributing guidelines",
                name: "contribute" 
            },
            {
                type: "input",
                message: "Tests",
                name: "test"
            },
            {
                type: "input",
                message: "Questions?",
                name: "questions"
            },
            {
                type: "input",
                message: "What is your github username?",
                name: "gitHubURL"
            },
            {
                type: "input",
                message: "What is your email?",
                name: "email"
            }
        ]
    );
}

inqPromise = promptUser();
inqPromise.then(function(userInput) {
    let md = `
# ${userInput.title}

## Description
* ${userInput.description}

## Table of Contents
* (#${userInput.tableContents})

## Installation
* ${userInput.install}
 
## Usage
* ${userInput.usage}

## License
* ${userInput.licensing}

## Contributing
* ${userInput.contribute}

## Tests
* ${userInput.test}

## Questions
* If you have any additional questions you can email me at ${userInput.email}
* [github link](https://github.com/${userInput.gitHubUrl})

   `;
   let writePromise = writeFileAsync("profile.md", md);
   writePromise.then(function() {
       console.log("Yay you did it!");

    }).catch(function(err) {
        console.log("Problem with writing file profile.md");
        console.log(err);
   }).catch(function(err) {
        console.log("Problem with inquirer.prompt");
        console.log(err);
   });
});
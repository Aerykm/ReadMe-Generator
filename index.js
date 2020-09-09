const fs = require("fs");

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([
    {
        type: "input",
        message: "What is the title?",
        name: "title",
    },
    {
        type: "input",
        message: "What would you like to put in the description?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you go about installation?",
        name: "installation"
    },
    {
        type: "list",
        message: "Which license are you using?",
        name: "license",
        choices: [
            "MIT License",
            "GVL GPL License",
            "Apache License",
            "No License"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
])



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("ReadMe was created");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const response = generateMarkdown(answers);
        console.log(answers);

        writeToFile("README.md", response);
    })
}


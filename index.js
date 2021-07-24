// TODO: Include packages needed for this application
let inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is your repo name? (Required)'
    },
    // Description of project
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project (Required)'
    },
    // Installation of project
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter your Installation Instructions.'
    },
    // Project usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter your Usage information on how to use your project'
    },
    // License information
    {
        type: 'list',
        name: 'license',
        message: 'Please chose a project license.',
        choices: ['MIT', 'Apache', 'SIL']
    },
    // Who can contribute?
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter your instructions for Contributing to this project.'
    },
    // How to run tests?
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples on how to run tests for your project.'
    },
    // Github username
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your GitHub username so people can contact you with Questions.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address so people can contact you with questions.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err){
        if(err) return console.log(err)
        console.log('SUCCESSFULLY WROTE THE FILE!!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            let markdownString = generateMarkdown(answers);
            writeToFile('README.md', markdownString);
        })

}

// Function call to initialize app
init();

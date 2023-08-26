// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generateMarkdown, license} = require('./utils/generateMarkdown');
const licenseChoices = license.map(l => l.name);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: licenseChoices,
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'liveLink',
        message: 'Please provide a link to your live project. Ex: GitHubUserName.github.io/projectname',
        filter: function(value) {
            return value.replace(/(http:\/\/|https:\/\/)/g, '');
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('File Successfully Generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile("README.md", markdown);
        }).catch((err) => {
            console.log("Error: ", err)
        });
}


// Function call to initialize app
init();

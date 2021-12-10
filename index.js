const inquirer = require('inquirer');

const questions = [
    {
        type: 'list',
        name: 'position',
        message: 'Select a position:',
        choices: ["Manager", "Engineer", "Intern"]
    },
]

function init() {
    inquirer.prompt(questions) 
    .then(data => {
        console.log(data);
    })
}

init();
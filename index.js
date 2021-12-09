const inquirer = require('inquirer');

const broadQuestions = [
    {
        type: 'choices',
        name: 'role',
        message: 'Please select a position:' ["Manager", "Engineer", "]
    }
];

const managerQs = [
    {

    }
];

inquirer.prompt(broadQuestions)
.then(questionData => {
    console.log(questionData);
})
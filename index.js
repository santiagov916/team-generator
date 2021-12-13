const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const loadHTML = require('./loadHTML');
const employeeInfo = [];

        // questions for the prompt
const questions = [
    {
        type: 'list',
        message: 'Please select a position:',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?'
    },
    {
        type: 'email',
        name: 'email',
        message: 'What is your email?'
    },
        //prompt questions specific to the role chosen
    {   when: (data) => data.role === "Manager",
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    },
    {
        when: (data) => data.role === "Engineer",
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    },
    {
        when: (data) => data.role === "Intern",
        type: 'input',
        name: 'school',
        message: 'What University or school do you represent?'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err? console.log(err) : console.log("Your team's page is now available!"))
}


        // function init is the main function for this program
function init() {

        // when role is selected, that data will go to the corresponding name
inquirer.prompt(questions)
.then(data => {
    if (data.role == "Manager") {
        const newEmployeeData = new Manager(data.name, data.id, data.email, data.officeNumber)
        employeeInfo.push(newEmployeeData)
    }
    if (data.role == "Engineer") {
        const newEmployeeData = new Engineer(data.name, data.id, data.email, data.github)
        employeeInfo.push(newEmployeeData)
    }
    if (data.role == "Intern") {
        const newEmployeeData = new Intern(data.name, data.id, data.email, data.github)
        employeeInfo.push(newEmployeeData)
    }
    inquirer.prompt({

        // extra employee add-on prompt goes here
        type: 'list',
        name: 'selectMore',
        message: 'Add another employee?',
        choices: ["Add", "Skip"]

        // if they select another employee restart init() function, if not write the file with the employee data and send it to the output/index-h.html file
    }).then(anotherEmployee => {
        if(anotherEmployee.selectMore == "Add") {
            init();
        } else {
            writeToFile("./output/index-h.html", finalHtml)
        }
    })

    const finalHtml = loadHTML.loadTeam(employeeInfo);

});
};

        // call init at the start of "node index or node index.js"
init();
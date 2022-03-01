const inquirer = require('inquirer');
const path = require('path');

// Classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern') 

// File system 
const fs = require('fs');


// Terminal Prompt Questions

const promptQuestions = () => {
return inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"What is your name?"
    },
    {
        type:"input",
        name:"id",
        message:"What is your employee ID?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your email?"
    },
    {
        type:"list",
        name:"role",
        choices:["Manager", "Employee", "Engineer", "Intern"],
        message:"What is your role?"
    }
])
};




function init() {
    promptQuestions()
    .then((response) => {
        const managerResponse = new Manager(response);
        const engineerResponse = new Engineer(response);
        const internResponse = new Intern(response);

        // const managerHTML = managerResponse.method();
        // const engineerHTML = engineerResponse.method();
        // const internHTML = internResponse.method();

        fs.writeFile(path.join(__dirname, '/result', 'thismyteam.html'), managerHTML, engineerHTML, internHTML,
        err => {
            if (err) throw err;
            console.log("Your Team Profile has been successfully generated in the result folder!");
        });
    });
}


// Initialize App
init();

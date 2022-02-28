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
            err ? console.log(err) : console.log("Your Team Profile has been successfully generated!");
        });
    });
}


// Initialize App
init();

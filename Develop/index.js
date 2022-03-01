const inquirer = require('inquirer');
const path = require('path');

// Classes
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern') 

// File system 
const fs = require('fs');

// Simplified Path Variables
const resultDirectory = path.resolve(__dirname, "result");
const resultHTML = path.join(resultDirectory, "myteam.html");

// Manager, Engineer, and Intern objects
const staff = [];

// Terminal Prompt Questions

const promptQuestions = () => {
    managerQuestionaire();
}

const managerQuestionaire = () => {
    inquirer.prompt([
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
        type:"input",
        name:"officeNumber",
        message:"What is your office number?"
    }
    ]).then((response) => {
        const managerInfo = new Manager(response.name, response.id, response.email, response.officeNumber);
        staff.push(managerInfo);
        err ? console.log(err) : console.log('Manager info saved!')
    })
};

const additionalMembers = () => {
    inquirer.prompt([
        {
            type:"list",
            name:"addEmployee",
            choices:["Engineer","Intern","None"],
            message:"Who would you like to add to your team?"
        }
    ]).then((response) => {
        if(response.addEmployee === "Engineer") {
            // why is it addEmployee also this is where you will put the function for engineer
        } else if(response.addEmployee === "Intern") {

        }
        init();
    })
};





function init() {
    promptQuestions()
        // const managerHTML = managerResponse.method();
        // const engineerHTML = engineerResponse.method();
        // const internHTML = internResponse.method();

        fs.writeFile(path.join(__dirname, '/result', 'thismyteam.html'), managerHTML, engineerHTML, internHTML,
        err => {
            if (err) throw err;
            console.log("Your Team Profile has been successfully generated in the result folder!");
        });
   
};


// Initialize App
init();

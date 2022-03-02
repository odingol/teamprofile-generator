const inquirer = require('inquirer');
const path = require('path');

// Classes
const Manager = require('./Develop/lib/Manager')
const Engineer = require('./Develop/lib/Engineer')
const Intern = require('./Develop/lib/Intern') 

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
        message:"What is your manager ID?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your E-mail address?"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What is your office number?"
    }
    ]).then((response) => {
        const managerInput = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(`Welcome ${response.name}, let's start building your team!`);
        staff.push(managerInput);
        additionalMembers();
    })
};

const additionalMembers = () => {
    inquirer.prompt([
        {
            type:"list",
            name:"addEmployee",
            choices:["Engineer","Intern","Done, let's see my Team!"],
            message:"Who would you like to add to your team?"
        }
    ]).then((response) => {
        if(response.addEmployee === "Engineer") {
            // why is it addEmployee also this is where you will put the function for engineer
            engineerPrompt();
        } else if(response.addEmployee === "Intern") {
            internPrompt();
        }
        init();
    })
};

const engineerPrompt = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Engineer's name?"
        },
        {
            type:"input",
            name:"id",
            message:"What is the Engineer's ID?"
        },
        {
            type:"input",
            name:"email",
            message:"What is the Engineer's E-mail address?"
        },
        {
            type:"input",
            name:"github",
            message:"What is the Engineer's Github username?"
        }
    ]).then((response) => {
        const engineerInput = new Engineer(response.name, response.id, response.email, response.github);
        console.log(`${response.name} has been added as an Engineer to your team!`)
        staff.push(engineerInput);
    });
};

const internPrompt = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Intern's name?"
        },
        {
            type:"input",
            name:"id",
            message:"What is the Intern's ID?",
        },
        {
            type:"input",
            name:"email",
            messsage:"What is the Intern's E-mail address?"
        },
        {
            type:"input",
            name:"school",
            message:"Where does the Intern go to school?"
        }
    ]).then((response) => {
        const internInput = new Intern(response.name, response.id, response.email, response.school) 
        console.log(`${response.name} has been added as an Intern to your team!`)
        staff.push(internInput);
    })
}


function init() {

    fs.writeFile(staff, resultHTML, err => {
        if (err) throw err;
        console.log("Your Team Profile has been successfully generated in the result folder!");
    });
};


// Initialize App
promptQuestions();

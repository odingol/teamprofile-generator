const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Classes
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");

// Simplified Path Variables
const resultDirectory = path.resolve(__dirname, "Develop/result");
const resultHTML = path.join(resultDirectory, "myteam.html");

// Manager, Engineer, and Intern objects
const staff = [];

// Terminal Prompt Questions

const promptQuestions = () => {
    htmlMain();
    managerQuestionaire();
};

const managerQuestionaire = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your E-mail address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((response) => {
      const managerInput = new Manager(response.name, response.id, response.email, response.officeNumber);

      console.log(`Welcome ${response.name}, let's start building your team!`);
      staff.push(managerInput);
      additionalMembers();
      newRole(managerInput);
    });
};

const additionalMembers = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        choices: ["Engineer", "Intern", "Done, let's see my Team!"],
        message: "Who would you like to add to your team?",
      },
    ])
    .then((response) => {
      if (response.addEmployee === "Engineer") {
        engineerPrompt();
      } else if (response.addEmployee === "Intern") {
        internPrompt();
      } else {
        bottomHtml();
      }
    });
};

const moreMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "more",
        choices: ["Engineer", "Intern", "Done, let's see my Team!"],
        message: "Would like to add an additional member?",
      },
    ])
    .then((response) => {
      if (response.more === "Engineer") {
        engineerPrompt();
      } else if (response.more === "Intern") {
        internPrompt();
      } else {
        bottomHtml();
      }
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's E-mail address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's Github username?",
      },
    ])
    .then((response) => {
      const engineerInput = new Engineer(response.name, response.id, response.email, response.github);

      console.log(`${response.name} has been added as an Engineer to your team!`);
      staff.push(engineerInput);
      newRole(engineerInput);
      moreMember();
    });
};

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message:"What is the Intern's E-mail address?",
      },
      {
        type: "input",
        name: "school",
        message: "Where does the Intern go to school?",
      },
    ])
    .then((response) => {
      const internInput = new Intern(response.name, response.id, response.email, response.school);

      console.log(`${response.name} has been added as an Intern to your team!`);
      staff.push(internInput);
      newRole(internInput);
      moreMember();
    });
};

// Start of Creating the HTML Page

function htmlMain() {
  const htmlStart = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/79cda57a21.js" crossorigin="anonymous"></script>
    <title>Team Profile Generator</title>
</head>

<body>
    <header>
        <div class="shadow-lg jumbotron jumbotron-fluid w-100 p-5" style="background-color:rgb(156, 216, 190)">
            <div class="d-flex justify-content-center container">
            <h1 class="display-4">My Team</h1>
            </div>
            </div>
    </header>

    <main>
        <section class="row d-flex justify-content-center w-100 p-5">`;
  fs.writeFile(resultHTML, htmlStart, (err) => {
    if (err) throw err;
  });
}

function newRole(candidate) {
  return new Promise(function (resolve, reject) {
    const name = candidate.getName();
    const id = candidate.getId();
    const email = candidate.getEmail();
    const role = candidate.getRole();
    let card = "";

    if (role === "Engineer") {
      const gitHub = candidate.getGithub();
      card = 
    `<div class="col-md-3 card m-5">
        <div class="row card-header d-flex justify-content-center">
            <h2 class="card-title d-flex justify-content-center w-100">${name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></li>
            </ul>
        </div>
    </div>
    `;
    } else if (role === "Intern") {
      const school = candidate.getSchool();
      card = 
    `<div class="col-md-3 card m-5">
        <div class="row card-header d-flex justify-content-center">
            <h2 class="card-title d-flex justify-content-center w-100">${name}</h2>
            <h3 class="card-title"><i class="fa-solid fa-user-graduate mr-1"></i>${role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>
    </div>
    `;
    } else {
      const officeNumber = candidate.getOfficeNumber();
      card = 
    `<div class="col-lg-4 card">
          <div class="row card-header d-flex justify-content-center bg-primary">
              <h2 class="card-title d-flex justify-content-center w-100 text-white">${name}</h2>
              <h3 class="card-title text-white"><i class="fa-solid fa-mug-hot p-1 text-warning"></i>${role}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                  <li class="list-group-item">Office number: ${officeNumber}</li>
              </ul>
          </div>
      </div>
    `;
    }

    fs.appendFile(resultHTML, card, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

function bottomHtml() {
  const htmlEnd = `
  </section>
</main>
</body>
    
</html>`;

  fs.appendFile(resultHTML, htmlEnd, (err) => {
    if (err) throw err;
  });
}

// Run the APP
promptQuestions();

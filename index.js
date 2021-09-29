// TODO: Include packages needed for this application

//Closely studied https://github.com/jpd61/README-generator for assitance in creating this

const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


function prompts (){
return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projTitle',
    },
    {
      type: 'input',
      message: 'Write a short description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please list installation instructions:',
      name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'What is the usage of this project?',
        name: 'usageInstructions',
      },
      {
        type: 'input',
        message: 'Please list any contribution guidelines:',
        name: 'contributionInstructions',
      },
    ])}



// // TODO: Create a function to initialize app

async function init() {

    var answers = await prompts()
    console.log(answers)
    const generateREADME = generateMarkdown(answers);
    await writeFileAsync('./test/README.md', generateREADME);    

}

// // // Function call to initialize app
init();

//Again credits to https://github.com/jpd61/README-generator for assitance in creating this

//Other functions did not seem necessary to complete HW objs

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# Title: ${data.projTitle} 

![badge](https://img.shields.io/badge/license-${data.license}-darkred)


## Description:

${data.description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation Instructions:

${data.installInstructions}

## Usage:

${data.usageInstructions}

## Tests:

${data.usageInstructions}

## License:

This application is covered under the ${data.license} license. 

## My Github Account:

  Click here: https://github.com/${data.github}

## Questions:

  Feel free to email me at: ${data.email}

`;
}

module.exports = generateMarkdown;

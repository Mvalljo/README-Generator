// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GNU-General-Public":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "http://www.apache.org/licenses/";
    case "GNU-General-Public-v3":
      return "https://www.gnu.org/licenses/";
    case "MIT":
      return "https://spdx.org/licenses/MIT.html";
    default:
      return "";

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache":
      return "./apacheLicense"
    case "GNU-General-Public":

      break;
    case "MIT":
      break;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<img src="${renderLicenseBadge(data.license)}" alt="license badge">
${renderLicenseLink(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
## License
${renderLicenseSection(data.license)}
## Features
## How to Contribute
${data.contribution}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
